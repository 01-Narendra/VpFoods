import React from 'react'
import client from '../assets/client.jpeg'

const Client = () => {
  return (
    <div className='md:mt-20 mt-3'>
        <p className='text-center font-bold md:text-7xl text-3xl text-white font-khand md:mb-10 mt-5'>What our clients say</p>
        <div className='flex md:flex-nowrap flex-wrap md:gap-10 gap-16 p-14'>
            <div className='flex flex-col md:gap-28 gap-10'>
                <p className='md:text-2xl text-xl w-[75%] text-white font-khand'>❝ Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, placeat! Voluptates sit tempora aliquam deleniti odit incidunt exercitationem tempore ipsum consectetur, distinctio, temporibus unde at numquam, alias praesentium non doloribus. ❞</p>
                <p className='md:text-2xl text-xl w-[75%] text-white font-khand'>❝ Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, placeat! Voluptates sit tempora aliquam deleniti odit incidunt exercitationem tempore ipsum consectetur, distinctio, temporibus unde at numquam, alias praesentium non doloribus. ❞</p>
                <p className='md:text-2xl text-xl w-[75%] text-white font-khand'>❝ Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, placeat! Voluptates sit tempora aliquam deleniti odit incidunt exercitationem tempore ipsum consectetur, distinctio, temporibus unde at numquam, alias praesentium non doloribus. ❞</p>
            </div>
            <div>
                <img src={client} className='rounded-3xl' />
            </div>
        </div>
    </div>
  )
}

export default Client