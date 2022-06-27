import React from 'react';
import './App.css';
import Home from '../src/pages/index'
import {HashRouter as Router} from 'react-router-dom'
import HeroSection from './components/HeroSection';

function App() {
  return (
    <Router>
      <Home/>
      <HeroSection/>
    </Router>
  );
}

export default App;
