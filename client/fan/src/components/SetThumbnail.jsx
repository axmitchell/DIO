import React from 'react';

const SetThumbnail = props => {
  const { photo } = props;
  return (
    <li data-src={photo}>
      <a href="">
        <img id="thumbnail" src={photo} />
      </a>
    </li>
  )
}

export default SetThumbnail;