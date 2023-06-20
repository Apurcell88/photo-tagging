import React from 'react'
import mainPhoto from '../images/photo-tagging-image.jpg';

const Main = () => {
  return (
    <div className='main-img-container'>
      <img
        src={mainPhoto}
        alt="video game/cartoon characters"
        className='main-img'
      />
    </div>
  );
}
 
export default Main;