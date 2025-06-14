import React, { useEffect } from 'react';
import Coffee from '../../assets/iceLatte.png';
import Breakfast from '../../assets/breakfast2.png';
import Dessert from '../../assets/dessert2.png';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MenuData = [
    {
        id: 1,
        img: Breakfast,
        title: 'Breakfast Corner',
        description: 'Start your day sunny-side up with our hearty morning plates.',
        buttonTitle: 'Start Fresh',
        route: '/breakfast',
    },
    {
        id: 2,
        img: Coffee,
        title: 'Caffeine Corner',
        description: 'Brewed to perfection — every sip is a hug in a mug',
        buttonTitle: 'Sip Now',
        route: '/caffeine',
    },
    {
        id: 3,
        img: Dessert,
        title: 'Dessert & Gelato Corner',
        description: 'Where sweetness meets delight — one bite at a time.',
        buttonTitle: 'Sweeten Me',
        route: '/dessert',
    },
];

const Menu = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 100,
            once: false,
        });
    }, []);

    return (
        <section id="menu">
            <div className="container ">
                {/* Header */}
                <div className="text-center mb-24 px-4 mt-50">
                    <h1
                        data-aos="fade-up"
                        className="text-5xl md:text-6xl font-extrabold text-[#3E2C1C] tracking-tight mb-4 font-[Cinzel]"
                    >
                        Menu Bliss
                    </h1>
                    <p
                        data-aos="fade-up"
                        className="text-xlg md:text-xl text-[#5C4B3B] max-w-2xl mx-auto font-[Quicksand] leading-relaxed"
                    >
                        Bliss isn’t a feeling. It’s a flavor — and you’ll find it right here on the menu.
                    </p>
                </div>

                {/* Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                    {MenuData.map((item) => (
                        <Link
                            to={item.route}
                            key={item.id}
                            data-aos="zoom-in"
                            className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 hover:text-white relative shadow-xl duration-300 group max-w-[300px] p-4 dark:bg-white cursor-pointer"
                        >
                            {/* image */}
                            <div className="h-[100px]">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                                />
                            </div>

                            {/* title + description + button */}
                            <div className="p-4 text-center">
                                <h1 className="text-xl font-bold">{item.title}</h1>
                                <p className="text-gray-500 group-hover:text-white duration-300 line-clamp-2">
                                    {item.description}
                                </p>
                                <div className="bg-[#FFC107] font-bold hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-[#FFC107] inline-block">
                                    {item.buttonTitle}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;
