// import { useState } from 'react';
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

const Nav = (props) => {
//   console.log(auth);
  const { setIsAuth, count, setCount } = props;
  
  // FUNCTIONS

  // Starts the timer
  const handleTimerStart = () => {
    setInterval(() => {
      setCount(prev => prev + 1)
    }, 1000);
  }

  // Sign user out function
  const signOutFromGoogle = async () => {
    try {
      await signOut(auth);
      setIsAuth(false);
    } catch (err) {
        console.error(err);
    }
  }

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
        <button
          className="nav-start-timer-btn"
          onClick={handleTimerStart}
        >
          Start Timer
        </button>
      </div>
    </nav>
  )
}

export default Nav;