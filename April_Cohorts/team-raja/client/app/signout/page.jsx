'use client';

import { auth } from '../firebase/config'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function SignOutPage() {
    // Placeholder function for sign-out logic
    const router = useRouter();
    const handleSignOut = async () => {
        await signOut(auth);
        router.push('/');
    };

    return (
        <div className=" flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
                <h1 className="text-xl font-bold mb-4 text-black">Are you sure you want to sign out?</h1>
                <button onClick={handleSignOut} className="w-full p-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                    Sign Out
                </button>
                <div className="my-6">
                  <p className="text-sm font-medium text-gray-700">I want to stay logged in - <a href="/" className="text-blue-500 text-sm inline-flex">Go to home page</a></p>
                </div>
            </div>
        </div>
    );
}
