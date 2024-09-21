import React from 'react';

const Contact = () => {
    return (
        <div id='contact'>
            <p className='filter text-center font-bold md:text-7xl text-3xl text-white font-khand md:mb-5 md:mt-14 mt-5'
            style={{ filter: 'drop-shadow(0px 10px 10px black)' }}>Contact Us</p>
        <div className="flex flex-wrap justify-around items-center py-12 px-4">
            <div className='font-alex text-white md:text-6xl text-4xl text-wrap md:w-[30%] w-[70%]'>Contact Me When you want to taste something delecious</div>
            <div className="max-w-lg w-full p-8 rounded-lg shadow-xl shadow-[#8697c4]">

                <form>
                    {/* Name Field */}
                    <div className="mb-4">
                        <label className="block font-khand text-white text-xl font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="bg-rose-100 w-full font-sevillana px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                            placeholder="Your Name"
                        />
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                        <label className="block font-khand text-white text-xl font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="bg-rose-100 w-full font-sevillana px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                            placeholder="Your Email"
                        />
                    </div>

                    {/* Message Field */}
                    <div className="mb-4">
                        <label className="block text-white font-khand text-xl font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            className="bg-red-100 w-full font-sevillana px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                            placeholder="Your Message"
                            rows="5"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="font-khand text-xl w-full px-4 py-2 bg-rose-500 text-white font-bold rounded-lg hover:bg-rose-200 hover:text-rose-500 transition-colors duration-500"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Contact;
