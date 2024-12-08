import User from "../Models/userModel.js";
import contactEmailFunction from "../Utils/mailsender/contactEmailFuntion.js";

export const postContacts = async (req, res) => {
  const { message } = req.body;
  try {
    if (!message) {
      return res.status(400).json({ message: "Message is required" });
    }

    // Fetch user details using the provided userId
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { username, email } = user;

    // Send email using contactEmailFunction
    await contactEmailFunction(email, message);

    // Respond with success message
    res.status(201).json({
      message: "Message sent successfully",
      user: { username, email },
    });
    console.log("Message sent successfully:", { username, email, message });
  } catch (error) {
    res.status(500).json({ message: "Error sending message", error: error.message });
    console.error("Error in postContacts:", error);
  }
};
