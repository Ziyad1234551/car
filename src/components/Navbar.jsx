import React, { useState } from 'react';
import { FaCar } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [nav,setNav] = useState(false)
  return (
    <div data-aos="fade-up" className='w-full h-[120px] bg-blue-600 text-white px-4 lg:px-[100px] shadow-lg flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
            <FaCar className='text-5xl  lg:text-5xl '/>
            <Link to="/" className='roboto md:text-4xl sm:text-5xl lg:text-5xl font-bold'>Rent Mobil</Link>

        </div>
        <div className='lg:flex md:flex hidden gap-4 text-xl font-semibold roboto'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/service">Service</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact-us">Contact Us</NavLink>

            
        </div>
        <div className="lg:hidden md:hidden text-white text-3xl sm:flex">
            <GiHamburgerMenu className='text-5xl cursor-pointer' onClick={()=>setNav(!nav)}/>
        </div>
        {!nav?
          

           <div className='roboto text-2xl w-[0px] overflow-hidden z-20 transition-all py-4 px-0  absolute left-0 h-[100vh] flex bg-blue-500 flex-col gap-6 font-bold  top-0'>
               <IoCloseSharp className='absolute top-1 right-2 text-white text-3xl cursor-pointer '/>
               <NavLink to="/">Home</NavLink>
               <NavLink to="/service">Service</NavLink>
               <NavLink to="/blog">Blog</NavLink>
               <NavLink to="/contact-us">Contact Us</NavLink>
   
               
           </div>
        :

        <div className='roboto text-2xl transition-all overflow-hidden w-[200px] z-20  py-4 px-9  absolute left-0 h-[100vh] flex bg-blue-500 flex-col gap-6 font-bold  top-0'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/service">Service</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact-us">Contact Us</NavLink>

            
        </div>
        }
      
    </div>
  )
}

export default Navbar
