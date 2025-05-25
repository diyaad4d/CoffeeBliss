import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {motion} from 'framer-motion';

const NavMenu = [
    {
        id:1,
        title: "Home",
        link:"#"
    },
    {
        id:2,
        title: "Menu",
        link:"#"
    },
    {
        id:3,
        title: "Best Seller",
        link:"#best_seller"
    },
    {
        id:4,
        title: "About Us",
        link:"#"
    },
]


const Navbar = ({isSidebar,setIsSidebar,menuOpen,setMenuOpen}) => {
    return <nav className="absolute top-0 left-0 w-full pt-10 z-40 py-10">
        <div className="container">
            <div className="flex justify-between items-center">
                {/* Brand Name */}
                <motion.h1 initial={{opacity:0,y:-100}}
                           animate={{opacity:1,y:0}}
                           transition={{type:"spring",stiffness:100,damping:10,delay:0.2}}
                    className="text-2xl font-semibold text-[#f1dabf]">
                    COFFEE <span className="text-[#FFC107]">BLISS</span>
                </motion.h1>
                {/* Nav Menu Section */}
                <div className="hidden md:block">
                    <ul className="flex gap-4">
                        {
                            NavMenu.map((item)=>
                            <li key={item.id}>
                                <a href={item.link} onClick={ ()=>{if(item.title=="Menu") setMenuOpen(!menuOpen); }  }
                                   className="inline-block px-6 py-2 text-[#f1dabf]
                                  uppercase hover:bg-[#e6ac00]/80 hover:text-white duration-200
                                  rounded-md hover:shadow-[0_0_20px_4px_rgba(230,172,0,0.4)]">
                                    {item.title}
                                </a>
                            </li>
                            )
                        }
                    </ul>
                </div>
                {/* Humburger Menu */}
                <motion.div initial={{opacity:0,y:-100}}
                            animate={{opacity:1,y:0}}
                            transition={{type:"spring",stiffness:100,damping:10,delay:0.2}}
                onClick={()=>setIsSidebar(!isSidebar)}>
                    <GiHamburgerMenu className="text-3xl cursor-pointer mr-8 text-[#f1dabf]" />
                </motion.div>
            </div>
        </div>
    </nav>
}

export default Navbar;