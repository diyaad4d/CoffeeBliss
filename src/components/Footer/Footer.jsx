import React from 'react';
import { FaInstagram, FaLinkedin, FaCcVisa, FaCcMastercard, FaPaypal } from 'react-icons/fa';

const Footer = () => {
    return (
        <section>
            <footer className="bg-[#FFC107] text-[#1a1f25] py-16 mt-20 text-xl">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

                    {/* About Us */}
                    <div className="flex flex-col justify-center h-full relative left-25">
                        <h2 className="text-3xl font-bold mb-4">Coffee Bliss</h2>
                        <p className="text-[#272c35] leading-relaxed max-w-md">
                            I am Diyaa Daifi and I have built this E-commerce Cafe Store to hone my skills as a developer.
                            At Coffee Bliss, we believe every cup tells a story -
                            we craft more than coffee — we craft moments.
                        </p>
                        <p>#diyaa-d4d</p>
                    </div>

                    {/* Contact + Payment */}
                    <div className="space-y-10 relative left-25">
                        {/* Contact Us */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                            <div className="flex space-x-6 text-4xl">
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                                    <FaInstagram />
                                </a>
                                <a href="https://www.linkedin.com/in/diyaa-daifi/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>

                        {/* Payment Methods */}
                        <div>
                            <h3 className="text-3xl font-semibold mb-2">Payment Methods</h3>
                            <div className="flex space-x-4 text-4xl">
                                <FaCcVisa />
                                <FaCcMastercard />
                                <FaPaypal />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-10 border-t border-[#e0b400] pt-6 text-[#272c35]">
                    © {new Date().getFullYear()} Coffee Bliss. <br></br>
                    By: Diyaa Daifi (d4d).
                </div>
            </footer>
        </section>
    );
};

export default Footer;
