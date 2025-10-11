import React from "react";
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Login from "./Login";
import Welcome from "./Welcome";
import Todos from "./Todos";


function App() {
  return (
   <Router>
    <div className="App">
      <Routes>
        <Route path="/" element= {<Login/>} />
        <Route path="/welcome/:username" element={<Welcome/>} />
        <Route path="/todos/:username" element={<Todos/>} />
      </Routes>
    </div>
   </Router>
  );
}

export default App;
