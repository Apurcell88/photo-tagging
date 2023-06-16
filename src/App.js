import React from 'react';
import { useState } from 'react';
import './App.css';
import Auth from './components/Auth';
import  { auth }  from './config/firebase';

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

  console.log(auth)
  return (
    <h1>yay</h1>
  )
}

export default App;
