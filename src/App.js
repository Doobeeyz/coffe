import React, {useEffect} from 'react';
import { HashRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './css/App.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import MenuPage from './components/MenuPage';
import CardDetail from './components/CardDetail';
import ContactPage from './components/ContactPage';
import NavBar from './components/NavBar';

import './css/App.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<RedirectToDefault />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/detail/:id" element={<CardDetail />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function RedirectToDefault() {
  let navigate = useNavigate();
  useEffect(() => {
    navigate('/home');
  }, [navigate]);
  return null;
}

export default App;
