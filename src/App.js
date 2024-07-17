import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css';
import SearchByLocation from './components/MainPage';
import Contact from './components/Contact';
import AboutUS from './components/About';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav> */}
        </header>
        <main>
          <Routes>
            <Route path="/" element={<SearchByLocation />} />
            <Route path="/About" element={<AboutUS />} />
            <Route path="/Contact" element={<Contact />} />

            {/* <Route path="/contact" element={<Contact />} />
            <Route path="/test" element={<HomePage />} /> */}
           
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
