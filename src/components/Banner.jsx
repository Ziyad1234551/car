import React from 'react'

export const Banner = () => {
   
  return (
    <div data-aos="fade-bottom" className='lg:w-[1028px] md:[700px] sm:w-[300px] w-[300px] px-8 car mx-auto py-4 md:h-[300px] h-auto lg:h-[300px] bg-cover bg-center text-white my-10 rounded-lg' style={{
        backgroundImage:`url(./bg1.png)`
    }}>
        <h1 className='dm-display lg:text-6xl  md:text-4xl text-3xl  text-center'>Subscribe To Our NewsLetter</h1>

        <div className="flex lg:flex-row md:flex-row flex-col justify-center items-center gap-2 lg:my-10 md:my-6 my-2">
        <input type="text" className='lg:w-[500px] md:w-[400px] w-full text-black h-[50px] rounded-lg outline-none border border-black px-4'  placeholder='Enter Your Email'/>
        <button className='bg-yellow-400 py-3 lg:w-[140px] w-full rounded-lg px-4 text-xl  roboto'>Subscribe</button>
        </div>
    </div>
  )
}
