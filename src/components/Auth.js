import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import Cookies from 'universal-cookie';

const cookie = new Cookies();

const Auth = (props) => {
  const { setIsAuth } = props;

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookie.set('auth-token', result.user.refreshToken);
      setIsAuth(true);
    } catch(err) {
        console.error(err);
    }
  }

  return (
    <div className="sign-in-container">
      <div className="sign-in-info">
        <p>Please Sign In</p>
        <button
          className="sign-in-btn"
          onClick={signInWithGoogle}
        >
          Sign In
        </button>
      </div>
    </div>
  )
}

export default Auth;