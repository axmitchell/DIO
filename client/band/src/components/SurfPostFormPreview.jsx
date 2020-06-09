import React from 'react';

const SurfPostFormPreview = props => {
  const { currentPost } = props;
  const { name, location, link, date, description } = currentPost;
  return(
    <div id='SurfPostFormPreview' className='Content'>      
      <div id='SelectedSurfPostInfo' className='placeholder'>
        <div id='SelectedSurfPostInfoName'>
          <a href={link}>{name}</a>
          ({location})
        </div>
        <div id='SelectedSurfPostInfoDate'>{date}</div>
        <div id='SelectedSurfPostInfoDescription'>{description}</div>
      </div>
      <div id='SelectedUserPost' className='placeholder'>
        SELECTED USER POST
      </div>
    </div>
  )
}

export default SurfPostFormPreview;