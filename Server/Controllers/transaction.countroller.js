import SalesTransaction from "../Models/transactionModel.js";


export const getTransaction = async (req, res) => {
    try {
        const tran = await SalesTransaction.find()
        .populate({
            path: "userId",
            model: "User",
            select: " username email password accountDetails",
        })
        res.status(200).json(tran);
    } catch (error) {
        console.log("Error in get getTransaction controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
    
}

export const updateTransaction = async (req, res) => {
    const {status, value} = req.body;
    try {
        const updatedTransaction = await SalesTransaction.findOneAndUpdate({status: status}, {value: value},{new:true});
        res.status(200).json(updatedTransaction);
    } catch (error) {
        console.log("Error in updatedTransaction controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }

}


export const sell= async (req, res) => {
    try {
        const {cardname, countrycode, cardnumber, cardimage, amount} = req.body;
        if (!cardname || !countrycode || !cardnumber || !cardimage || !amount) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const newTransaction = new SalesTransaction({
            cardname,
            countrycode,
            cardnumber,
            cardimage,
            amount,
            userId: req.userId
        });
        await newTransaction.save();
        res.status(201).json(newTransaction);
    } catch (error) {
        console.log("Error in sell controller", error.message);
        res.status(500).json({error:"internal Server Error"});
    }
}
