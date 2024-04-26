import { FaChevronRight } from "react-icons/fa6";

export default function CompanyServicesPage() {
  return <div className='bg-white text-black min-h-screen flex flex-col'>
    <header className='flex flex-col justify-center items-center py-10 my-6'>
      <h6 >What we offer.</h6>
      <h1 className='font-bold text-5xl pt-3'>What we can do for you!</h1>
    </header>
    <div className='flex justify-center items-center'>
      <div className="card card-side bg-zinc-50 items-center">
        <div className="card-body">
          <h1 className="card-title font-bold text-4xl">Plumbing Repaires and Maintenance</h1>
          <p>From leaky faucets to clogged drains</p>
          <div className="card-actions justify-start items-center">
          <a href={'./appointment'} className='text-sm text-blue-500 flex items-center'>Let's fix your problem<FaChevronRight className='text-blue-500 ml-1'/></a>
          </div>
        </div>
        <figure><img src="pipe1.png" alt="Movie"/></figure>
      </div>
    </div>
    <div className='flex justify-center pt-6'>
    <div className='flex justify-center items-center pr-4'>
      <div className="card card-side bg-zinc-50 justify-between items-center flex flex-col">
        <div className="card-body flex flex-col justify-center items-center text-center">
          <h1 className="card-title font-bold text-4xl">Plumbing Installations</h1>
          <p>We offer professional installation services</p>
          <div className="card-actions justify-start items-center">
          <a href={'./appointment'} className='text-sm text-blue-500 flex items-center'>Let's fix your problem<FaChevronRight className='text-blue-500 ml-1'/></a>
          </div>
        </div>
        <figure className='selt-end'><img src="pipe2.png" alt="Movie"/></figure>
      </div>
    </div>
    <div className='flex justify-center items-center pl-4'>
      <div className="card card-side bg-zinc-50 justify-between items-center flex flex-col">
        <div className="card-body flex flex-col justify-center items-center text-center">
          <h1 className="card-title font-bold text-4xl">Drain cleaning</h1>
          <p>Effectively clear stubborn clogs and restire flow</p>
          <div className="card-actions flex justify-center items-center w-full">
          <a href={'./appointment'} className='text-sm text-blue-500 flex items-center'>Let's fix your problem<FaChevronRight className='text-blue-500 ml-1'/></a>
          </div>
        </div>
        <figure><img src="pipe3.png" alt="Movie"/></figure>
      </div>
    </div>
    </div>
  </div>;
}
