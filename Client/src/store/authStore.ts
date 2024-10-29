import axios from 'axios';
import {create} from 'zustand';
import { api_url } from '../utils/constants';
import api from '../utils/api';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

interface AuthStore {
    user: { _id: string, username:string, email:string, createdAt:Date, updatedAt:Date } | null;
    loading: boolean;
    error: string | null;
    signup: (username: string, email: string, password: string, confirmPassword: string) => Promise<any>;
    login: (email: string, password: string) => Promise<any>;
    logout: () => void;
    checkAuth: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    loading: false,
    error: null,
    
    // function to signup user
    signup: async(username:string,email:string,password:string,confirmPassword:string) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.post(`${api_url}/auth/signup`, {
                username,
                email,
                password,
                confirmPassword
            });
            console.log(response.data)
            return response.data
            set({ loading: false })
        } catch (error:any) {
            console.log(error)
            return error
            set({ loading: false, error: error instanceof Error ? error.message : 'An unknown error occurred' })
        }
    },
    // funtion to handle input errors with toastify
    handleInputsErrors: ({ username, email, password, confirmPassword }: { username: string, email: string, password: string, confirmPassword: string }): boolean => {
        if (!username || !email || !password || !confirmPassword) {
            toast.error('Please fill in all fields!', { position: 'top-center' });
            return false;
        }
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long!', { position: 'top-center' });
            return false;
        }
        if (password !== confirmPassword) {
            toast.error('Passwords do not match!', { position: 'top-center' });
            return false;
        }
        return true;
    },


    // Function to login user
    login: async(email:string,password:string) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.post(`${api_url}/auth/login`, {
                email,
                password
            });
                console.log(response.data)
                localStorage.setItem('token', response.data.token)
                set({ loading: false })
                return response.data
            } catch (error:any) {
                console.log(error)
                set({ loading: false, error: error instanceof Error ? error.message : 'An unknown error occurred' })
                return error
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
                window.location.href = '/login';
                set({ user: null });
            
        }
    }
    }
}))

