// import { createContext, useState } from "react";

// // Define AuthContextType interface or type
// interface AuthContextType {
//     user: { _id: string, username: string, email: string, createdAt: Date, updatedAt: Date } | null;
//     loading: boolean;
//     error: string | null;
//     signup: (username: string, email: string, password: string, confirmPassword: string, profilePic: string) => Promise<any>;
//   }

// export const AuthContext = createContext<Partial<AuthContextType>>({}); 

// // Usage in your component
// export const AuthContextProvider: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
//     const [authUser, setAuthUser] = useState<AuthContextType['user']>(JSON.parse(localStorage.getItem('user') || '{}'));
  
//     return (
//         <AuthContext.Provider value={{ user: authUser, loading: false, error: null, signup: () => Promise.resolve() }}>
//         {children}
//       </AuthContext.Provider>
//     );
// };