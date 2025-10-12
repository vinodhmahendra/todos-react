import React, {useState,useEffect} from "react"
// useNavigate state
import { useNavigate} from 'react-router-dom';


import authService from "./services/authService.ts";

const Login = () => {
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const [error,setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if ( authService.isAuthenticated() ) {
            navigate(`/welcome/${authService.getCurrentUser()}`)
        }
    },[navigate]);
    

    // create a event handler
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(`username: `,username);

        const result = authService.authenticate(username,password);

        if ( result.success ) {
            navigate(`/welcome/${username}`);
        }else {
            setError(result.message);
        }
    }

    return  (
        <form onSubmit={handleSubmit}>
            {error && <div style={{color:'red'}}>{error}</div>}
            <input
                type="text"
                placeholder="Username"
                value = {username}
                onChange={(e) => setUsername(e.target.value)}
            />
            
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Login</button>
        </form>
    );
};

export default Login;