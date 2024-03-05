import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import AboutMe from './Components/AboutMe';

function App() {
  return (
    <Router>
      <Header />
      
    <Routes>
      <Route path="/" element={<Content/>}> </Route>
        {/* <Route path="/content" element={<Content />} /> */}
        <Route path='/aboutme' element={<AboutMe/>}/>
     
    </Routes>
  </Router>
  );
}

export default App;
