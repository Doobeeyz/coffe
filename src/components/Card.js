import React from 'react';

function Card({ item }) {
  return (
    <div className="card">
      <img src={item.img} alt="" className="card-image" />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-price">{item.price}</p>
      </div>
    </div>
  );
}

export default Card;
