'use client';

import { useState, useEffect} from 'react'
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/config'
import { useRouter } from 'next/navigation'

export default function LogUpPage() {

  const [signupEmail, setSignupEmail] = useState('')
  const [signupPassword, setSignupPassword] = useState('')
  const [createUserWithEmailAndPassword, signUpUser, signUpLoading, signUpError] = useCreateUserWithEmailAndPassword(auth);
  const [signUpAlert, setSignUpAlert] = useState('')
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter()

  useEffect(() => {
    if (signUpError) {
      if (signUpError.message.includes('email-already-in-use')) {
        setSignUpAlert('Email already in use');
      } else {
        setSignUpAlert('');
      }
    }
  }, [signUpError]);

  const signUpFormSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await createUserWithEmailAndPassword(signupEmail, signupPassword)
      setSignupEmail('')
      setSignupPassword('')
      if (res) {
        router.push('/')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
  <div className=" flex items-center justify-center h-screen">
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-xl font-bold mb-4 text-blue-500 text-center">Sign Up</h1>
        <form onSubmit={signUpFormSubmitHandler}>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 p-2 w-full border rounded-md" placeholder="you@example.com" onChange={(e) => setSignupEmail(e.target.value)} required />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" className="mt-1 p-2 w-full border rounded-md" onChange={(e) => setSignupPassword(e.target.value)} minLength='6' required />
            </div>
            <div className="mb-6">
                <p className="text-sm font-medium text-gray-700">Already have an account? - <a href="/login" className="text-blue-500 text-sm inline-flex">Sign In</a></p>
            </div>
            <div className='min-h-[2em]'>
            {!signUpError ?
            <p className={`text-blue-500 text-xs py-2 ${signUpLoading ? 'visible' : 'invisible'}`}>please wait while signing you up ...</p> :
            <p className={`text-red-500 text-xs py-2 ${signUpError ? 'visible' : 'invisible'}`}>{signUpError ? signUpAlert : ' '}</p>}
          </div>
            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Sign Up</button>
        </form>
    </div>
  </div>
  )
}