import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useCart } from '../context/CartContext';
import sandwich1 from '../assets/breakfast2.png';
import sandwich2 from '../assets/breakfast.jpg';
import pancake from '../assets/pancake.png';

const breakfastItems = [
    {
        id: 201,
        img: sandwich1,
        title: 'Butter Croissant',
        description: 'A golden, flaky French croissant with a buttery aroma and light.',
        price: 4.5
    },
    {
        id: 202,
        img: sandwich2,
        title: 'Turkey & Cheese Croissant',
        description: 'A warm, toasted croissant filled with tender turkey slices and melted cheese.',
        price: 6.5
    },
    {
        id: 203,
        img: pancake,
        title: 'Pancakes',
        description: 'Pancakes With Butter And Syrup.',
        price: 5.0
    },

];

const BreakfastCorner = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const {cart} = useCart();

    return (
        <section className="bg-[#fff8ee] min-h-screen">
            <div className="container">
                {/* Top Section with Back Button + Cart Icon */}
                <div className="pt-10 px-4 flex justify-between items-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-[#1a1f25] text-white px-6 py-2 rounded-full hover:bg-[#e6ac00] duration-300"
                    >
                        ← Back to Menu
                    </button>
                    <a href="/cart" className="relative right-20">
                        <AiOutlineShoppingCart className="text-5xl text-[#1a1f25] hover:text-[#e6ac00] duration-200" />
                        <span className="absolute -top-2 -right-2 bg-[#FFC107] text-black text-xs font-bold px-2 py-0.5 rounded-full">
                                    {cart.length}
                         </span>
                    </a>
                </div>

                {/* Header */}
                <div className="text-center px-4 py-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-[#1a1f25] font-[Cinzel]">Breakfast Corner</h1>
                    <p className="text-xl text-[#e6ac00] max-w-2xl mx-auto font-[Quicksand] leading-relaxed">
                        Start your day golden —  fresh, and full of flavor.
                    </p>
                </div>

                {/* Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                    {breakfastItems.map((item) => (
                        <div
                            key={item.id}
                            className="rounded-2xl bg-white hover:bg-[#2f2f2f] hover:text-white shadow-xl duration-300 group max-w-[300px] p-4 mt-20"
                        >
                            <div className="h-[100px]">
                                <img
                                    src={item.img}
                                    className="max-w-[140px] mx-auto -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                                    alt={item.title}
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h1 className="text-xl font-bold">{item.title}</h1>
                                <p className="text-gray-600 group-hover:text-white duration-300">{item.description}</p>
                                <p className="mt-2 text-lg text-[#e6ac00] font-semibold">${item.price.toFixed(2)}</p>
                                <button
                                    onClick={() => addToCart({ ...item, quantity: 1 })}
                                    className="bg-[#FFC107] font-bold text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-[#FFC107] duration-300 hover:cursor-pointer"
                                >
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BreakfastCorner;
