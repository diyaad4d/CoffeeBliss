import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { motion } from 'framer-motion';
import {useCart} from '../../context/CartContext.jsx';

const NavMenu = [
    {
        id: 1,
        title: "Home",
        link: "#"
    },
    {
        id: 2,
        title: "Menu",
        link: "#menu"
    },
    {
        id: 3,
        title: "Best Seller",
        link: "#best_seller"
    },
    {
        id: 4,
        title: "About Us",
        link: "#footer"
    }
];

const Navbar = ({ isSidebar, setIsSidebar}) => {

    const {cart} = useCart();
    return (
        <nav className="absolute top-0 left-0 w-full pt-10 z-40 py-10">
            <div className="container">
                <div className="flex justify-between items-center">
                    {/* Brand Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
                        className="text-2xl font-semibold text-[#f1dabf]"
                    >
                        COFFEE <span className="text-[#FFC107]">BLISS</span>
                    </motion.h1>

                    {/* Nav Menu + Cart Icon */}
                    <div className="hidden md:flex items-center gap-10">
                        <ul className="flex gap-4">
                            {NavMenu.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={item.link}

                                        className="inline-block px-6 py-2 text-[#f1dabf] uppercase hover:bg-[#e6ac00]/80 hover:text-white duration-200 rounded-md hover:shadow-[0_0_20px_4px_rgba(230,172,0,0.4)]"
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Cart Icon */}
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
                        >
                            <a href="/cart" className="relative">
                                <AiOutlineShoppingCart className="text-4xl text-[#FFC107] hover:text-[#FFC107] transition duration-200" />
                                <span className="absolute -top-2 -right-2 bg-[#f1dabf] text-black text-xs font-bold px-2 py-0.5 rounded-full">
                                    {cart.length}
                                </span>
                            </a>
                        </motion.div>
                    </div>

                    {/* Hamburger */}
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
                        onClick={() => setIsSidebar(!isSidebar)}
                    >
                        <GiHamburgerMenu className="text-3xl cursor-pointer mr-8 text-[#f1dabf]" />
                    </motion.div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
