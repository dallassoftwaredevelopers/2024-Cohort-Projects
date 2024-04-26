import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<main className='flex flex-col justify-center items-center mt-40'>
				<h1 className='text-6xl font-bold leading-tight mb-4 w-1/2 text-center'>
					Your trusted choice for all plumbing works.
				</h1>
				<p className='text-lg text-gray-600 mb-6 font-semibold'>Reliable. Professional. Unmatched</p>
				<Link href={'/appointment'}>
					<button className='text-xl text-blue-500 hover:text-blue-700'>{`Let's fix your problem >`}</button>
				</Link>
				<Image priority src={'/broken-pipe.svg'} alt='Follow us on Twitter' width={320} height={320} />
			</main>
			<Link href={'/adminSignInAndSignUp'} className='absolute bottom-0 right-0 inline-block'>
				<button className='btn btn-neutral'>Admin</button>
			</Link>
		</>
	);
}
