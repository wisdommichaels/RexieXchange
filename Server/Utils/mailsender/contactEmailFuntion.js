import nodemailer from "nodemailer";

const contactEmailFunction = async ( userEmail, message) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.COMPANY_EMAIL,
        pass: process.env.COMPANY_PASSWORD,
      },
    });

    const mailOptions = {
      from: userEmail, // Use the user's email as the sender
      to: process.env.COMPANY_EMAIL, // Company's email
      subject: "New Message from REXIE XCHANGE Contact Form",
      text: message
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};

export default contactEmailFunction;
