import React from 'react'
import { useSignInWithGithub, useSignInWithGoogle, useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [user] = useAuthState(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const signIn = () => {
    signInWithGithub();
  }

  const singInGoogle = () => {
    signInWithGoogle();
  }

  if (user) {
    // console.log(user)
    navigate('/');
  }

  return (
    <div className="container">
      <button onClick={signIn}>Sign In with Github</button>
      <button onClick={singInGoogle}>Sign In with Google</button>
    </div>
  )
}
