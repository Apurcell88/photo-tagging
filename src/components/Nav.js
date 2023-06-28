import React from 'react';
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useStopwatch } from 'react-timer-hook';

const Nav = (props) => {
//   console.log(auth);
  const { setIsAuth } = props;
  const { hours, minutes, seconds } = useStopwatch({ autoStart: true });
  
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
        <p className="nav-user-display">{hours} : {minutes} : {seconds}</p>
      </div>
      <div className="nav-num-characters-container">
        <p className="nav-num-characters">3</p>
      </div>
    </nav>
  )
}

export default Nav;