import React from 'react';
import '../blocks/SearchForm.css';
import ItemCard from './ItemCard';
import { initialCards } from '../utils/constants';

const SearchForm = () => {
  return (
    <div className='search__container'>
      <h3 className='search__title'>Search results</h3>
      <ul className='search__results'>
        {initialCards.slice(0, 3).map((card, index) => (
          <ItemCard key={index} card={card} />
        ))}
      </ul>
    </div>
  );
};

export default SearchForm;
