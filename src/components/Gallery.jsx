import React from 'react';
import image1 from '../assets/g1.jpeg'
import image2 from '../assets/g5.jpeg'
import image3 from '../assets/g3.jpeg'
import image4 from '../assets/g4.jpeg'



const Gallery = () => {
    const images = [
        image1,
        image2,
        image3,
        image4,
    ];

    return (
        <section className="">
            <div className="px-5">
            <p className='filter text-center font-bold md:text-7xl text-3xl text-white font-khand md:mb-10 md:mt-10 mb-10'
            style={{ filter: 'drop-shadow(0px 10px 10px black)' }}>Gallery</p>

                <div className="flex flex-wrap justify-center items-center gap-10 p-5">
                    {images.map((src, index) => (
                        <div key={index} className="overflow-hidden rounded-3xl shadow-2xl border-[5px] cursor-pointer shadow-[#BAB86C]">
                            <img width={300}
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                className="object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
