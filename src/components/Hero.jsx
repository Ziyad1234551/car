import React, { useState } from 'react'

export const Hero = () => {
    const populars = [
        {
            img:"popular1.png",
        },
        {
            img:"popular2.png",
        },  {
            img:"popular3.png",
        },

    ]
    const [car,setCar] = useState(populars[0])
  return (
    <div data-aos="fade-left" className='lg:flex-row  flex flex-col md:flex-row sm:flex-col my-10  lg-h-auto lg:h-[50vh] items-center justify-between max-w-full lg:max-w-[1228px] mx-auto lg:px-0 px-10'>
        <div data-aos-delay="1500" className='my-5'>
            <h1 className='lg:text-5xl text-3xl  dm-display font-bold'>Safer Faster And Comportable</h1>
            <p className='lg:w-[600px] w-[300px] leading-10 my-4 dm-display'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad deleniti beatae voluptatibus veritatis vitae alias delectus dolorum mollitia quidem, suscipit incidunt temporibus, eligendi ex quia fugit unde nisi voluptas itaque deserunt. Id, sit.</p>

            <button className='dm-display w-[160px] py-4 rounded-lg bg-blue-600 font-bold text-white'>Rent Now</button>
        </div>
        <div data-aos-duration="1800" className='flex flex-col gap-4'>
            <img src={car.img} alt="" />
            <div className="flex lg:flex-row md:flex-row flex-col items-center justify-center">
                {populars.map((popular,i) =>{
                    return(
                        <img src={popular.img} className='w-[120px] cursor-pointer object-cover' onClick={()=>setCar(populars[i])} alt="" />
                    )
                })}
            </div>
        </div>
    </div>
  )
}
