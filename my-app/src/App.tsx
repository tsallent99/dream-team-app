import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}
function App() {
  return (
    <div className="app">
    <Router>
    <Route path='*' element={<Home />} />
    <Route path='about' element={<About />}/>
    </Router>
    </div>
    
  );
}

export default App;
