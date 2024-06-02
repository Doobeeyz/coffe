import '../css/App.css';
import { Link } from 'react-router-dom';


const HomePage = () => {
  
return (
    <div>
      <div id="hero">
        <div id="hero_text">
          <h1 className='mt-4'>Мокко<br/> Наяда</h1>
        </div>
          <div className="overlay">
            <img src='up-arrow3.svg' alt='up-arow' className='up-arrow'/><br/>
            <div className='overlay_text text-center'>
              <p>Приветствуем в Мокко Наяда, где каждая чашка - это маленькое произведение искусства. Погрузитесь в атмосферу дружелюбия и ароматов, наслаждайтесь разнообразием напитков и приятными беседами. Ваше утро начинается здесь, вместе с нами!</p>
              <Link to={`/contact`}  className="button mt-1">Связь с нами</Link>
            </div>
          </div>
      </div>
    </div>
  );
};

export default HomePage;
