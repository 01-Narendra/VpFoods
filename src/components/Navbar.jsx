import React, { useState } from 'react';
import client from '../assets/client.jpeg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#320348] p-8">
            <div className="flex justify-between items-center">
                {/* Left items */}
                <div className="ml-40 hidden sm:flex space-x-40">
                    <a href="#" className="text-white text-[30px] font-bold hover:text-orange-600 transition-all duration-400 font-khand">Home</a>
                    <a href="#about" className="text-white text-[30px] font-bold hover:text-orange-600 transition-all duration-400 font-khand">About</a>
                </div>

                <img className='h-[100px] w-[100px] rounded-full cursor-pointer filter hidden md:block spin-slow' 
                style={{ filter: 'drop-shadow(0px 0px 15px white)' }}
                src={client} alt="" />
                <h1 style={{ textShadow: '0px 0px 20px white' }} className='lg:hidden text-white text-2xl font-bold font-alex'>Grandma Treat</h1>

                {/* Right items */}
                <div className="mr-40 hidden sm:flex space-x-40">
                    <a href="#menu" className="text-white text-[30px] font-bold hover:text-orange-600 transition-all duration-400 font-khand">Menu</a>
                    <a href="#contact" className="text-white text-[30px] font-bold hover:text-orange-600 transition-all duration-400 font-khand">Contact</a>
                </div>
                

                {/* Mobile menu button */}
                <div className="flex sm:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="text-white"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="sm:hidden mt-4 flex justify-between items-center">
                    <div className='space-y-1'>
                        <a onClick={() => setIsOpen(!isOpen)}  style={{ textShadow: '0px 0px 5px white' }}
                        href="#" className="block text-white font-suse">Home</a>
                        <a onClick={() => setIsOpen(!isOpen)} style={{ textShadow: '0px 0px 5px white' }}
                        href="#about" className="block text-white font-suse">About</a>
                        <a onClick={() => setIsOpen(!isOpen)} style={{ textShadow: '0px 0px 5px white' }}
                        href="#menu" className="block text-white font-suse">Menu</a>
                        <a onClick={() => setIsOpen(!isOpen)} style={{ textShadow: '0px 0px 5px white' }}
                        href="#contact" className="block text-white font-suse">Contact</a>
                    </div>
                    <div>
                        <img className='h-[120px] spin-slow w-[120px] rounded-full filter'
                        style={{ filter: 'drop-shadow(0px 0px 12px white)' }}
                        src={client} alt="" />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
