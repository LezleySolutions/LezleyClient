import React from 'react'
import { Route , Routes } from "react-router-dom";
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx';
import Service from './Pages/Service.jsx';
import ContactUs from './Pages/ContactUs.jsx';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/service' element={<Service />}/>
      <Route path='/contact' element={<ContactUs />}/>
    </Routes>
      
    </>
  );
}

export default App;
