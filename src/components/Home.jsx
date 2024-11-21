import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/c1.jpg'
import image2 from '../assets/c2.avif'
import image3 from '../assets/c3.avif'

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
        image1,
        image2,
        image3
    ];

    return (
        <div className="relative w-full overflow-x-hidden">
            <Slider {...settings} className="h-auto">
                {images.map((src, index) => (
                    <div key={index}>
                        <p className='font-alex md:text-9xl text-white absolute md:ml-[4%] md:mt-[2%] ml-[1%] mt-[4%] text-5xl'>taste the experience</p>
                        <img
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className="w-full max-h-[38rem] object-cover"
                        />
                    </div>
                ))}
            </Slider>
            
            <div id='about' className="px-4 py-8 md:px-8 lg:px-16 text-gray-800">
                <p className="filter text-[30px] md:text-7xl md:mb-14 md:mt-10 font-bold mb-4 text-center font-sevillana text-white"
                style={{ filter: 'drop-shadow(0px 10px 10px black)' }}>About Us</p>
                <p className='md:text-3xl font-khand text-white'>
                <b className='text-rose-500'>At Grandma'a Treat</b>, we bring the authentic flavors of India’s bustling streets to your plate. Whenever you’re craving of freshly made parathas, our selection is crafted with the finest ingredients and traditional recipes that have been passed down through generations.
                </p>
                <p className='md:text-3xl md:mt-10 mt-3 font-khand text-rose-500 font-bold'>Freshly Made with Love</p>
                <p className='md:text-3xl md:mt-10 mt-3 font-khand text-white'>            
                    <p>Every Paratha is prepared fresh to ensure the perfect blend of taste and quality. From the golden-brown parathas stuffed with delicious fillings to the tangy, our food is made with the same care and attention as you'd find at the best street vendors in India.</p>
                </p>
                <p className='md:text-3xl md:mt-10 mt-3 font-khand text-rose-500 font-bold'>A Taste of Tradition</p>
                <p className='md:text-3xl md:mt-10 mt-3 font-khand text-white'>Indulge in a menu that celebrates India’s rich culinary heritage. Our street food staples like parathas offer a true taste of tradition, bringing together bold flavors, spices, and textures that will keep you coming back for more.</p>
            </div>
            
        </div>
    );
};

export default Header;
