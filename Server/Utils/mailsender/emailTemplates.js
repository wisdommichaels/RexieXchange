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
      ? `Hello ${user.username} your Transaction has been completed and the sum of ${toPay} has been sent successfully to your Bank Account`
      : `Please check your  Gift Card code and try again. If you have any question or would like to have a feedback on your order, please feel free to contact our support team via Whatsapp or Email for futher assistance`;
  
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

                  .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .heading {
      color: #161D6F;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .social-container {
      display: flex;
      justify-content: center;
      gap: 2rem;
      color: white;
    }

    .social-icons {
      list-style: none;
      display: flex;
      gap: 1.5rem;
      padding: 0;
      margin: 0;
    }

    .icon-content {
      position: relative;
    }

    .icon-content a {
      color: currentColor;
      text-decoration: none;
      display: inline-block;
      transition: transform 0.3s ease;
    }

    .icon-content a:hover {
      transform: scale(1.2);
    }

    .tooltip {
      position: absolute;
      bottom: -1.5rem;
      left: 50%;
      transform: translateX(-50%);
      background: #161D6F;
      color: white;
      padding: 0.3rem 0.6rem;
      border-radius: 4px;
      font-size: 0.8rem;
      visibility: hidden;
      opacity: 0;
      transition: visibility 0.3s, opacity 0.3s;
    }

    .icon-content:hover .tooltip {
      visibility: visible;
      opacity: 1;
    }
          </style>
      </head>
      <body>
          <div class="container">
              <h1>${title}</h1>
              <p>${message}</p>
              <p>We are looking forward to your next transaction, <br> Best regards,<br>RexieXchange</p>
       
          
 <div class="container">
    <h2 class="heading">Follow us on</h2>
    <div class="social-container">
      <ul class="social-icons">
        <li class="icon-content">
          <a href="https://facebook.com/" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 50" width="35" height="35">
              <path
                d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <div class="tooltip">Facebook</div>
        </li>
        <li class="icon-content">
          <a href="https://www.instagram.com/" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16" width="35" height="35">
              <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <div class="tooltip">Instagram</div>
        </li>
      </ul>
    </div>
  </div>
</div>
   </div>
          <div class="footer">
              <p>This email was generated automatically. Please do not reply.</p>
          </div>
      </body>
      </html>
    `;
  };