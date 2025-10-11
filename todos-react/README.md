### Creating a react  application
```bash
 npx create-react-app todos-react
 cd todos-react
 ```

 ### Component Login.js
```jsx
import React, {useState} from "react"

const Login = () => {
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`username: `,username);
    }

    return  (
        <form onSubmit={handleSubmit}>
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

```
### Create Welcome.js Component
```jsx
import React from "react";

const Welcome = ( {username} ) => {
    return (
        <div>
            <h1> Welcome , { Username } !</h1>
        </div>
    );
};


export default Welcome;
```

### Install React Router ( Navigational )
```bash
npm install react-router-dom
```

## Update Login Component
```jsx
import React, {useState} from "react"
// useNavigate state
import { useNavigate} from 'react-router-dom';

const Login = () => {
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const navigate = useNavigate();

    // create a event handler
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(`username: `,username);
        if ( username && password ) {
            navigate(`/welcome/${username}`);
        }
    }

    return  (
        <form onSubmit={handleSubmit}>
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
```

## Update Welcome Component to Read 'username' 
# make use of hook 'useParam'
```jsx
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
```

### Update App Componet With Router
```jsx
import React from "react";
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Login from "./Login";
import Welcome from "./Welcome";


function App() {
  return (
   <Router>
    <div className="App">
      <Routes>
        <Route path="/" element= {<Login/>} />
        <Route path="/welcome/:username" element={<Welcome/>} />
      </Routes>
    </div>
   </Router>
  );
}

export default App;


```

### What is a Service in React ?

seperate javascript/module
Data Management  ( localstorage, authentication , etc)
API calls
Business Login 

## Basic Authentication
# Create Authentication Service (src/services/authService.js)
```jsx
class AuthService {
    authenticate (username, password) {
        // HArdcoded validation
        if ( username === 'vinodh' && password === 'password123') {
            return { success: true, message: "Login successfull"};
        }
        return { success: false, message: 'Invalid credentials'}
    }
}

export default new AuthService();

```

# Update Login.js to make use of AuthenticationService
```jsx
import React, {useState} from "react"
// useNavigate state
import { useNavigate} from 'react-router-dom';


import authService from "./services/authService";

const Login = () => {
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const [error,setError] = useState('');

    const navigate = useNavigate();

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
```


