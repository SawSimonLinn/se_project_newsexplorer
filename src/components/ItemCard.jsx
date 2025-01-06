import React from 'react';
import '../blocks/ItemCard.css';
import bookmark from '../assets/bookmark.png';
import hoverBookmark from '../assets/hover_bookmark.png';

const ItemCard = ({ card, index }) => {
  return (
    <li className='card__list-item' key={index}>
      <p className='bookmark__hover_text'>Sign into save articles</p>
      <button className='card__bookmark_btn' type='button'>
        <img
          src={bookmark}
          onMouseOver={e => (e.currentTarget.src = hoverBookmark)}
          onMouseOut={e => (e.currentTarget.src = bookmark)}
          alt='bookmark icon'
          className='card__bookmark_icon'
        />
      </button>
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
