'use client';
import Link from 'next/link';
import { sideNavItems } from '@/constants';
import { usePathname } from 'next/navigation';
import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';

export default function Layout({ children }) {
	const pathname = usePathname();
	const [user, loading, error] = useAuthState(auth);
	const router = useRouter();

	useEffect(() => {
		if (!user) {
			router.push('/adminSignInAndSignUp');
		}
	}, [user, loading, error]);

	return (
		<div className='drawer bg-white'>
			<input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content flex flex-col m-4 p-4'>
				<div>{children}</div>
			</div>
			<div>
				<ul className='menu p-4 w-80 min-h-full text-base-content'>
					{sideNavItems.map((item) => (
						<li key={item.label} className={`mb-4 rounded-lg text-center ${pathname === item.href ? 'bg-black' : ''}`}>
							<Link href={item.href}>
								<button
									className={`p-2 flex flex-row justify-between font-bold ${
										pathname === item.href ? 'text-white' : 'text-gray-600'
									}`}
								>
									<p>{item.label}</p>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke-width='1.5'
										stroke='currentColor'
										class='w-6 h-6'
									>
										<path stroke-linecap='round' stroke-linejoin='round' d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3' />
									</svg>
								</button>
							</Link>
						</li>
					))}
					<li>
						<button className='btn' onClick={() => signOut(auth)}>
							Sign Out
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
}
