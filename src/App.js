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
      <div className="row">         
        <div className="col">
          <Router>          
            <Routes>
                <Route exact path='/' element={<Navbar />} />
                <Route path='/users' element={<Home/>} />               
            </Routes>
          </Router>
        </div>
      </div>      
    </div>
    );
}

export default App;
