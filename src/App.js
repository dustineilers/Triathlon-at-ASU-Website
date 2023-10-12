import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Events from './components/pages/Events';
import FAQ from './components/pages/Faq';
// import SignUp from './components/pages/SignUp'; 

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element=
        {<Home />} />
        <Route path='/about-us' element={<Services />} />
        <Route path='/events' element={<Events />} />
        <Route path='/faq' element={<FAQ />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
