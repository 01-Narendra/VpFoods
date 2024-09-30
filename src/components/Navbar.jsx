import React, { useState } from 'react';
import logo from '../assets/logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-t from-[#16a085] to-[#f4d037] md:p-2 p-3">
            <div className="flex justify-between items-center">
                {/* Left items */}
                <div className="ml-40 hidden sm:flex space-x-40">
                    <a href="#" className="text-white text-[30px] font-bold hover:text-orange-600 transition-all duration-400 font-khand"
                    style={{ filter: 'drop-shadow(0px 10px 10px black)' }}>Home</a>
                    <a href="#about" className="text-white text-[30px] font-bold hover:text-orange-600 transition-all duration-400 font-khand"
                    style={{ filter: 'drop-shadow(0px 10px 10px black)' }}>About</a>
                </div>

                <img className='h-[130px] w-[130px] rounded-full cursor-pointer filter hidden md:block spin-slow' 
                style={{ filter: 'drop-shadow(0px 0px 20px white)' }}
                src={logo} alt="" />
                <h1 style={{ textShadow: '0px 0px 20px white' }} className='lg:hidden text-white text-2xl font-bold font-alex'>Grandma Treat</h1>

                {/* Right items */}
                <div className="mr-40 hidden sm:flex space-x-40">
                    <a href="#menu" className="text-white text-[30px] font-bold hover:text-orange-600 transition-all duration-400 font-khand"
                    style={{ filter: 'drop-shadow(0px 10px 10px black)' }}>Menu</a>
                    <a href="#contact" className="text-white text-[30px] font-bold hover:text-orange-600 transition-all duration-400 font-khand"
                    style={{ filter: 'drop-shadow(0px 10px 10px black)' }}>Contact</a>
                </div>
                

                {/* Mobile menu button */}
                <div className="flex sm:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="text-white"
                    >
                        {
                            isOpen ?
                            <p>❌</p> :
                            <svg
                            className="w-5 h-5"
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
                        }
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
                        style={{ filter: 'drop-shadow(10px 10px 20px white)' }}
                        src={logo} alt="" />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
