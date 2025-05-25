import React from 'react';
import Coffee from '../../assets/iceLatte.png';
import Breakfast from '../../assets/breakfast2.png';
import Dessert from '../../assets/dessert2.png';
import {FaStar} from 'react-icons/fa';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



const MenuData=[
    {
      id:1,
      img:Breakfast,
      title:"Breakfast Corner",
      description: "Start your day sunny-side up with our hearty morning plates.",
      buttonTitle:"Start Fresh"
    },
    {
        id:2,
        img:Coffee,
        title: "Caffeine Corner",
        description:"Brewed to perfection — every sip is a hug in a mug",
        buttonTitle:"Sip Now"
    },
    {
        id:3,
        img:Dessert,
        title:"Dessert & Gelato Corner",
        description: "Where sweetness meets delight — one bite at a time.",
        buttonTitle: "Sweeten Me"
    }
];


const Menu=()=>{

    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 100,
            once: false
        });
    }, []);
    return <section>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
             gap-20 md:gap-5 place-items-center">
                {MenuData.map((item) => (
                    <div data-aos="zoom-in" className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80
                    hover:text-white relative shadow-xl duration-300 group max-w-[300px] p-4 dark:bg-white">
                        {/* image */}
                        <div className="h-[100px]">
                            <img src={item.img}
                            className="max-w-[140px] block mx-auto transform -translate-y-20
                            group-hover:scale-105 duration-300 drop-shadow-md"
                            />
                        </div>
                        {/* title */}
                        <div className="p-4 text-center">
                            <h1 className="text-xl font-bold">{item.title}</h1>
                           <p className="text-gray-500 group-hover:text-white duration-300
                           line-clamp-2">
                               {item.description}
                           </p>
                           <button className="bg-[#FFC107] hover:scale-105
                           duration-300 text-white py-1 px-4 rounded-full
                           mt-4 group-hover:bg-white group-hover:text-[#FFC107]">
                               {item.buttonTitle}
                           </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}


export default Menu;