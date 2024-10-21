import axios from 'axios';
import {create} from 'zustand';
import { api_url } from '../utils/constants';
import api from '../utils/api';

interface CardStore {
    cards: [{ imageUrl: string, name:string, value:number }] | null;
    loading: boolean;
    error: string | null;
    updateCard: (name: string, value: number) => Promise<any>;
    getCards: () => void;
}

export const useCardStore = create<CardStore>((set) => ({
    cards: null,
    loading: false,
    error: null,
    
    updateCard: async(name:string,value:number) => {
        set({ loading: true, error: null });
        try {
            await axios.put(`${api_url}/giftcard/update-card`, {
                name,
                value
            });
                set({ loading: false })
            } catch (error:any) {
                console.log(error)
                set({ loading: false })
        }
    },
    
    
    getCards: async () => {
        try {
            const response = await api.get(`${api_url}/giftcard`);
            set({ cards: response.data });
        } catch (error) {
            console.log(error);
            set({ cards: null }); 
    }
    }
}))

