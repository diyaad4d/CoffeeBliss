import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useCart } from '../context/CartContext';
import coffee1 from '../assets/iceLatte.png';
import coffee2 from '../assets/coffeeEspressoSteam.png';
import coffee3 from '../assets/iceAmricano.png';
import coffee4 from '../assets/coffee.jpg';
import coffee5 from '../assets/turckyCoffee.png';
import coffee6 from '../assets/coffee beans.png';

const caffeineItems = [
    {
        id: 101,
        img: coffee1,
        title: 'Ice Vanilla Latte',
        description: 'Chilled espresso with creamy vanilla and silky milk.',
        price: 4.5
    },
    {
        id: 102,
        img: coffee2,
        title: 'Espresso',
        description: 'Strong, bold, and beautifully intense.',
        price: 3.0
    },
    {
        id: 103,
        img: coffee3,
        title: 'Ice Americano',
        description: 'Espresso poured over ice — crisp and refreshing.',
        price: 4.0
    },
    {
        id: 104,
        img: coffee4,
        title: 'Latte',
        description: 'Smooth espresso with perfectly steamed milk.',
        price: 4.2
    },
    {
        id: 105,
        img: coffee5,
        title: 'Turkish coffee',
        description: 'Rich, aromatic, and deeply traditional.',
        price: 3.8
    },
    {
        id: 106,
        img: coffee6,
        title: 'Coffee beans',
        description: 'Freshly roasted for the perfect home brew.',
        price: 6.5
    },
];

const CaffeineCorner = () => {
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
                    <h1 className="text-5xl md:text-6xl font-extrabold text-[#1a1f25] font-[Cinzel]">Caffeine Corner</h1>
                    <p className="text-xl text-[#e6ac00] max-w-2xl mx-auto font-[Quicksand] leading-relaxed">
                        Sip into bliss — brewed fresh, served bold.
                    </p>
                </div>

                {/* Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                    {caffeineItems.map((item) => (
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

export default CaffeineCorner;
