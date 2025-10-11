import React from "react";
import { useParams } from 'react-router-dom';

const Welcome = () => {

    const {username} = useParams();

    return (
        <div>
            <h1> Welcome , { username } !</h1>
        </div>
    );
};

export default Welcome;