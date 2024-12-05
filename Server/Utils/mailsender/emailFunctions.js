import {trp, sender} from './config.js';
import { APPROVAL_REQUEST_TEMPLATE, generateTransactionStatusEmail } from './emailTemplates.js';


export const transactionApprovalRequestEmail = async(email, transactionDetails) => {
    const mailOptions = {
        from: sender,
        to: email,
        subject: "Transaction Approval Request",
        html: APPROVAL_REQUEST_TEMPLATE(transactionDetails)
    }
    try {
        const info = await trp.sendMail(mailOptions)
        console.log('Email sent: ' + info.response);
        return true;
    } catch (error) {
        console.log(error);
        return false        
    }
}

export const sendTransactionStatusEmail = async (user, status, transactionDetails) => {
    // console.log("these are the details", user, status, transactionDetails);
    
    const subject = status === 'accepted' ? 'Your Transacion is Approved' : 'Your Transacion is Rejected';
    const mailOptions = {
      from: sender,
      to: user.email,
      subject: subject,
      html: generateTransactionStatusEmail(user, status, transactionDetails),
    };
  
    try {
      await trp.sendMail(mailOptions);
      console.log('Application status notification email sent successfully.');
    } catch (error) {
        throw new Error(`Error sending application status email: ${error}`);
        }
  };
