// import { useState } from 'react';
import { useEffect } from "react";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

const Nav = (props) => {
//   console.log(auth);
  const { setIsAuth, count, setCount } = props;
  
  // FUNCTIONS

  // Sign user out function
  const signOutFromGoogle = async () => {
    try {
      await signOut(auth);
      setIsAuth(false);
    } catch (err) {
        console.error(err);
    }
  }

  const startTimer = () => {
    setCount(prev => prev + 1);
  }

  // Starts the timer on page load
  useEffect(() => {
    setInterval(startTimer, 1000);
  }, []);

  return (
    <nav>
      <div className="nav-user-info-container">
        <h1 className="nav-user-display">{auth.currentUser.displayName}</h1>
        <button
          className="nav-sign-out-btn"
          onClick={signOutFromGoogle}
        >
          Sign Out
        </button>
      </div>
      <div className="nav-timer">
        <p className="nav-user-display">{count} seconds</p>
      </div>
      <div className="nav-num-characters-container">
        <p className="nav-num-characters">3</p>
      </div>
    </nav>
  )
}

export default Nav;