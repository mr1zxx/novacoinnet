import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Conversor from './pages/conversor';
import './App.css';
import Header1 from './header1';
import Solana from './pages/solana';

const App: React.FC = () => {
  return (
    <Router>
      <Header1 />
        <Routes>
          <Route path="/solana" element={<Solana />} />
        </Routes>
    </Router>
  );
};

export default App;
