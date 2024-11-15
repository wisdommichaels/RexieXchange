export const APPROVAL_REQUEST_TEMPLATE = (transactionDetails) => {
    // const approvalLink = `${baseURL}/api/user/approve?userId=${user._id}&status=accepted`;
    // const rejectionLink = `${baseURL}/api/user/approve?userId=${user._id}&status=rejected`;
    const {cardImage, cardNumber, amount,rate, countryCode, account} = transactionDetails;
    const toPay = amount * rate
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
                  padding: 20px;
              }
              .container {
                  background-color: #ffffff;
                  padding: 20px;
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
                  color: white;
                  background-color: #007bff;
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
                  <li><strong>Card Number:</strong> ${cardNumber}</li>
                  <li><strong>Gift Card Value:</strong> ${amount}${countryCode}</li>
                  <li><strong>Amount Payable</strong> ${toPay}</li>
                  <p>Account Details</p>
                  <li><strong>Bank</strong> ${account.bankName}</li>
                  <li><strong>Account Name</strong> ${account.accountName}</li>
                  <li><strong>Account Number</strong> ${account.accountNumber}</li>
              </ul>
              <img src=${cardImage} alt="image of giftcard">
              <p>Please review the application and approve or reject the registration request:</p>
              <p>Thank you!</p>
          </div>
          <div class="footer">
              <p>This email was generated automatically. Please do not reply.</p>
          </div>
      </body>
      </html>
    `;
  };

  export const generateApplicationStatusEmail = (user, status, password) => {
    const isSuccess = status === 'accepted';
    const title = isSuccess ? 'Congratulations!' : 'Application Status';
    const message = isSuccess 
      ? `Your application has been approved. Welcome aboard!`
      : `We regret to inform you that your application has been rejected.`;
  
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
                  padding: 20px;
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
              p {
                  color: #555;
              }
              .footer {
                  margin-top: 20px;
                  font-size: 12px;
                  color: #888;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <h1>${title}</h1>
              <p>${message}</p>
              <p>${isSuccess ? `You can now log in to your account and start using our services. with the password below` : 'If you have any questions or would like feedback on your application, please feel free to contact our support team.'}</p>
              ${isSuccess && `<h2>Your Credentials</h2>
              <p>Email: ${user.email}</p>
              <p>Password: ${password}</p>`}
              <p>Best regards,<br>Your App Team</p>
          </div>
          <div class="footer">
              <p>This email was generated automatically. Please do not reply.</p>
          </div>
      </body>
      </html>
    `;
  };