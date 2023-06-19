import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

const Nav = (props) => {
//   console.log(auth);
  const { setIsAuth } = props;

  // VARIABLES

  let seconds = 0;
  let minutes = 0;
  
  // FUNCTIONS

  // Sign user out function
  const signOutFromGoogle = async () => {
    try {
      await signOut(auth);
      setIsAuth(false); // comment this out and see what happens
    } catch (err) {
        console.error(err);
    }
  }

  // Timer function
  const timer = () => {

  }

  return (
    <nav>
      <div className="nav-user-info">
        <h1>{auth.currentUser.displayName}</h1>
        <button
          className="nav-sign-out-btn"
          onClick={signOutFromGoogle}
        >
          Sign Out
        </button>
      </div>
      <div className="nav-timer"></div>
    </nav>
  )
}

export default Nav;