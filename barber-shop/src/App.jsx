import React from 'react';
import './App.css';

import Header from './components/header/Header'
//import About from '../src/components/about/About'
import Routes from '../src/components/routes/Routes'

function App() {
  return (
    <div className="App">
        <Header />
        <Routes />
    </div>
  );
}

export default App;
