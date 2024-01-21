import React from 'react';
import { FaDelicious, FaDribbble } from 'react-icons/fa6';
import { GrSecure } from "react-icons/gr";
export const Service = () => {
  return (
    <div data-aos="fade-left" className='lg:max-w-[1428px] md:w-full lg:items-center px-2 w-full lg:flex-row md:flex-row flex-col  flex justify-around gap-10  my-[100px]'>
         <div>
            <img className='md:w-[300px] lg:w-full md:object-cover' src="car2.png" alt="" />

        </div>
        <div className='-start  my-0 lg:my-[40px]'>
            <h1 className="dm-display  md:text-5xl text-2xl lg:text-[60px] text-blue-500 font-bold ">Our Services</h1>
            <div className="flex gap-4 my-8 items-center ">
                <div className='w-[50px] h-[50px] flex justify-center items-center bg-green-300 text-white rounded-full'>
                <GrSecure className='text-2xl font-bold'/>

                </div>
                <h1 className='text-[26px] md:text-xl font-bold dm-display'>Car Hire</h1>
            </div>
            <div className="flex gap-4 my-8 items-center ">
                <div className='w-[50px] h-[50px] flex justify-center items-center bg-red-300 text-white rounded-full'>
                <FaDelicious className='text-2xl md:text-xl font-bold'/>

                </div>
                <h1 className='text-[26px] md:text-xl font-bold dm-display'>Car Sales</h1>
            </div>
            <div className="flex gap-4 my-8 items-center ">
                <div className='w-[50px] h-[50px] flex justify-center items-center bg-yellow-300 text-white rounded-full'>
                <FaDribbble className='text-2xl md:text-xl font-bold'/>

                </div>
                <h1 className='text-[26px] md:text-xl font-bold dm-display'>Hire A Driver</h1>
            </div>
            
        </div>

    </div>
  )
}
