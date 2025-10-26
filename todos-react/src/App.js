import React, {useState, useEffect} from "react";
import { BrowserRouter as Router,Routes, Route, useNavigate} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from "./Login";
import Welcome from "./Welcome";
import Todos from "./Todos";
import ProtectedRoute from "./ProtectedRoute";
import Error from "./Error";
import Menu from "./components/Menu";
import authService from "./services/authService.ts";

const queryClient = new QueryClient();

function AppLayout () {


  const [isAuthenticated, setIsAuthenticated] = useState(authService.isAuthenticated());

  const navigate = useNavigate();

  const handleLoginSuccess = ( username ) => {
    setIsAuthenticated(true);
    navigate(`/welcome/${username}`)
  }

  const handleLogout = () => {
    authService.logout();
    setIsAuthenticated(false);
    navigate('/');
  }

  return (
    <>
      <Menu
      isAuthenticated= { () => isAuthenticated}
      getCurrentUser={authService.getCurrentUser}
      logout={ handleLogout }
      />

    <div className="App">
      <Routes>
        <Route path="/" element= {<Login onLoginSuccess={handleLoginSuccess}/>} />
        <Route 
          path="/welcome/:username" 
          element={
            <ProtectedRoute>
                <Welcome/>
            </ProtectedRoute>
          } />
        <Route path="/todos/:username" element={
           <ProtectedRoute>
                <Todos/>
           </ProtectedRoute>
    } />

        <Route path="*" element={<Error/>} />

      </Routes>
    </div>

    </>
  );

}

function App() {

  return (
    <QueryClientProvider client={queryClient}>
     <Router>
      <AppLayout />
    </Router>
   </QueryClientProvider>
  );
}

export default App;

// Jest : automatic proofreader

// React Testing Library