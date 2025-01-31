import SalesTransaction from "../Models/transactionModel.js";
import User from "../Models/userModel.js";
import { sendTransactionStatusEmail, transactionApprovalRequestEmail } from "../Utils/mailsender/emailFunctions.js"
import dotenv from "dotenv";

dotenv.config();

export const createTransaction = async (req, res) => {
  const { amount, cardName, countryName, countryCode, cardNumber, cardImage, rate} =
    req.body;
  try {
    if (
      !amount ||
      !cardName ||
      !countryName ||
      !countryCode ||
      !cardNumber ||
      !cardImage ||
      !rate
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const details = await User.findById(req.userId);
    if (!details) {
      return res.status(404).json({ message: "User not found" });
    }

    const email = details.email;

    if (!req.userId) {
      return res
        .status(401)
        .json({ message: "Unauthorized. User ID is required." });
    }

    const newTransaction = new SalesTransaction({
      email,
      amount,
      cardName,
      countryName,
      countryCode,
      cardNumber,
      cardImage,
      rate,
      userId: req.userId,
    });

    await newTransaction.save();
    const userAccount = await User.findById(newTransaction.userId);
    console.log(userAccount);
    console.log({
      ...newTransaction._doc,
      account: userAccount.accountDetails,
    });

    transactionApprovalRequestEmail( process.env.ADMIN_EMAIL, {
      ...newTransaction._doc,
      account: userAccount.accountDetails,
    });
    res.status(201).json();
    console.log({ message: 'Transaction submitted successfully', transaction: newTransaction });
  } catch (error) {
    console.error("Error in sell controller", error.message);
    res.status(500).json({ error: "internal Server Error" });
  }
};



export const approveTransaction = async (req, res) => {
  const { transactionId, status, secretkey } = req.query; // Extract userId and status from query parameters
  if (!transactionId) {
    return res.status(400).json({ error: "Transaction ID is required." });
  }
  if (secretkey!= process.env.SECRET_KEY) {
    return res.status(401).json({ error: "Unauthorized. Invalid Secret Key." });
  }

  try {
    if (!["accepted", "rejected"].includes(status)) {
      return res
        .status(400)
        .json({
          success: false,
          message: 'Invalid status. Must be "accepted" or "rejected".',
        });
    }
    const updatedTransaction = await SalesTransaction.findByIdAndUpdate(
      transactionId,
      { status: status},
      { new: true }
    );
    const tdetails = await SalesTransaction.findById(transactionId)
    const userDettails = await User.findById(tdetails.userId) 



    if (!updatedTransaction) {
      return res.status(404).json({ error: "Transaction not found." });
    }

    sendTransactionStatusEmail(userDettails, status, tdetails)
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Approval Status</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 20px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 100vh;
              }
              .container {
                  background-color: #ffffff;
                  padding: 20px;
                  border-radius: 5px;
                  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                  text-align: center;
              }
              h1 {
                  color: #333;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <h1>${
                status === "accepted"
                  ? "Transaction has been accepted."
                  : "Transaction has been rejected."
              }</h1>
              <a href="/">Go back home</a>
          </div>
      </body>
      </html>
    `);
  } catch (error) {
    console.error("Error in approveTransaction controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const getMyTransactions = async(req,res)=>{

  if (!req.userId) {
    return res
     .status(401)
     .json({ message: "Unauthorized. User ID is required." });
  }
  try {
    const transactions = await SalesTransaction.find({userId: req.userId})

    res.status(200).json(transactions);} catch (err) {
      console.error("Error in getMyTransactions controller", err.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
}










// import SalesTransaction from "../Models/transactionModel.js";

// export const getTransaction = async (req, res) => {
//     try {
//         const tran = await SalesTransaction.find()
//         .populate({
//             path: "userId",
//             model: "User",
//             select: " username email accountDetails",
//         })

//         res.status(200).json(tran);
//     } catch (error) {
//         console.error("Error in get getTransaction controller", error.message);
//         res.status(500).json({ error: "Internal Server Error" });
//     }

// }

// export const updateTransaction = async (req, res) => {
//     const {id, value} = req.body;

//     if (!id || !value) {
//         return res.status(400).json({ error: "Transaction ID and value are required." });
//     }

//     try {
//         const updatedTransaction = await SalesTransaction.findByIdAndUpdate({id: id}, {value: value},{new:true});

//         if (!updatedTransaction) {
//             return res.status(404).json({ error: "Transaction not found." });
//         }

//         res.status(200).json(updatedTransaction);

//     } catch (error) {
//         console.error("Error in updatedTransaction controller", error.message);
//         res.status(500).json({ error: "Internal Server Error" });
//     }

// }
