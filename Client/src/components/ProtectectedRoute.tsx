import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const ProtectedRoutes: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, checkAuth } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAuth = async () => {
      if (!user) {
        await checkAuth(); // Check authentication state
        if (!user) {
          navigate('/login'); // Redirect to login if not authenticated
        }
      }
    };
    verifyAuth();
  }, [user, checkAuth, navigate]);

  // Render children only if the user is authenticated
  return user ? <>{children}</> : null;
};

export default ProtectedRoutes;
