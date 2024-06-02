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



const items = [
    { id: 1, name: 'Capuchino', price: '790', description: 'йцу', img: capuchino1 },
    { id: 2, name: 'Chocolate Milk', price: '820', description: 'йцу', img: chocolatemilk1 },
    { id: 3, name: 'Correto', price: '1230', description: 'йцу', img: correto1 },
    { id: 4, name: 'Espresso', price: '550', description: 'йцу', img: espresso1 },
    { id: 5, name: 'Macchiato', price: '750', description: 'йцу', img: macchiato1 },
    { id: 6, name: 'Marochono', price: '860', description: 'йцу', img: marochino1 },
    { id: 7, name: 'Mocha', price: '690', description: 'йцу', img: mocha1 },
    { id: 8, name: 'Raph', price: '830', description: 'йцу', img: raph1 },
    { id: 9, name: 'Item 9', price: '5', description: 'йцу', img: '' },
    { id: 10, name: 'Item 10', price: '5', description: 'йцу', img: '' },
    { id: 11, name: 'Item 11', price: '5', description: 'йцу', img: '' },
    { id: 12, name: 'Item 12', price: '5', description: 'цйу', img: '' },
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
            <p>Price: {item.price}</p>
            <p>{item.description}</p>     
        </div>
    </div>
</div>
);
};

export default DetailPage;
