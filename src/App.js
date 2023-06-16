import React from 'react';
import { useState } from 'react';
import './App.css';
import Auth from './components/Auth';
import Nav from './components/Nav';

function App() {
  // state management
  const [isAuth, setIsAuth] = useState(false);

  if (!isAuth) {
    return (
      <Auth
        setIsAuth={setIsAuth}
      />
    )
  }

  return (
    <Nav
      setIsAuth={setIsAuth}
    />
  )
}

export default App;
