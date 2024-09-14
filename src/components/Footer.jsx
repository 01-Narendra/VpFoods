import React from 'react';

const Footer = () => {

    const date = new Date()
    const curr_date = date.getFullYear()

    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-around">
                    {/* Company Information */}
                    <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
                        <h2 className="text-xl font-suse font-bold mb-4">Grandma Treat Co.</h2>
                        <p className="text-white font-suse">
                            We bring the best street food experience right to your doorstep.
                        </p>
                        <p className="text-white font-suse mt-4">
                            Created by 🔻 <p className='font-sevillana text-2xl cursor-pointer text-rose-200 mt-2'>Vaishali Pal ❤️</p>
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
                        <h2 className="text-xl font-bold font-suse mb-4">Quick Links</h2>
                        <ul className="text-white font-suse">
                            <li className="mb-2"><a href="#" className="text-gray-400 font-bold font-suse hover:text-white">Home</a></li>
                            <li className="mb-2"><a href="#about" className="text-gray-400 font-bold font-suse hover:text-white">About Us</a></li>
                            <li className="mb-2"><a href="#menu" className="text-gray-400 font-bold font-suse hover:text-white">Menu</a></li>
                            <li className="mb-2"><a href="#contact" className="text-gray-400 font-bold font-suse hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="w-full sm:w-1/3">
                        <h2 className="text-xl font-suse font-bold mb-4">Follow Us</h2>
                        <div className="flex flex-col space-y-2">
                            <a href="#" className="text-gray-400 font-bold font-suse hover:text-white">
                                <p>Facebook</p>
                            </a>
                            <a href="#" className="text-gray-400 font-bold font-suse hover:text-white">
                                <p>Twitter</p>
                            </a>
                            <a href="#" className="text-gray-400 font-bold font-suse hover:text-white">
                                <p>Instagram</p>
                            </a>
                            <a href="#" className="text-gray-400 font-bold font-suse hover:text-white">
                                <p>Youtube</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center font-khand text-lg'>{`©${curr_date} Grandma Treat Co. All rights reserved.`}</p>
        </footer>
    );
};

export default Footer;
