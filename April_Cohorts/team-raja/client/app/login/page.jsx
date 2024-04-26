'use client';

import { useState, useEffect} from 'react'
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/config'
import { useRouter } from 'next/navigation'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function LoginPage() {

  const [signinEmail, setSigninEmail] = useState('')
  const [signinPassword, setSigninPassword] = useState('')
  const [signInWithEmailAndPassword, signInUser, signInLoading, signInError] = useSignInWithEmailAndPassword(auth);
  const [signInAlert, setSignInAlert] = useState('')
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter()

  useEffect(() => {
    if (signInError) {
      if (signInError.message.includes('invalid-credential')) {
        setSignInAlert('Either email or password is incorrect');
      } else {
        setSignInAlert('');
      }
    }
  }, [signInError])

  const signInFormSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await signInWithEmailAndPassword(signinEmail, signinPassword)
      setSigninEmail('')
      setSigninPassword('')
      if (res) {
        router.push('/')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleGoogleSignIn = async (e) => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    try {
      const res = await signInWithPopup(auth, provider)
      if (res) {
        router.push('/')
      }

    }
    catch (error) {
      console.error(error)
    }
   }

  return (
  <div className=" flex items-center justify-center h-screen">
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-xl font-bold mb-4 text-blue-500 text-center">Sign In</h1>
        <form onSubmit={signInFormSubmitHandler}>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 p-2 w-full border rounded-md" placeholder="you@example.com" onChange={(e) => setSigninEmail(e.target.value)} required />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" className="mt-1 p-2 w-full border rounded-md" onChange={(e) => setSigninPassword(e.target.value)} minLength='6' required />
            </div>
            <div className="mb-6">
                <p className="text-sm font-medium text-gray-700">Forgot Password? - <a href="/passwordReset" className="text-blue-500 text-sm inline-flex">Reset Password</a></p>
            </div>
            <div className="mb-6">
                <p className="text-sm font-medium text-gray-700">Don't have an account? - <a href="/signup" className="text-blue-500 text-sm inline-flex">Sign Up</a></p>
            </div>
            <div className="min-h-[2em]">
           { !signInError ?
              <p className={`text-blue-500 text-xs py-2 ${signInLoading ? 'visible' : 'invisible'}`}>please wait while signing you in ...</p> :
              <p className={`text-red-500 text-xs py-2 ${signInError ? 'visible' : 'invisible'}`}>{ signInError ? signInAlert : ' '}</p>}
            </div>
            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Sign In</button>
        </form>
        <div className="mt-6 flex items-center justify-between">
            <hr className="w-full bg-gray-300" /> <span className="p-2 text-gray-400 bg-white">OR</span> <hr className="w-full bg-gray-300" />
        </div>
        <button onClick={handleGoogleSignIn} className="mt-6 w-full p-2 bg-red-500 text-white rounded</button>-md flex items-center justify-center hover:bg-red-600">
            <svg className="w-6 h-6 mr-2 -ml-1" fill="currentColor" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg"><path d="M255.682 133.233c0-9.044-.773-17.798-2.26-26.291H130.773v49.747h70.925c-3.064 20.621-23.491 60.287-70.925 60.287-42.735 0-77.584-35.423-77.584-79.158 0-43.735 34.849-79.158 77.584-79.158 22.261 0 42.354 9.62 56.402 25.248l40.545-39.104C187.78 24.55 161.259 14 130.773 14 58.59 14 0 72.18 0 144.363s58.59 130.363 130.773 130.363c74.176 0 123.903-52.264 123.903-125.927z" fill="#FFF"/></svg>
            Sign in with Google
        </button>
    </div>
  </div>
  )
}