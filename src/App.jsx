
import React from 'react';
import './App.css'
import Dashboard from './assets/components/Panel/Dashboard'
import {Routes,Route, Link} from "react-router-dom"
import Index from './Principal'
import { useState } from 'react';
// import Footer from './assets/components/Footer/Footer'




function App(){

  const[user,setUser]= useState([]);



    return(
      <Routes>
        <Route path="/" element={<Index/>}/> 
  <Route path="/Cpanel" element ={<Dashboard
  setUser={setUser}
  />}/>
      </Routes>
    )
}

export default App;