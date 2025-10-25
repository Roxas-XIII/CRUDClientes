import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EditCliente from './pages/EditCliente';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<EditCliente />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
