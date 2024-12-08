import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import Loader from './Loader';

const ProtectedRoutes: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, checkAuth } = useAuthStore();
  const [isAuthChecked, setIsAuthChecked] = useState(false); // Track if auth check is done
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        await checkAuth(); // Validate or fetch the user state
      } finally {
        setIsAuthChecked(true); // Mark auth check as complete
      }
    };

    verifyAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (isAuthChecked && !user) {
      navigate('/login', { replace: true }); // Redirect to login once
      setIsAuthChecked(false);
    }
  }, [isAuthChecked, user, navigate]);

  if (!isAuthChecked) {
    return <Loader />;
  }
  // Show loader while authentication is being checked

  // Render protected content if authenticated
  return user ? <>{children}</> : null;
};

export default ProtectedRoutes;
