import React from 'react';

const ProductCard = ({ image, name, price }) => {
    return (
        <div className="h-[410px] shakeCard transition-all duration-300 hover:cursor-pointer rounded-3xl shadow-xl bg-white border border-x-gray-100 hover:shadow-2xl">
            {/* Product Image */}
            <img className="h-[300px] md:w-[350px] w-[300px] rounded-3xl flipCard shadow-xl m-2 object-cover" src={image} alt={name} />

            {/* Product Details */}
            <div className="px-6 py-4 md:mt-3">
                <div className="font-bold text-xl mb-2 text-gray-900 font-khand">{name}</div>
                <p className="text-gray-700 text-xl font-khand">&#8377; {price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
