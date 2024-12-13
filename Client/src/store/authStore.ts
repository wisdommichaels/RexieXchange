import axios from 'axios';
import { create } from 'zustand';
import { api_url } from '../utils/constants';
import api from '../utils/api';
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';

interface User {
  _id: string;
  username: string;
  profilePic: string;
  email: string;
  accountDetails: {accountName:String,  accountNumber:string, bankName:String };
  createdAt: Date;
  updatedAt: Date;
}

interface AuthStore {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (userData: { username: string; email: string; password: string, confirmPassword: string }) => Promise<boolean>;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
  loading: false,
  error: null,

  // Login function
  login: async (email: string, password: string) => {
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

    if (password.length < 6) {
      toast.error('Password must be at least 8 characters long');
      set({ loading: false });
      return false;
    }

    try {
      const response = await api.post(`${api_url}/auth/login`, { email, password });
      localStorage.setItem('token', response.data.token);
      set({ user: response.data.user, loading: false });
      toast.success('Login successful!');
      return true;
    } catch (error: any) {
      console.error('Login error:', error);
           set({ loading: false, error: error.message });
      return false;
    }
  },

  // Signup function
  signup: async (userData: { username: string; email: string; password: string, confirmPassword: string }) => {
    set({ loading: true, error: null });
    console.log(userData);
    
    // Validate user data
    const { username, email, password, confirmPassword } = userData;
    if (!username || !email || !password || !confirmPassword) {
      toast.error('Please fill in all fields!');
      set({ loading: false });
      return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Email format is invalid!');
      set({ loading: false });
      return false;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 8 characters long');
      set({ loading: false });
      return false;
    }

    try {
      const response = await api.post(`${api_url}/auth/signup`, userData);
      localStorage.setItem('token', response.data.token);
      set({ user: response.data.user, loading: false });
      toast.success('Signup successful!');
      return true;
    } catch (error: any) {
      console.error('Signup error:', error);
      toast.error(error.response?.data?.message || 'An error occurred while signing up.');
      set({ loading: false, error: error.message });
      return false;
    }
  },

  // Logout function
  logout: () => {
    localStorage.removeItem('token');
    set({ user: null });
    toast.success('Logged out successfully!');
  },

  // Check if the user is authenticated
  checkAuth: async () => {
    try {
      const response = await api.get(`${api_url}/auth/checkAuth`);
      set({ user: response.data });
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        localStorage.removeItem('token');
        set({ user: null });
        toast.error('Session expired. Please log in again.');
        window.location.href = '/login';
      } else {
        console.error('Authentication check error:', error);
        set({ error: error.message });
      }
    }
  },
}));
