import React from 'react';

const ConnectionsThumbnail = props => {
  return (
    <div id='ConnectionsThumbnail' className='Button' onClick={() => props.handlePage('PostConnection')}>
     {props.name}
    </div>
  )
}

export default ConnectionsThumbnail;
