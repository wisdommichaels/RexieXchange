import axios from 'axios';
import {create} from 'zustand';
import { api_url } from '../utils/constants';
import api from '../utils/api';
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';

interface AuthStore {
    user: { _id: string, username:string, email:string, createdAt:Date, updatedAt:Date } | null;
    loading: boolean;
    error: string | null;
    login: (email: string, password: string) => Promise<any>;
    logout: () => void;
    checkAuth: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    loading: false,
    error: null,
   


    // Function to login user
    login: async(email:string,password:string) => {
        set({ loading: true, error: null });
         // Validate email and password
         if (!email || !password) {
            toast.error('Please enter both email and password');
            set({ loading: false });
            return false;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            toast.error('Email format is invalid!');
            set({ loading: false });
            return false;
        }

        if (password.length < 8) {
            toast.error('Password must be at least 6 characters long');
            set({ loading: false });
            return false;
        }
        try {
            const response = await axios.post(`${api_url}/auth/login`, {
                email,
                password
            });
                console.log(response.data)
                localStorage.setItem('token', response.data.token)
                set({ loading: false })
                return true
            } catch (error:any) {
                console.log(error)
                set({ loading: false, error: error instanceof Error ? error.message : 'An unknown error occurred' })
                return false
        }
    },

    // Function to logout user
    logout: () => set({ user: null }),

      
    
    // Function to check if user is authenticated
    checkAuth: async () => {
        try {
            const response = await api.get(`${api_url}/auth/checkAuth`);
            set({ user: response.data });
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 401) {
                localStorage.removeItem('token');
                window.location.reload();
                 set({ user: null });
            
        }
    }
    }
}))

