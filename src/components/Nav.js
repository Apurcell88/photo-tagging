import { useEffect, useState } from 'react';
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

const Nav = (props) => {
//   console.log(auth);
  const { setIsAuth } = props;

  // STATE
  let [count, setCount] = useState(0);
  
  // FUNCTIONS
  const handleTimerStart = () => {
    setInterval(() => {
      setCount(prev => prev + 1)
    }, 1000);
  }

  // Sign user out function
  const signOutFromGoogle = async () => {
    try {
      await signOut(auth);
      setIsAuth(false); // comment this out and see what happens
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
        <p>{count}</p>
        <button
          onClick={handleTimerStart}
        >
          Start Timer
        </button>
      </div>
    </nav>
  )
}

export default Nav;