import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Header = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: false,
                },
            },
        ],
    };

    const images = [
        'https://images.unsplash.com/photo-1464454709131-ffd692591ee5?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://www.foodiesfeed.com/wp-content/uploads/2023/09/healthy-food.jpg',
        'https://www.foodiesfeed.com/wp-content/uploads/2023/05/exotic-spices.jpg'
    ];

    return (
        <div className="relative w-full overflow-x-hidden">
            <Slider {...settings} className="h-auto">
                {images.map((src, index) => (
                    <div key={index}>
                        <p className='font-alex md:text-9xl text-white absolute md:ml-[5%] md:mt-[2%] ml-[2%] mt-[4%] text-6xl'>cook and enjoy</p>
                        <img
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className="w-full max-h-[38rem] object-cover"
                        />
                    </div>
                ))}
            </Slider>
            
            <div id='about' className="px-4 py-8 md:px-8 lg:px-16 text-gray-800">
                <p className="text-[30px] md:text-7xl md:mb-14 md:mt-10 font-bold mb-4 text-center font-sevillana text-white">About Us</p>
                <p className='md:text-3xl font-khand text-white'>
                    At StreetEats, we celebrate the vibrant and diverse world of street food. Our mission is to bring you the most
                    delicious and authentic street food experiences from around the world, right to your local streets. Whether
                    you're craving spicy tacos, savory samosas, or sweet churros, we've got something to satisfy every palate.
                    Join us on a culinary journey and explore the rich flavors, unique traditions, and passionate vendors that make
                    street food a true cultural treasure. Discover your new favorite dish today at StreetEats!
                </p>
                <p className='md:text-3xl md:mt-10 mt-3 font-khand text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, mollitia.</p>
                <p className='md:text-3xl md:mt-10 mt-3 font-khand text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, mollitia.</p>
            </div>
            
        </div>
    );
};

export default Header;
