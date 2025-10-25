import React from "react";
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from "./Login";
import Welcome from "./Welcome";
import Todos from "./Todos";
import ProtectedRoute from "./ProtectedRoute";
import Error from "./Error";

const queryClient = new QueryClient();

function App() {
  return (
  <QueryClientProvider client={queryClient}>
  <Router>
    <div className="App">
      <Routes>
        <Route path="/" element= {<Login/>} />
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
   </Router>
   </QueryClientProvider>
  );
}

export default App;

// Jest : automatic proofreader

// React Testing Library