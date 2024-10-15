import axios from 'axios';
import {create} from 'zustand';
import { api_url } from '../utils/constants';

interface AuthStore {
    user: { name: string } | null;
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
            })
                console.log(response.data)
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
            const response = await axios(`${api_url}/checkAuth`);
            set({ user: response.data.user });
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 401) {
                window.location.href = '/login';
                set({ user: null });
            
        }
    }
    }
}))

