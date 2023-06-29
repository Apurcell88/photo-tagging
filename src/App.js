import React from 'react';
import { useState } from 'react';
import './App.css';
import Auth from './components/Auth';
import Nav from './components/Nav';
import Main from './components/Main';
import CharacterDropdown from './components/CharactersDropdown';
import megaman from 'C:/Users/apurc/Documents/odinReact/photo-tagging/src/images/megaman.png';
import mario from 'C:/Users/apurc/Documents/odinReact/photo-tagging/src/images/mario.png';
import ryuk from 'C:/Users/apurc/Documents/odinReact/photo-tagging/src/images/ryuk.png';

function App() {
  // STATE MANAGEMENT

  // Auth state
  const [isAuth, setIsAuth] = useState(false);

  // Nav state
  const [characters, setCharacters] = useState([megaman, mario, ryuk]);
  const [displayCharDropdown, setDisplayCharDropdown] = useState(false);

  // Main state
  const [boxes, setBoxes] = useState([]);
  const [click, setClick] = useState(false);
  // const [coordinates, setCoordinates] = useState({});

  if (!isAuth) {
    return (
      <Auth
        setIsAuth={setIsAuth}
      />
    )
  }

  return (
    <div>
      <Nav
        setIsAuth={setIsAuth}
        characters={characters}
        setCharacters={setCharacters}
        displayCharDropdown={displayCharDropdown}
        setDisplayCharDropdown={setDisplayCharDropdown}
      />

      {displayCharDropdown ? <CharacterDropdown
                               characters={characters}
                               setCharacters={setCharacters}
                             /> : ''}
      
      <Main
        boxes={boxes}
        setBoxes={setBoxes}
        click={click}
        setClick={setClick}
      />
    </div>
  )
}

export default App;
