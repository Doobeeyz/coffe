import Card from './Card';
import '../css/Menu.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const MenuPage = () => {


  const items = [
    { id: 1, name: 'Capuchino', price: '790', description: 'йцу', img:  'capuchino1.jpg'},
    { id: 2, name: 'Chocolate Milk', price: '820', description: 'йцу', img:  'chocolatemilk1.jpg'},
    { id: 3, name: 'Correto', price: '1230', description: 'йцу', img:  'correto1.jpg'},
    { id: 4, name: 'Espresso', price: '550', description: 'йцу', img:  'espresso1.jpg'},
    { id: 5, name: 'Macchiato', price: '750', description: 'йцу', img:  'macchiato1.jpg'},
    { id: 6, name: 'Marochono', price: '860', description: 'йцу', img:  'marochino1.jpg'},
    { id: 7, name: 'Mocha', price: '690', description: 'йцу', img:  'mocha1.jpg'},
    { id: 8, name: 'Raph', price: '830', description: 'йцу', img:  'raph1.png'},
    { id: 9, name: 'Item 9', price: '5', description: 'йцу', img:  ''},
    { id: 10, name: 'Item 10', price: '5', description: 'йцу', img:  ''},
    { id: 11, name: 'Item 11', price: '5', description: 'йцу', img:  ''},
    { id: 12, name: 'Item 12', price: '5', description: 'цйу', img:  ''},
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
