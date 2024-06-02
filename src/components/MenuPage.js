import Card from './Card';
import '../css/Menu.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const MenuPage = () => {


  const items = [
    { id: 1, name: 'Item 1', price: '5', description: 'йцу', img:  'https://coffeepedia.ru/wp-content/uploads/2013/01/amer.jpg'},
    { id: 2, name: 'Item 2', price: '5', description: 'йцу', img:  'https://coffeepedia.ru/wp-content/uploads/2013/01/amer.jpg'},
    { id: 3, name: 'Item 3', price: '5', description: 'йцу', img:  'https://coffeepedia.ru/wp-content/uploads/2013/01/amer.jpg'},
    { id: 4, name: 'Item 4', price: '5', description: 'йцу', img:  'https://coffeepedia.ru/wp-content/uploads/2013/01/amer.jpg'},
    { id: 5, name: 'Item 5', price: '5', description: 'йцу', img:  'https://coffeepedia.ru/wp-content/uploads/2013/01/amer.jpg'},
    { id: 6, name: 'Item 6', price: '5', description: 'йцу', img:  'https://coffeepedia.ru/wp-content/uploads/2013/01/amer.jpg'},
    { id: 7, name: 'Item 7', price: '5', description: 'йцу', img:  'https://coffeepedia.ru/wp-content/uploads/2013/01/amer.jpg'},
    { id: 8, name: 'Item 8', price: '5', description: 'йцу', img:  'https://coffeepedia.ru/wp-content/uploads/2013/01/amer.jpg'},
    { id: 9, name: 'Item 9', price: '5', description: 'йцу', img:  'https://coffeepedia.ru/wp-content/uploads/2013/01/amer.jpg'},
    { id: 10, name: 'Item 10', price: '5', description: 'йцу', img:  'https://coffeepedia.ru/wp-content/uploads/2013/01/amer.jpg'},
    { id: 11, name: 'Item 11', price: '5', description: 'йцу', img:  'https://coffeepedia.ru/wp-content/uploads/2013/01/amer.jpg'},
    { id: 12, name: 'Item 12', price: '5', description: 'цйу', img:  'https://coffeepedia.ru/wp-content/uploads/2013/01/amer.jpg'},
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
