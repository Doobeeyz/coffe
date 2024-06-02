import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/App.css'
import '../css/Detail.css'



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
