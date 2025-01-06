import React from 'react';
import '../blocks/SearchForm.css';

const SearchForm = () => {
  return (
    <div className='search__container'>
      <h3 className='search__title'>Search results</h3>
      <div className='search__results'>
        <div className='search__results_card'></div>
      </div>
    </div>
  );
};

export default SearchForm;
