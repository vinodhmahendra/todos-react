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
