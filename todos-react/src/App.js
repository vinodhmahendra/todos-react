import React from "react";
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Login from "./Login";
import Welcome from "./Welcome";
import Todos from "./Todos";
import ProtectedRoute from "./ProtectedRoute";
import Error from "./Error";


function App() {
  return (
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
  );
}

export default App;
