import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6'

export const Footer = () => {
  return (
    <div data-aos="fade-bottom" className="bg-blue-600 h-auto lg:h-[50vh] text-white">

    <div className=' lg:gap-10 gap:4  py-8 rounded-sm  dm-display text-white theme grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 px-4 lg:px-[33px] mx-auto w-full'>
        <div>
            <h1 className='lg:text-5xl md:text-3xl text-4xl font-bold'>Rent Mobil</h1>
            <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos quisquam rerum, tempore ratione accusantium! Rerum culpa corrupti alias ipsum accusamus totam.</p>
            <div>
                <h3 className='lg:text-2xl text-2xl md:text-xl'>Follow Us</h3>
                <div className='flex gap-2 my-3 text-3xl'>
                    <FaGithub className='cursor-pointer'/>
                    <FaLinkedin className='cursor-pointer'/>
                    <FaTwitter className='cursor-pointer'/>
                </div>


            </div>
        </div>
            <div>
                <h1 className='lg:text-3xl text-2xl md:text-xl'>Important Links</h1>
                <div className="flex text-lg flex-col gap-2 my-4">

                <p>Home</p>
                <p>About</p>
                <p>Blog</p>
                <p>Contact Us</p>
                </div>

            </div>
            <div>
                <h1 className='lg:text-3xl  text-2xl md:text-xl'>Important Links</h1>
                <div className="flex text-lg flex-col gap-2 my-4">

                <p>Home</p>
                <p>About</p>
                <p>Blog</p>
                <p>Contact Us</p>
                </div>

            </div>
            <div>
                <h1 className='lg:text-3xl text-2xl md:text-xl'>Important Links</h1>
                <div className="flex text-lg flex-col gap-2 my-4">

                <p>Home</p>
                <p>About</p>
                <p>Blog</p>
                <p>Contact Us</p>
                </div>

            </div>

    </div>
    <p className='text-center   border-b border-white'>&copy; All Right Reserved</p>
    </div>
  )
}
