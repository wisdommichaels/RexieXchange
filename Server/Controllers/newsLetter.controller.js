import newsLetter from "../Models/newsLetterModel.js";
import User from "../Models/userModel.js";

export const postEmails = async (req, res) => {
    const { email } = req.body;
  
    try {

        if (!email) {
            return res.status(400).json({ error: 'Please Email is required' });
          }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }
          

      const newSubscription = new newsLetter({ 
        email,
      });
      await newSubscription.save();
      res.status(201).json();
      console.log({ message: 'Subscription successful!' });

    } catch (error) {
        res.status(500).json();
        console.log({ message: 'Error subscribing', error: error.message });
    }
  };

// export const getEmails = async (req, res) => {
//     try {
//       const emails = await newsLetter.find();
//       res.status(200).json(emails);
//     } catch (error) {
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   };
  
