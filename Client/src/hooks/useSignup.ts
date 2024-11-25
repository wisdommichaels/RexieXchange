import { useState } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { api_url } from '../utils/constants';

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async (username: string, email: string, password: string, confirmPassword: string, profilPic: string) => {
    const success = handleInputsErrors({ username, email, password, confirmPassword });
    if (!success) return;
    setLoading(true);
    try {
      const response = await fetch(`${api_url}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password, confirmPassword, profilPic }), 
    });

    const data = await response.json();
    if(data.error){
      throw new Error(data.error);
    }
  
    console.log(data);

    } catch (error) {
      toast.error('An error occurred, please try again!', { position: 'top-right' } );
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading };
};

export default useSignup;

function handleInputsErrors({ username, email, password, confirmPassword }: { username: string, email: string, password: string, confirmPassword: string }): boolean {
    if (!username || !email || !password || !confirmPassword) {
      toast.error('Please fill in all fields!', { position: 'top-right' });
      return false;
    }
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long!', { position: 'top-right' });
      return false;
    }
    if (password !== confirmPassword) {
        toast.error('Passwords do not match!', { position: 'top-right' });
        return false;
    }
  
    return true;
  }