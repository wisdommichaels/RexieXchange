
import { create } from "zustand";
import { api_url } from "../utils/constants";
import api from "../utils/api";
import axios from "axios";


export interface TestimonialStore {
   reviews: [
        {name:string, rating:number, review:string}
    ] | null;
    loading: boolean;
    error: string | null;
    getTestimonies: () => void;
    // updateCard: (name: string, value: number) => Promise<any>;
}


export const useTestimonialStore = create<TestimonialStore>((set) => ({
    reviews: null,
    loading: false,
    error: null,


    updateCard: async(name:string, rating:number, testimony:string) => {
        set({ loading: true, error: null });
        try {
            await axios.put(`${api_url}/review/update-review`, {
                name,
                rating,
                testimony
                
            });
                set({ loading: false })
            } catch (error:any) {
                console.log(error)
                set({ loading: false })
        }
    },
    
    
    getTestimonies: async () => {
        try {
            const response = await api.get(`${api_url}/review/get-review`);
            set({ reviews: response.data });
        } catch (error) {
            console.log(error);
            set({ reviews: null }); 
    }
    }
   
}))
