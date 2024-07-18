import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM correctly

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchByLocation from './components/MainPage';
import Contact from './components/Contact';
import AboutUS from './components/About';

function App() {
  return (
    <Router basename="/WebDevExam-Assesment">
      <div className="App">
        <header className="App-header">
          {/* Navigation code if needed */}
        </header>
        <main>
          <Routes>
            <Route path="/" element={<SearchByLocation />} />
            <Route path="/About" element={<AboutUS />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root')); // Render your app using ReactDOM

export default App;
