import React, { useState } from 'react';
import { FaCar } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";
const Navbar = () => {
    const [nav,setNav] = useState(false)
  return (
    <div className='w-full h-[120px] bg-blue-600 text-white px-4 lg:px-[100px] shadow-lg flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
            <FaCar className='text-5xl  lg:text-5xl '/>
            <Link to="/" className='roboto md:text-4xl sm:text-5xl lg:text-5xl font-bold'>Rent Mobil</Link>

        </div>
        <div className='lg:flex md:flex hidden gap-4 text-xl font-semibold roboto'>
            <NavLink to="/">Home</NavLink>
            <ScrollLink className="cursor-pointer" smooth={true}  to="about">About</ScrollLink>
               <ScrollLink className="cursor-pointer"  smooth={true}   to="service">Services</ScrollLink>
               <ScrollLink className="cursor-pointer"   smooth={true}  to="car">Car</ScrollLink>

            
        </div>
        <div className="lg:hidden md:hidden text-white text-3xl sm:flex">
            <GiHamburgerMenu className='text-5xl cursor-pointer' onClick={()=>setNav(!nav)}/>
        </div>
        {!nav?
          

           <div className='roboto text-2xl w-[0px] overflow-hidden z-20 transition-all py-4 px-0  absolute left-0 h-[100vh] flex bg-blue-500 flex-col gap-6 font-bold  top-0'>
               <NavLink className="cursor-pointer" to="/">Home</NavLink>
               <ScrollLink className="cursor-pointer"  to="About">About</ScrollLink>
               <ScrollLink className="cursor-pointer"  to="service">Services</ScrollLink>
               <ScrollLink className="cursor-pointer"  to="car">Car</ScrollLink>
   
               
           </div>
        :

        <div className='roboto text-2xl transition-all overflow-hidden w-[200px] z-20  py-4 px-9  absolute left-0 h-[100vh] flex bg-blue-500 flex-col gap-6 font-bold  top-0'>
            <NavLink to="/">Home</NavLink>
            <ScrollLink className="cursor-pointer"  to="About">About</ScrollLink>
               <ScrollLink className="cursor-pointer"  to="service">Services</ScrollLink>
               <ScrollLink className="cursor-pointer"  to="car">Car</ScrollLink>

            
        </div>
        }
      
    </div>
  )
}

export default Navbar
