import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './css/App.css';
import upArrow from './images/up-arrow3.png';
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
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/detail/:id" element={<CardDetail />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <div id="hero">
        <div id="hero_text">
          <h1 className='mt-4'>Мокко<br/> Наяда</h1>
        </div>
          <div className="overlay">
            <img src={upArrow} alt='up-arow' className='up-arrow'/><br/>
            <div className='overlay_text text-center'>
              <p>Приветствуем в Мокко Наяда, где каждая чашка - это маленькое произведение искусства. Погрузитесь в атмосферу дружелюбия и ароматов, наслаждайтесь разнообразием напитков и приятными беседами. Ваше утро начинается здесь, вместе с нами!</p>
              <Link to={`/contact`}  className="button mt-1">Связь с нами</Link>
            </div>
          </div>
      </div>
    </Router>
  );
}



export default App;
