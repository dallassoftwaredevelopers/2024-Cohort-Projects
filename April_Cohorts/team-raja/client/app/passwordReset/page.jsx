'use client';

import { useState, useEffect} from 'react'
import { useSendPasswordResetEmail, useAuthState, useUpdateEmail} from 'react-firebase-hooks/auth'
import { auth } from '../firebase/config'
import { useRouter } from 'next/navigation'
import {  fetchSignInMethodsForEmail } from 'firebase/auth';

export default function PasswordResetPage() {

  const [email, setEmail] = useState('')
  const [sendPasswordResetEmail, passwordResetsending, passwordResetError] = useSendPasswordResetEmail(auth);
  const [success, setSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter()
  const [updateEmail, updatingEmail, errorUpdateEmail] = useUpdateEmail(auth);

  if (passwordResetError) {
    return (
      <div>
        <p>Error: {passwordResetError.message}</p>
      </div>
    );
  }

  const resetPasswordSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      setSuccess(false)
      setSuccessMessage('')
      const data = await fetchSignInMethodsForEmail(auth, email)
      if (data.length === 0) {
        setSuccessMessage('The email is not registered with us. Please sign up.')
        setSuccess(true)
        return
      }

      const res = await sendPasswordResetEmail(email)
      setEmail('')

      if (res) {
        setSuccessMessage('Password reset email sent successfully')
        setSuccess(true)
      }

    } catch (error) {
      console.error(error)
    }
  }

  return (
  <div className=" flex items-center justify-center h-screen">
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
      <h1 className="text-xl font-bold mb-4 text-blue-500 text-center">Reset Password</h1>
      <form onSubmit={resetPasswordSubmitHandler}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" className="mt-1 p-2 w-full border rounded-md" placeholder="you@example.com" onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className='min-h-[2em]'>
         {passwordResetsending && (
            <p className="text-blue-500 text-xs py-2">Sending the password reset email...</p>
          )}
          {passwordResetError && (
            <p className="text-red-500 text-xs py-2">Error: {passwordResetError.message}</p>
          )}
          {success && (
            <p className={`${successMessage === 'The email is not registered with us. Please sign up.' ? "text-red-500" : "text-green-500"  } text-xs py-2`}>{successMessage}</p>
          )}
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Send password reset email</button>
      </form>
    </div>
  </div>
  )
}