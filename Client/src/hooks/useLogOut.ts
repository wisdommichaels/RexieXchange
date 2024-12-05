import { useState } from "react";
import api from "../utils/api";
import { api_url } from "../utils/constants";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    
    const{setAuthUser} = useAuthContext();
    
    const logout = async () => {
        setLoading(true);
        try {
            const response = await api.post(`${api_url}/auth/logout`, {
            headers: {"Content-Type": "application/json"},
        });
        const data = await response.data as any;
        if(data.error){
            throw new Error(data.error);
        }
        localStorage.removeItem("token");
        setAuthUser(null);
        // navigate("/login");
        window.location.href = "/"; // Redirect to login page
        toast.success("Logged out successfully.");
        // Clear localStorage
    }catch (error) {
        toast.error("An error occurred, please try again!");
    }finally{
        setLoading(false);
    }
}
return { loading, logout };
}

export default useLogout;