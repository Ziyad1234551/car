import React from 'react'

export const Best = () => {
    const cars = [
        {
            img:"featured1.png",
            name:"toyota",
            price:3000
        },
        {
            img:"featured2.png",
            name:"dodge hadger",
            price:5000
        },
        {
            img:"featured3.png",
            name:"audi rs7",
            price:7400
        },
        {
            img:"featured4.png",
            name:"Range Rover",
            price:100500
        }
    ]
  return (
    <div data-aos="fade-right" className='my-[100px] w-full lg:max-w-[1428px] mx-auto'>
        <h1 className="lg:text-6xl md:text-5xl text-3xl my-4 text-blue-600 text-center dm-display font-bold">Best Product</h1>
        <p className="text-center my-4">Lorem ipsum dolor sit amet consectetur em!</p>
        <div className="flex lg:grid-cols-4 md:grid md:grid-cols-2  px-10 flex-col justify-center items-center gap-4">
            {cars.map((car)=>{
                return(
                    <div className='lg:w-full w-full h-[350px] rounded-md border border-black px-4 py-4'>
                        <h1 className='dm-display text-center text-4xl text-gray-800 font-bold'>{car.name}</h1>
                        <img src={car.img} alt="" className='w-[160px] my-10 mx-auto transition-all hover:translate-x-6 cursor-pointer h-[80px] object-cover' />
                        <p className='text-2xl font-bold roboto'>Price : $.{car.price}</p>
                        <button className='bg-blue-500 my-5 transition-all hover:shadow-lg cursor-pointer mx-auto w-full py-4 rounded-lg text-white'>Book Now</button>
                        
                    </div>
                )
            })}
        </div>
    </div>
  )
}
