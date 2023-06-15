import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import Cookies from 'universal-cookie';

const cookie = new Cookies();

const Auth = () => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookie.set('auth-token', result.user.refreshToken);
    } catch(err) {
        console.error(err);
    }
  }

  return (
    <div>
      <p>Sign in with Google</p>
      <button
        onClick={signInWithGoogle}
      >
        Sign In
      </button>
    </div>
  )
}

export default Auth;