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
import barhat from '../images/barhat.jpeg'
import trayfl from '../images/trayfl.jpeg'
import pannakota from '../images/pannakota.jpeg'
import fondan from '../images/fondan.jpg'

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
    { id: 9, name: 'Red Barhat', price: '1200', description: 'Торт "Красный бархат" – это истинное воплощение изысканности и вкусового наслаждения. Его бархатистые, насыщенно-красные коржи поражают своей мягкостью и влажностью, а нежный крем из сливочного сыра добавляет десерту невероятную кремовую легкость. Этот торт не только радует глаз, но и дарит незабываемые вкусовые впечатления, превращая каждое торжество в настоящий праздник.', img: 'barhat' },
    { id: 10, name: 'Trayfl', price: '1500', description: 'Трайфл – это роскошный многослойный десерт, который покоряет с первого взгляда и укуса. Нежный бисквит, пропитанный ароматным сиропом, чередуется со слоем воздушного ванильного крема и сочными фруктами. Завершается десерт свежими ягодами и легким взбитым кремом, создавая идеальную гармонию вкусов и текстур. Каждая ложка трайфла – это маленький праздник вкуса, который дарит наслаждение и радость.', img: 'trayfl' },
    { id: 11, name: 'Panna Kota', price: '900', description: 'Нежный итальянский десерт, приготовленный из свежих сливок, в сочетании с натуральной ванилью. Панна котта тает во рту, оставляя за собой неповторимую сливочную нежность и утонченную сладость. Подается с ароматным ягодным соусом, который добавляет легкую кислинку и прекрасно дополняет вкус десерта. Украшена свежими ягодами и мятой, придающими десерту изысканность и свежесть.', img: 'pannakota' },
    { id: 12, name: 'Chocolate Fondan', price: '1100', description: 'Шоколадный фондан – это истинное наслаждение для любителей шоколада. Нежное пирожное с хрустящей корочкой и мягкой, слегка жидкой начинкой из темного шоколада, которое тает во рту, наполняя каждый кусочек насыщенным и глубоким вкусом. Подается горячим, чтобы вы могли ощутить всю прелесть текучего шоколадного сердца. Дополняется шариком ванильного мороженого и свежими ягодами, которые создают идеальный контраст и гармонию вкусов.', img: 'fondan' },
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
