import React from 'react';

const SearchButton = props => {
  return(
    <button id='SearchButton' onClick={props.handleMenuButtonClick}>SEARCH</button>
  )
}

export default SearchButton;