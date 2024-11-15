import SalesTransaction from "../Models/transactionModel.js";
import User from "../Models/userModel.js";
import { transactionApprovalRequestEmail } from "../Utils/mailsender/emailFunctions.js";

export const createTransaction = async (req, res) => {
  const { amount, cardName, countryCode, cardNumber, cardImage, rate } =
    req.body;
  try {
    if (
      !amount ||
      !cardName ||
      !countryCode ||
      !cardNumber ||
      !cardImage ||
      !rate
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!req.userId) {
      return res
        .status(401)
        .json({ message: "Unauthorized. User ID is required." });
    }

    const newTransaction = new SalesTransaction({
      amount,
      cardName,
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

    transactionApprovalRequestEmail("ijarwisdom@gmail.com", {
      ...newTransaction._doc,
      account: userAccount.accountDetails,
    });
    res.status(201).json();
    // console.log({ message: 'Transaction submitted successfully', transaction: newTransaction });
  } catch (error) {
    console.error("Error in sell controller", error.message);
    res.status(500).json({ error: "internal Server Error" });
  }
};

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
