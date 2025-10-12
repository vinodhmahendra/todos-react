import React from "react"
import { Navigate } from 'react-router-dom';
import authService from "./services/authService";


const ProtectedRoute = ( { children} ) => {
    return authService.isAuthenticated() ? children : <Navigate to="/" />;
};

export default ProtectedRoute;