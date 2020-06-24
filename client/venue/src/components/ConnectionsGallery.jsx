import React from 'react';
import ConnectionsThumbnail from './ConnectionsThumbnail.jsx';

const ConnectionsGallery = props => {
  const { connections, postId, handlePage } = props;
  return (
    <div id='ConnectionsGallery' className='Content'>
      {connections.map(connection => {
        if (connection.id === postId) {
          return <ConnectionsThumbnail key={connections.id} handlePage={handlePage} name={connection.bandName}/>
        }
      })}
    </div>
  )
}

export default ConnectionsGallery;
