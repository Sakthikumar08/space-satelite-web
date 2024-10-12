import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
   <>
     <div className='fixed right-0 top-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-4'>
          <div className='container'>
               <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4 text-white font-bold text-2xl'>
                         <img src={logo} alt="logo" className='w-10' />
                         <span>TCJ-SPACE</span>
                    </div>
                    <div className='text-white'>
                        <ul className='flex items-center gap-6 text-xl py-0'>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Technology</a>
                            </li>
                            <li>
                                <a href="#">Galaxy</a>
                            </li>
                            <li>
                                <a href="#">Satelite</a>
                            </li>
                        </ul>
                    </div>
                    <div className='text-white border-2 border-white px-3 py-1 rounded-md' >
                        <button>Login</button>
                    </div>
               </div>
          </div>

     </div>
   </>
  )
}

export default Navbar
