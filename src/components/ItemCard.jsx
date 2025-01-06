import React from 'react';
import '../blocks/ItemCard.css';

const ItemCard = ({ card, index }) => {
  return (
    <li className='card__list-item' key={index}>
      <img
        className='card__image'
        draggable='false'
        src={card.imageUrl}
        alt={card.name}
      />
      <div className='card__text-box'>
        <p className='card__date'>{card.date}</p>
        <h3 className='card__title'>{card.title}</h3>
        <p className='card__description'>{card.description}</p>
        <p className='card__name'>{card.name}</p>
      </div>
    </li>
  );
};

export default ItemCard;
