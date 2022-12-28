import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './component/homePage';
import Navbar from './component/navbarPage';


function App(){
  return (
    <div className="App">                      
      <Router>          
        <Routes>
          {/* <div element={<Navbar />} /> */}
            <Route exact path='/' element={<Navbar />} />
            <Route path='/users' element={<Home/>} />               
        </Routes>
      </Router>
    </div>
    );
}

export default App;
