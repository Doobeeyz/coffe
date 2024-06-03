import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/App.css';
import '../css/Detail.css';
import capuchino1 from '../images/capuchino.png';
import chocolatemilk1 from '../images/chocolatemilk.png';
import correto1 from '../images/correto.png';
import espresso1 from '../images/espresso.png';
import macchiato1 from '../images/macchiato.png';
import marochino1 from '../images/marochino.png';
import mocha1 from '../images/mocha.png';
import raph1 from '../images/raph.png';
import barhat from '../images/barhat.jpeg';
import trayfl from '../images/trayfl.jpeg';
import pannakota from '../images/pannakota.jpeg';
import fondan from '../images/fondan.jpg';



const items = [
    { id: 1, name: 'Капучино', price: '790', description: 'Классический итальянский кофе, состоящий из эспрессо, горячего молока и воздушной молочной пены. Идеально сбалансированный напиток для утреннего наслаждения.', img: capuchino1 },
    { id: 2, name: 'Шоколадное молоко', price: '820', description: 'Освежающий и сладкий напиток, приготовленный из холодного молока и шоколадного сиропа или какао. Идеально подходит для любителей шоколада.', img: chocolatemilk1 },
    { id: 3, name: 'Коретто', price: '1230', description: 'Идеальный выбор для тех, кто ценит насыщенный вкус с легким алкогольным акцентом.', img: correto1 },
    { id: 4, name: 'Эспрессо', price: '550', description: 'Крепкий итальянский кофе с насыщенным вкусом и ароматом, покрытый густой пенкой. Идеален для бодрящего начала дня.', img: espresso1 },
    { id: 5, name: 'Макиато', price: '750', description: 'Идеально сбалансированный напиток для тех, кто предпочитает насыщенный вкус кофе с мягким молочным акцентом.', img: macchiato1 },
    { id: 6, name: 'Марочино', price: '860', description: 'Превосходное сочетание крепкого кофе и нежного шоколадного вкуса.', img: marochino1 },
    { id: 7, name: 'Мокко', price: '690', description: 'Идеальный выбор для любителей кофе и шоколада с нежным молочным вкусом', img: mocha1 },
    { id: 8, name: 'Раф', price: '830', description: 'Нежный кофейный напиток, отличается мягким и кремовым вкусом.', img: raph1 },
    { id: 9, name: 'Красный бархат', price: '1200', description: 'Торт "Красный бархат" – это истинное воплощение изысканности и вкусового наслаждения. Его бархатистые, насыщенно-красные коржи поражают своей мягкостью и влажностью, а нежный крем из сливочного сыра добавляет десерту невероятную кремовую легкость.', img: barhat },
    { id: 10, name: 'Трайфл', price: '1500', description: 'Нежный бисквит, пропитанный ароматным сиропом, чередуется со слоем воздушного ванильного крема и сочными фруктами. Завершается десерт свежими ягодами и легким взбитым кремом, создавая идеальную гармонию вкусов и текстур.', img: trayfl },
    { id: 11, name: 'Панна-котта', price: '900', description: 'Нежный итальянский десерт, приготовленный из свежих сливок, в сочетании с натуральной ванилью. Подается с ароматным ягодным соусом, который добавляет легкую кислинку и прекрасно дополняет вкус десерта. Украшена свежими ягодами и мятой, придающими десерту изысканность и свежесть.', img: pannakota },
    { id: 12, name: 'Шоколадный фондан', price: '1100', description: 'Нежное пирожное с хрустящей корочкой и мягкой, слегка жидкой начинкой из темного шоколада, которое тает во рту, наполняя каждый кусочек насыщенным и глубоким вкусом. Подается горячим, чтобы вы могли ощутить всю прелесть текучего шоколадного сердца.', img: fondan },
  ];


function DetailPage()  {
const params = useParams();
const itemId = parseInt(params.id)
const item = items.find((item) => item.id === itemId);

return (
<div className="detail-page">
    <div id='cnt' className='product'>
        <div className="image-container">
            <img src={item.img} alt=''/>
        </div>
        <div className="info-container">
            <h2>{item.name}</h2>
            <p>Цена: {item.price} ₸</p>
            <p>{item.description}</p>     
        </div>
    </div>
</div>
);
};

export default DetailPage;
