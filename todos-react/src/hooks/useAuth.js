import { useEffect, useState } from "react";
import authService from '../services/authService';

export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const currentUser = authService.getCurrentUser();
        setUser ( currentUser );
        setLoading ( false );
    }, []);

    const login  = (username, password ) => {
        const result = authService.authenticate ( username, password );
        if ( result.success ) {
            setUser ( username );
        }
        return result;
    }

    const logout = () => {
        authService.logout();
        setUser(null);
    }

    return {
        user,
        loading,
        isAuthenticated: !!user,
        login,
        logout
    }
};