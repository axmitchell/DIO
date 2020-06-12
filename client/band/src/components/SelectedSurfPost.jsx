import React from 'react';

const SelectedSurfPost = props => {
  const { currentSurfPost } = props;
  const { surfPostPhoto, surfPostName, surfPostLocation, surfPostLink, surfPostDate, surfPostDescription } = currentSurfPost;
  return(
    <div id='SelectedSurfPost'>      
      <div id='PostFormDetails' className='SelectedSurfPost'>
        <div id='PostFormUserInfo'>
          <a id='PostFormUserInfoName' href={surfPostLink} target="_blank">{surfPostName}</a>
          <div id='PostFormUserInfoLocation'>({surfPostLocation})</div>
        </div>
        <div id='PostFormInput'>
          <div id='PostFormInputDate'>{surfPostDate}</div>
          <div id='PostFormInputDescription'>{surfPostDescription}</div>
        </div>
      </div>
    </div>
  )
}

export default SelectedSurfPost; 