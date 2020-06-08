import React from 'react';

const SurfPostFormPreview = props => {
  const { currentPost } = props;
  const { name, location, link, date, description } = currentPost;
  return(
    <div id='SurfPostFormPreview' className='Content'>      
      <div id='SelectedSurfPostInfo' className='placeholder'>
        {name} ({location})
        {/* {link} */}
        {date}
        {description}
      </div>
      <div id='SelectedUserPost' className='placeholder'>
        SELECTED USER POST
      </div>
    </div>
  )
}

export default SurfPostFormPreview;