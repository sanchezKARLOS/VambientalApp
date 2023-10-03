import React from "react";
import "./App.css";
import Dashboard from "./assets/components/Panel/Dashboard";
import { Routes, Route, Link } from "react-router-dom";
import Index from "./Principal";
import { useState } from "react";
function App() {
  // const [user, setUser] = useState([]);

  return (
    
    <Routes>
      <Route path="/" element={<Index />} />

      <Route path="/Cpanel" element={<Dashboard />} />

    </Routes>
  );
}

export default App;
