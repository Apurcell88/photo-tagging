import React from 'react';
import { useState } from 'react';
import './App.css';
import Auth from './components/Auth';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  // STATE MANAGEMENT

  // Auth state
  const [isAuth, setIsAuth] = useState(false);

  // Main state
  const [boxes, setBoxes] = useState([]);

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
      />
      
      <Main
        boxes={boxes}
        setBoxes={setBoxes}
        
      />
    </div>
  )
}

export default App;
