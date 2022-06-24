import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar'
import {HashRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
