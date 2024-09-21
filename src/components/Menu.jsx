import React from 'react'
import ProductCard from './Card'

const Menu = () => {

    const products = [
        {
            image: 'https://media.istockphoto.com/id/1279134622/photo/image-of-metal-tray-with-aloo-paratha-pile-topped-with-red-onion-rings-and-sprinkle-of.jpg?s=612x612&w=0&k=20&c=qLee_GMpPHzcCVfkNWmMdJPjlIpxsklN_bMwlhQS7rM=',
            name: 'Gobhi Paratha',
            price: '25',
        },
        {
            image: 'https://media.istockphoto.com/id/1413566368/photo/indian-food-aloo-paratha-or-indian-potato-stuffed-flatbread-served-with-butter-pickle-and.jpg?s=612x612&w=0&k=20&c=hIqRXgQTFJ4Ta_Zh_JhOc_Okjk_yJUB--uDYIjifVCc=',
            name: 'Aloo Paratha',
            price: '20',
        },
        {
            image: 'https://media.istockphoto.com/id/1307253080/photo/methi-paratha.jpg?s=612x612&w=0&k=20&c=qMWwQZzJ4zTUbE0vWA2XX_Jx4xL0PoBjYjZTI8bX9Jc=',
            name: 'Methi Paratha',
            price: '30',
        },
        {
            image: 'https://media.istockphoto.com/id/980049442/photo/stuffed-paneer-paratha-with-melting-butter-served-with-fresh-cottage-cheese-cubes-and-tomato.jpg?s=612x612&w=0&k=20&c=44IJMPhvdInR4r3JDhHoLsQ3AtF49tnHvnA2eUDz8CQ=',
            name: 'Paneer Paratha',
            price: '35',
        },
        {
            image: 'https://media.istockphoto.com/id/1292639364/photo/aloo-pakora-or-aloo-bhajji-served-with-chutney-a-famous-midday-snack-in-india-served-over-a.jpg?s=612x612&w=0&k=20&c=fEhEp_mLiTFasZut5_ISKdJH9rdo5qE4ILbAzwEGaNk=',
            name: 'Aloo Pakora',
            price: '10',
        },
        {
            image: 'https://media.istockphoto.com/id/1318538483/photo/pakoray.jpg?s=612x612&w=0&k=20&c=poYQaapxgjfHPjaWE4fLTzDr0_bbf4YDeXmlUYXjgAs=',
            name: 'Onion Pakora',
            price: '10',
        },
        {
            image: 'https://media.istockphoto.com/id/1415221159/photo/corn-bhajiya.jpg?s=612x612&w=0&k=20&c=Ou0qYpUSiZvSHmF8qlC7Vj6hs8BRt707NaPX9xdaU-I=',
            name: 'Corn Pakora',
            price: '12.49',
        },
        {
            image: 'https://media.istockphoto.com/id/2148933065/photo/selective-focus-samosa-spiced-potato-filled-pastry-crispy-savory-popular-indian-snack-with.jpg?s=612x612&w=0&k=20&c=jFLx3sWNK4DeNqocOt9sTtdmym6HAPwLCKBOb_qW87k=',
            name: 'Aloo Samosa',
            price: '7',
        },
        {
            image: 'https://media.istockphoto.com/id/1500068034/photo/paneer-chilli-samosa.jpg?s=612x612&w=0&k=20&c=Ead4gePSuNta1W69rhKhbLfckjLOW_MqpLBBn-8rfUo=',
            name: 'Paneer Samosa',
            price: '15',
        },
        {
            image: 'https://media.istockphoto.com/id/1220374343/photo/samosa-chat-indian-food-in-varanasi-india-2020.jpg?s=612x612&w=0&k=20&c=fHJE0PWZm1GHAuC5s8SUde8A1-lsD2HIT9TBa9ZVjpo=',
            name: 'Chaat/Aloo tikki',
            price: '10',
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