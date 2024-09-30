import React from 'react'
import ProductCard from './Card'
import aloo from  '../assets/Aloo ka Paratha.jfif'
import chana from '../assets/Chana dal Paratha.jfif'
import gobhi from '../assets/Gobhi ka paratha.jpg'
import matar from '../assets/Matar-Paratha-.jpg'
import methi from '../assets/Methi-Paratha-1.jpg'
import onion from '../assets/Onion Paratha.jpg'
import palak from '../assets/Palak Paratha.webp'
import paneer from '../assets/paneer-paratha-.jpg'
import mooli from '../assets/Stuffed_Mooli_Paneer_Paratha_.jpg'

const Menu = () => {

    const products = [
        {
            image: gobhi,
            name: 'Gobhi Paratha',
            price: '45',
        },
        {
            image: aloo,
            name: 'Aloo Paratha',
            price: '40',
        },
        {
            image: methi,
            name: 'Methi Paratha',
            price: '50',
        },
        {
            image: paneer,
            name: 'Paneer Paratha',
            price: '50',
        },
        {
            image: chana,
            name: 'Chana Paratha',
            price: '40',
        },
        {
            image: matar,
            name: 'Matar Paratha',
            price: '40',
        },
        {
            image: onion,
            name: 'Onion Paratha',
            price: '45',
        },
        {
            image: palak,
            name: 'Palak Paratha',
            price: '45',
        },
        {
            image: mooli,
            name: 'Mooli Paratha',
            price: '50',
        },
    ];

return (
    <div>
        <div id='menu' className='flex justify-center items-center flex-col md:gap-5 gap-2 md:mt-10'>
            <div className='md:h-[150px] h-[80px] w-[1px] bg-white'></div>
            <p className='filter text-[30px] md:text-7xl font-bold font-sevillana text-white'
            style={{ filter: 'drop-shadow(0px 10px 10px black)' }}>Menu</p>
        </div>
        <div className="p-6 md:mt-10 mt-5 flex flex-wrap gap-12 justify-center">
            {products.map((product, index) => (
            <ProductCard
                key={index}
                image={product.image}
                name={product.name}
                price={product.price}
            />
            ))}
        </div>
    </div>
  )
}

export default Menu