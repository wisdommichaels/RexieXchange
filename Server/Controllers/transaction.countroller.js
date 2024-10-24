import SalesTransaction from "../Models/transactionModel.js";


export const getTransaction = async (req, res) => {
    try {
        const tran = await SalesTransaction.find()
        .populate({
            path: "userId",
            model: "User",
            select: " username email accountDetails",
        })
        
        res.status(200).json(tran);
    } catch (error) {
        console.error("Error in get getTransaction controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
    
}

export const updateTransaction = async (req, res) => {
    const {id, value} = req.body;

    if (!id || !value) {
        return res.status(400).json({ error: "Transaction ID and value are required." });
    }

    try {
        const updatedTransaction = await SalesTransaction.findByIdAndUpdate({id: id}, {value: value},{new:true});
        
        if (!updatedTransaction) {
            return res.status(404).json({ error: "Transaction not found." });
        }

        res.status(200).json(updatedTransaction);

    } catch (error) {
        console.error("Error in updatedTransaction controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }

}


export const sell= async (req, res) => {
    try {
        const {cardname, countrycode, cardnumber, cardimage, amount} = req.body;

        if (!cardname || !countrycode || !cardnumber || !cardimage || !amount) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (!req.userId) {
            return res.status(401).json({ message: "Unauthorized. User ID is required." });
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
        console.error("Error in sell controller", error.message);
        res.status(500).json({error:"internal Server Error"});
    }
}
