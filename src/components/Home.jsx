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
        'https://www.foodiesfeed.com/wp-content/uploads/2023/05/exotic-spices.jpg',
        'https://img.freepik.com/premium-photo/black-pasta-with-vegetables-black-plate-top-view-black-background-free-copy-space_187166-60568.jpg?size=626&ext=jpg&ga=GA1.1.1704184701.1662977645&semt=ais_hybrid',
        'https://images.unsplash.com/photo-1464454709131-ffd692591ee5?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
                <b className='text-rose-500'>At Grandma'a Treat</b>, we bring the authentic flavors of India’s bustling streets to your plate. Whether you’re craving the crispiness of a freshly made samosa or the spicy kick of a flavorful pakora our selection is crafted with the finest ingredients and traditional recipes that have been passed down through generations.
                </p>
                <p className='md:text-3xl md:mt-10 mt-3 font-khand text-rose-500 font-bold'>Freshly Made with Love</p>
                <p className='md:text-3xl md:mt-10 mt-3 font-khand text-white'>            
                    <p>Every dish is prepared fresh to ensure the perfect blend of taste and quality. From the golden-brown parathas stuffed with delicious fillings to the tangy and savory aloo tikki chaat, our food is made with the same care and attention as you'd find at the best street vendors in India.</p>
                </p>
                <p className='md:text-3xl md:mt-10 mt-3 font-khand text-rose-500 font-bold'>A Taste of Tradition</p>
                <p className='md:text-3xl md:mt-10 mt-3 font-khand text-white'>Indulge in a menu that celebrates India’s rich culinary heritage. Our street food staples like parathas, samosas, and pakoras offer a true taste of tradition, bringing together bold flavors, spices, and textures that will keep you coming back for more.</p>
            </div>
            
        </div>
    );
};

export default Header;
