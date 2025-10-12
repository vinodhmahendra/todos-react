import React from "react";
import { useParams,Link, useNavigate } from 'react-router-dom';
import authService from "./services/authService.ts";

const Welcome = () => {

    const {username} = useParams();
    const navigate = useNavigate();

    const handleLogout = () => {
        authService.logout();
        navigate('/');
    }

    return (
        <div>
            <h1> Welcome , { username } !</h1>
            <Link to={`/todos/${username}`}> Mange Your Todos</Link>

            <br />
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Welcome;