import React from 'react'
import ProductCard from './Card'

const Menu = () => {

    const products = [
        {
            image: 'https://images.unsplash.com/photo-1641642398311-45e905de2082?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwc3RyZWV0JTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Street Food Item 1',
            price: '9.99',
        },
        {
            image: 'https://images.unsplash.com/photo-1617622163466-d1d56ec8b127?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhbiUyMHN0cmVldCUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
            name: 'Street Food Item 2',
            price: '12.49',
        },
        {
            image: 'https://images.unsplash.com/photo-1655740283378-269ebc3dc23a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbiUyMHN0cmVldCUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
            name: 'Street Food Item 3',
            price: '7.89',
        },
        {
            image: 'https://images.unsplash.com/photo-1717587474042-b256f4245a1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZGlhbiUyMHN0cmVldCUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
            name: 'Street Food Item 2',
            price: '12.49',
        },
        {
            image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGluZGlhbiUyMHN0cmVldCUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
            name: 'Street Food Item 3',
            price: '7.89',
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1695297515622-d0991a12efe3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGluZGlhbiUyMHN0cmVldCUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
            name: 'Street Food Item 3',
            price: '7.89',
        },
        {
            image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGluZGlhbiUyMHN0cmVldCUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
            name: 'Street Food Item 2',
            price: '12.49',
        },
        {
            image: 'https://images.unsplash.com/photo-1523949538449-87dd068b65e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGluZGlhbiUyMHN0cmVldCUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
            name: 'Street Food Item 3',
            price: '7.89',
        },
    ];

return (
    <div>
        <div id='menu' className='flex justify-center items-center flex-col md:gap-5 gap-2 md:mt-10'>
            <div className='md:h-[150px] h-[80px] w-[1px] bg-white'></div>
            <p className='text-[30px] md:text-7xl font-bold font-sevillana text-white'>Menu</p>
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