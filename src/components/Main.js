import React from 'react';
import mainPhoto from '../images/photo-tagging-image.jpg';

const Main = (props) => {
  const {
          boxes,
          setBoxes,
          click,
          setClick
        } = props;

  // FUNCTIONS

  // Determine the coordinates of user click
  const handleClick = ({ pageX, pageY }) => {
    // setBoxes((boxes) => [...boxes, { x: pageX, y: pageY }]);
    setBoxes(() => [{x: pageX, y: pageY}]);
    // console.log(boxes);
    setClick(!click);
    console.log(boxes);
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
      {/* {boxes.map((box) => {
        return (
          <div className='target-container'>
            <div className='target-box' style={{ left: box.x, top: box.y }}></div>
            <div
              className={box.x < 200 ?
                        ['selection-dropdown', 'left-side'].join(' ') :
                        ['selection-dropdown', 'right-side'].join(' ')}
              style={{left: box.x, top: box.y}}
            >
              <p className='character-title'>Megaman</p>
              <p className='character-title'>Fry</p>
              <p className='character-title'>Ryuk</p>
            </div>
          </div>
        )
      })} */}

      {
        click ?
        boxes.map((box) => {
          return (
            <div className='target-container'>
              <div className='target-box' style={{ left: box.x, top: box.y }}></div>
              <ul
                className={box.x < 200 ?
                          ['selection-dropdown', 'left-side'].join(' ') :
                          ['selection-dropdown', 'right-side'].join(' ')}
                style={{left: box.x, top: box.y}}
              >
                <li className='character-title'>Megaman</li>
                <li className='character-title'>Fry</li>
                <li className='character-title'>Ryuk</li>
              </ul>
            </div>
          ) 
        }) : ''
      }
    </div>
  );
}
 
export default Main;