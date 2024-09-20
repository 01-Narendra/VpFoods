import React from 'react';

const ProductCard = ({ image, name, price }) => {
    return (
        <div className="flex justify-center items-center p-4">
            <div className="cursor-pointer relative p-4 w-64 h-64 rounded-full water-effect shadow-lg hover:shadow-gray-500 hover:shadow-xl transform hover:scale-105 transition-transform duration-300 overflow-hidden">
                {/* Image */}
                <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-full"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center">
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-lg mt-2">${price}</p>
                </div>
            </div>
            </div>
    );
};

export default ProductCard;
