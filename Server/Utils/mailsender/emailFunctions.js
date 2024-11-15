import {trp, sender} from './config.js';
import { APPROVAL_REQUEST_TEMPLATE, generateApplicationStatusEmail } from './emailTemplates.js';


export const transactionApprovalRequestEmail = async(email, transactionDetails) => {
    console.log(transactionDetails);
    
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

const sendApplicationStatusEmail = async (user, status, password) => {
    const subject = status === 'accepted' ? 'Your Application is Approved' : 'Your Application is Rejected';
    const mailOptions = {
      from: sender,
      to: user.email,
      subject: subject,
      html: generateApplicationStatusEmail(user, status, password),
    };
  
    try {
      await trp.sendMail(mailOptions);
      console.log('Application status notification email sent successfully.');
    } catch (error) {
        throw new Error(`Error sending application status email: ${error}`);
        }
  };
