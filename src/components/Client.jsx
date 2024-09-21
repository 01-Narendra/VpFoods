import React from 'react'
import client from '../assets/client.jpeg'

const Client = () => {
  return (
    <div className='md:mt-20 mt-3'>
        <p className='filter text-center font-bold md:text-7xl text-3xl text-white font-khand md:mb-10 mt-5'
        style={{ filter: 'drop-shadow(0px 10px 10px black)' }}>What our clients say</p>
        <div className='flex md:flex-nowrap flex-wrap md:gap-10 gap-16 p-14'>
            <div className='flex flex-col md:gap-20 gap-10'>
                <p className='md:text-2xl text-xl md:w-[75%] cursor-pointer text-white hover:scale-110 font-khand p-4 border-2 border-transparent rounded-lg hover:border-gray-500 hover:bg-gray-500 hover:shadow-xl transition duration-300 ease-in-out'>❝ I’ve tried parathas from all over, but nothing comes close to the ones I found here. The texture was perfectly flaky, and the fillings were packed with flavor. Whether I go for the classic aloo or the paneer, each bite takes me back to the bustling streets of Delhi. These parathas are an absolute must-try! ❞ <br /> -<b>Amit R.</b>⭐⭐⭐⭐⭐</p>
                <p className='md:text-2xl text-xl md:w-[75%] cursor-pointer text-white hover:scale-110 font-khand p-4 border-2 border-transparent rounded-lg hover:border-gray-500 hover:bg-gray-500 hover:shadow-xl transition duration-300 ease-in-out'>❝ I couldn’t resist trying both the samosas and pakoras, and I’m so glad I did. The samosas were crispy on the outside with a perfectly spiced filling, and the pakoras had that perfect crunch with a flavorful burst in every bite. These snacks are ideal for a quick, tasty treat or as part of a larger meal. Absolutely amazing! ❞ <br /> -<b>Priya M.</b>⭐⭐⭐⭐⭐</p>
                <p className='md:text-2xl text-xl md:w-[75%] cursor-pointer text-white hover:scale-110 font-khand p-4 border-2 border-transparent rounded-lg hover:border-gray-500 hover:bg-gray-500 hover:shadow-xl transition duration-300 ease-in-out'>❝ I’m a huge fan of street food, and the aloo tikki chaat here has blown me away! The combination of crispy tikki, tangy chutneys, and cool yogurt creates an explosion of flavors. It’s the perfect balance of spicy, sweet, and savory. I can’t wait to order it again! ❞<br />  -<b>Rahul K</b> ⭐⭐⭐⭐⭐</p>
            </div>
            <div>
                <img src={client} className='rounded-3xl block md:hidden' />
                <img src="https://img.freepik.com/premium-vector/vector-teenagers-laughing-together-flat-design-style_995281-42802.jpg?size=626&ext=jpg&ga=GA1.1.1704184701.1662977645&semt=ais_hybrid" className='hidden md:block rounded-3xl' />
                <img src="https://img.freepik.com/premium-vector/vector-teenagers-laughing-together-flat-design-style_995281-42802.jpg?size=626&ext=jpg&ga=GA1.1.1704184701.1662977645&semt=ais_hybrid" className='hidden md:block rounded-3xl mt-10' />
            </div>
        </div>
    </div>
  )
}

export default Client