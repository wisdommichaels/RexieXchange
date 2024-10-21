import axios from 'axios';
import {create} from 'zustand';
import { api_url } from '../utils/constants';
import api from '../utils/api';

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
    
    login: async(email:string,password:string) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.post(`${api_url}/auth/login`, {
                email,
                password
            });
                console.log(response.data)
                localStorage.setItem('token', response.data.token)
                return response.data
                set({ loading: false })
            } catch (error:any) {
                console.log(error)
                return error
                set({ loading: false, error: error instanceof Error ? error.message : 'An unknown error occurred' })
        }
    },
    
    logout: () => set({ user: null }),
    
    
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

