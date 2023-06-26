import React, { isValidElement } from 'react'
import mainPhoto from '../images/photo-tagging-image.jpg';

const Main = (props) => {
  const { boxes, setBoxes } = props;

  const handleClick = ({ pageX, pageY }) => {
    // setBoxes((boxes) => [...boxes, { x: pageX, y: pageY }]);
    setBoxes(() => [{x: pageX, y: pageY}]);
  }

  return (
    <div
      className='main-img-container'
      onClick={handleClick}
    >
      <img
        src={mainPhoto}
        alt="video game/cartoon characters"
        className='main-img'
      />
      {boxes.map((box) => {
        return (
          <div className='target-box' style={{ left: box.x, top: box.y }}></div>
        )
      })}
    </div>
  );
}
 
export default Main;