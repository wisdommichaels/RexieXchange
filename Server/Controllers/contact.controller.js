import Contact from "../Models/contactModel.js";
import User from "../Models/userModel.js";

export const postContacts = async (req, res) => {
    const {message} = req.body;
    try {
        if (!message) {
            return res.status(400).json({ message: "Please Message is required" });
        }
        const details = await User.findById(req.userId);
        if (!details) {
            return res.status(404).json({ message: "User not found" });
        }
        
        const name = details.username;
        const email = details.email;

        const newContact = new Contact({
            name,
            email,
            message,
        });
        await newContact.save();
        res.status(201).json();
        console.log({ message: 'Message submitted successfully', message: newContact });
        
    } catch (error) {
        res.status(500).json();
        console.log({ message: 'Error submitting message', error: error.message });
    }

}

