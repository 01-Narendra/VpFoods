import React from 'react'
import logo from '../assets/logo.png'
import truck from '../assets/Grandmas Treat Food Truck.jpg'

const Client = () => {
  return (
    <div className='md:mt-20 mt-3'>
        <p className='filter text-center font-bold md:text-7xl text-3xl text-white font-khand md:mb-10 mt-5'
        style={{ filter: 'drop-shadow(0px 10px 10px black)' }}>What our clients say</p>
        <div className='flex md:flex-nowrap flex-wrap md:gap-10 gap-16 p-14'>
            <div className='flex flex-col md:gap-20 gap-10'>
                <p className='md:text-2xl text-xl md:w-[75%] cursor-pointer text-white hover:scale-110 font-khand p-4 border-2 border-transparent rounded-lg hover:shadow-xl hover:bg-[#BAB86C] transition duration-300 ease-in-out'>❝ I’ve tried parathas from all over, but nothing comes close to the ones I found here. The texture was perfectly flaky, and the fillings were packed with flavor. Whether I go for the classic aloo or the paneer, each bite takes me back to the bustling streets of Delhi. These parathas are an absolute must-try! ❞ <br /> -<b>Amit R.</b>⭐⭐⭐⭐⭐</p>
            </div>
            <div>
                <img src={logo} className='rounded-3xl block md:hidden' style={{ filter: 'drop-shadow(0px 0px 20px white)' }}/>
                <img src={truck} className='hidden md:block rounded-3xl' width={500} />
            </div>
        </div>
    </div>
  )
}

export default Client