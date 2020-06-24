import React from 'react';
import ConnectionsThumbnail from './ConnectionsThumbnail.jsx';

const ConnectionsGallery = props => {
  const { connections, postId, handlePage } = props;
  if (connections.length === 0) {
    return (
      <div id='ConnectionsGallery' className='Content' style={{textAlign: "center", display: "flex", justifyContent: "center"}}>
        NO CONNECTIONS YET
      </div>
    )
  } else {
    return (
      <div id='ConnectionsGallery' className='Content'>
        {connections.map(connection => 
          <ConnectionsThumbnail key={connections.id} handlePage={handlePage} name={connection.bandName}/>
        )}
      </div>
    )
  }
}

export default ConnectionsGallery;
