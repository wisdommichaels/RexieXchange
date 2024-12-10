import { baseURL } from "../constants.js";

export const APPROVAL_REQUEST_TEMPLATE = (transactionDetails) => {
    const {cardImage, cardNumber, countryName, cardName, amount, rate, countryCode, account} = transactionDetails;
    const toPay = amount * rate
    console.log("For Admin", transactionDetails,  toPay);
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Registration Request</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 10px;
              }
              .container {
                  background-color: #ffffff;
                  padding: 10px;
                  border-radius: 5px;
                  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
              }
              h1 {
                  color: #333;
              }
              p {
                  color: #555;

              }
              .footer {
                  margin-top: 20px;
                  font-size: 12px;
                  color: #888;
              }
              .button {
                  display: inline-block;
                  padding: 10px 15px;
                  margin: 5px;
                  color: #FFFFFF;
                  background-color: #007bff;
                  text-decoration: none;
                  border-radius: 5px;
              }
              .buttonRed {
                  display: inline-block;
                  padding: 10px 15px;
                  margin: 5px;
                  color: #FFFFFF;
                  background-color: #E60023;
                  text-decoration: none;
                  border-radius: 5px;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <h1>New Transaction Request</h1>
              <p>Hello Admin,</p>
              <p>A user has made a transaction on the platform. Here are the details:</p>
              <ul>
                  <li><strong>Card Name:</strong>${cardName} Gift Card</li>
                  <li><strong>Card Number:</strong> ${cardNumber}</li>
                  <li><strong>Gift Card Value:</strong>${amount} ${countryCode}</li>
                  <li><strong>Country Name:</strong>${countryName}</li>
                  <li><strong>Amount Payable:</strong> ${toPay}</li>
                  <p>Account Details</p>
                  <li><strong>Bank Branch:</strong> ${account.bankName}</li>
                  <li><strong>Account Name:</strong> ${account.accountName}</li>
                  <li><strong>Account Number:</strong> ${account.accountNumber}</li>
              </ul>
              <img src=${cardImage} alt="image of giftcard">
              <p>Please review the application and approve or reject the transaction request:</p>
              <a href="${baseURL}/api/transaction?transactionId=${transactionDetails._id}&status=accepted&secretkey=@rexie105010" class="button">Approve</a>
              <a href="${baseURL}/api/transaction?transactionId=${transactionDetails._id}&status=rejected&secretkey=@rexie105010" class="buttonRed">Reject</a>
              <p>Thank you!</p>
          </div>
          
          <div class="footer">
              <p>This email was generated automatically. Please do not reply.</p>
          </div>
      </body>
      </html>
    `;
  };

  export const generateTransactionStatusEmail = (user, status, transactionDetails) => {
      const {amount, rate} = transactionDetails;
      const toPay = amount * rate
      console.log("For users", transactionDetails,  toPay);

    
    const isSuccess = status === 'accepted';
    const title = isSuccess ? 'Transaction Successful!' : 'Transaction Failed';
    const message = isSuccess 
      ? `Hello ${user.username} your Transaction has been completed and the sum of ₦${toPay} has been sent successfully to your Bank Account`
      : `Please check your  Gift Card code and try again. If you have any question or would like to have a feedback on your order, please feel free to contact our support team via Whatsapp or Email for futher assistance thanks.`;
  
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${title}</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 10px;
              }
              .container {
                  background-color: #ffffff;
                  padding: 20px;
                  border-radius: 5px;
                  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
              }
              h1 {
                  color: ${isSuccess ? '#4CAF50' : '#dc3545'}; /* Green for success, red for failure */
              }
              h2 {
                  font-size: 18px;
                  font-weight: normal;
              } 
              p {
                  color: #555;
                  font-size: 15px;
              }
              .footer {
                  margin-top: 20px;
                  font-size: 10px;
                  color: #888;
                  text-align: center;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <h1>${title}</h1>
              <h2>${message}</h2>
              <p>We are looking forward to your next transaction, <br> Best regards, <br> <strong>RexieXchange</strong</p>
    <div style="font-family: Arial, sans-serif; margin: 0; padding: 0;;">
  <table align="center" width="100%" style="max-width: 600px; margin: 0 auto;">
    <tr>
      <td style="padding: 20px; text-align: center; color: #333333;">
        <h2 style="font-size: 20px; font-weight: bold; margin: 0;">Follow Us on Social Media</h2>
        <p style="font-size: 16px; margin: 10px 0;">Stay connected and updated with our latest news!</p>
        <div style="margin-top: 20px;">
          <!-- Facebook -->
          <a href="https://facebook.com/" style="text-decoration: none; margin: 0 10px; border-radius: 100px" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" width="30" height="30" style="display: inline-block; border: 0;">
            </a>
            <!-- Instagram -->
            <a href="https://instagram.com/" style="text-decoration: none; margin: 0 10px;" target="_blank">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="30" height="30" style="display: inline-block; border: 0;">
            </a>
          <!-- Twitter -->
          <a href="https://twitter.com/" style="text-decoration: none; margin: 0 10px;" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" width="30" height="30" style="display: inline-block; border: 0;">
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>
   </div>
          <div class="footer">
              <p>This email was generated automatically. <br>Please do not reply.</p>
          </div>
      </body>
      </html>
    `;
  };