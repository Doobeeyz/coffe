import Card from './Card';
import '../css/Menu.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import capuchino1 from '../images/capuchino1.jpg';
import chocolatemilk1 from '../images/chocolatemilk1.jpg';
import correto1 from '../images/correto1.jpg';
import espresso1 from '../images/espresso1.jpg';
import macchiato1 from '../images/macchiato1.jpg';
import marochino1 from '../images/marochino1.jpg';
import mocha1 from '../images/mocha1.jpg';
import raph1 from '../images/raph1.png';

const MenuPage = () => {


  const items = [
    { id: 1, name: 'Capuchino', price: '790', description: 'Классический итальянский кофе, состоящий из эспрессо, горячего молока и воздушной молочной пены. Идеально сбалансированный напиток для утреннего наслаждения.', img: capuchino1 },
    { id: 2, name: 'Chocolate Milk', price: '820', description: 'Освежающий и сладкий напиток, приготовленный из холодного молока и шоколадного сиропа или какао. Идеально подходит для любителей шоколада.', img: chocolatemilk1 },
    { id: 3, name: 'Correto', price: '1230', description: 'Идеальный выбор для тех, кто ценит насыщенный вкус с легким алкогольным акцентом.', img: correto1 },
    { id: 4, name: 'Espresso', price: '550', description: 'Крепкий итальянский кофе с насыщенным вкусом и ароматом, покрытый густой пенкой. Идеален для бодрящего начала дня.', img: espresso1 },
    { id: 5, name: 'Macchiato', price: '750', description: 'Идеально сбалансированный напиток для тех, кто предпочитает насыщенный вкус кофе с мягким молочным акцентом.', img: macchiato1 },
    { id: 6, name: 'Marochono', price: '860', description: 'Превосходное сочетание крепкого кофе и нежного шоколадного вкуса.', img: marochino1 },
    { id: 7, name: 'Mocha', price: '690', description: 'Идеальный выбор для любителей кофе и шоколада с нежным молочным вкусом', img: mocha1 },
    { id: 8, name: 'Raph', price: '830', description: 'Нежный кофейный напиток, отличается мягким и кремовым вкусом.', img: raph1 },
    { id: 9, name: 'Item 9', price: '5', description: 'йцу', img: '' },
    { id: 10, name: 'Item 10', price: '5', description: 'йцу', img: '' },
    { id: 11, name: 'Item 11', price: '5', description: 'йцу', img: '' },
    { id: 12, name: 'Item 12', price: '5', description: 'цйу', img: '' },
  ];

  return (
    <div className='menu-page'>
      <div className='title'>
        <h1>Дневное меню:</h1>
      </div>
      <div id='hero'>
        <div className="container">
          <div className="scrollable-content row mt-3">
          {items.map(item => {
              console.log(item);
              return (
                <div key={item.id} className="col-md-3">
                  <Link to={`/detail/${item.id}`} className='card-link'><Card item={item} /></Link>
                </div>
              );
          })}
          </div>
        </div>
    </div>
    </div>
  );
};

export default MenuPage;
