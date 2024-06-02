import { Link } from 'react-router-dom';
import '../css/App.css';
import '../css/NavBar.css';
import logo from '../images/logo.png'

const NavBar = () => {


    return (
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo-img"/> 
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/menu">Меню</Link></li>
          <li><Link to="/about">О нас</Link></li>
        </ul>
      </nav>
    );
  };
  
  export default NavBar;