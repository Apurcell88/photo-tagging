import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Auth from './components/Auth';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  // state management

  const [isAuth, setIsAuth] = useState(false);
  const [count, setCount] = useState(0);

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
        count={count}
        setCount={setCount}
      />
     <Main />
    </div>
  )
}

export default App;
