import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Plan from './Components/Plan';
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/plan' element={<Plan/>}/>
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
  );
}

export default App;
