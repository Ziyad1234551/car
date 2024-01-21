import React from 'react'
import { FaLocationArrow } from 'react-icons/fa6'

export const Book = () => {
  return (
    <div data-aos="fade-up" className=' lg:max-w-[1228px] md:max-w-[600px] max-w-[300px] rounded-lg mx-auto py-4 text-black px-10 bg-gray-400 lg:h-auto h-auto  my-[100px]'>
        <h1 className='dm-display md:text-4xl md:mb-4  md:text-center sm:text-center lg:text-left text-center text-2xl lg:text-5xl font-bold'>Book Your Dream Car Now</h1>
        <p className='lg:w-[800px] md:w-[500px] w-[240px] lg:leading-6 leading-[40px] lg:text-left '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit a illo, atque ipsum, omnis itaque nemo velit eaque fugit animi officia, neque cum in molestias laborum placeat ipsa id. Repudiandae dolores nemo error.</p>
        <div className="lg:h-[100px] my-10 h-auto w-full grid grid-cols-1 lg:grid-cols-4 gap-4 justify-center items-center">
            <input type="text" className='w-full px-4 roboto h-[50px] rounded-md' placeholder='Masukan Nama Anda ' />
            <div className='w-full h-[50px] bg-white rounded-md relative'>
            <input type="text" className='w-full px-4 roboto h-full  rounded-md' placeholder='Masukan Alamat Anda' />
            <FaLocationArrow className='absolute top-[30%] right-4'/>

            </div>
            <input type="date" className='w-full h-[50px] rounded-md px-4' placeholder='masukan tanggal anda' />
            <div>
                <button className='w-full text-xl cursor-pointer h-[55px] transition-all hover:shadow-2xl rounded-md bg-blue-600 text-white dm-display font-bold'>Book Now</button>
            </div>

        </div>

    </div>
  )
}
