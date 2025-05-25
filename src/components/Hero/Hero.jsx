import React, {useState} from 'react';
import MainBg from '../../assets/bgImage.png';
import coffeeEspresso from '../../assets/coffeeEspressoSteam.png';
import Navbar from '../Navbar/Navbar.jsx';
import {motion} from 'framer-motion';
import breakfast from '../../assets/breakfast.jpg';
import coffee from '../../assets/coffee.jpg';
import desserts from '../../assets/dessert.jpg';



const mainBg={
    backgroundImage: `url(${MainBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition:'center',
}

const Hero = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [isSidebar,setIsSidebar]=useState(false);

    return  <main style={mainBg}>
        <section className=" relative min-h-[750px] w-full">
            <div className="container">
                {/* Navbar section */}
                <Navbar  isSidebar={isSidebar} setIsSidebar={setIsSidebar} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                {/* Hero section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
                    {/* First column - Text content */}
                    <div className="text-[#f1dabf] mt-[100px] md:mt-0 p-4 space-y-28 ">
                        <motion.h1  initial={{ opacity: 0, y: -100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
                                    className="text-8xl font-bold leading-tight ml-14">
                            Coffee Bliss
                        </motion.h1>
                        <motion.div initial={{opacity: 0, y: 100}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{type: "spring", stiffness: 100, damping: 10, delay: 1.3}}
                                    className="relative">
                            <div className="relative z-10 space-y-4 ">
                                <h1 className="text-2xl">Where coffee meets pure joy.</h1>
                            </div>
                            <div
                                className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[80px] bg-[#e6ac00] opacity-25 blur-2xl rounded-full">
                            </div>
                        </motion.div>
                    </div>

                    {/* Second column- i think adding  yellow circles  */}
                    {/* Second column - Bliss Menu circle and animation */}
                    <div className="relative flex justify-start right-[270px] bottom-[10px]">
                        <motion.div
                            onClick={() => setMenuOpen(!menuOpen)}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.5 }}
                            className="w-[180px] h-[180px] rounded-full border-4 border-[#ffcc00] flex items-center justify-center cursor-pointer text-[#ffcc00] font-bold text-xl bg-transparent shadow-lg"
                        >
                            Bliss Menu
                        </motion.div>

                        {menuOpen && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0, y: 0 }}
                                    whileInView={{ opacity: 1, y: -140 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ type: 'spring', stiffness: 160, damping: 14, delay: 0.1 }}
                                    className="absolute w-[140px] h-[140px] rounded-full border-4 border-[#ffcc00] bg-[#1e2329] flex items-center justify-center bottom-5 left-52 -translate-x-1/2"
                                >
                                    <img src={coffee} title="Coffee" className="w-full h-full object-cover rounded-full" />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 0 }}
                                    animate={{ opacity: 1, x: -160 }}
                                    transition={{ type: 'spring', stiffness: 160, damping: 14, delay: 0.2 }}
                                    className="absolute w-[140px] h-[140px] rounded-full border-4 border-[#ffcc00] bg-[#1e2329] flex items-center justify-center  top-40 left-75 "
                                >
                                    <img src={desserts} title="desserts" className="w-full h-full object-cover rounded-full" />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 0 }}
                                    animate={{ opacity: 1, x: 160 }}
                                    transition={{ type: 'spring', stiffness: 160, damping: 14, delay: 0.3 }}
                                    className="absolute right-0 w-[140px] h-[140px] rounded-full border-4 border-[#ffcc00] bg-[#1e2329] flex items-center justify-center left-15 bottom-5"
                                >
                                    <img src={breakfast} title="breakfast" className="w-full h-full object-cover rounded-full" />
                                </motion.div>
                            </>
                        )}
                    </div>




                    {/* Third column - Image + Big text */}
                    <div className="relative">
                        <motion.img initial={{opacity: 0, scale: 0}}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{type: "spring", stiffness: 100, damping: 10, delay: 0.4}}
                                    src={coffeeEspresso}
                                    alt=""
                                    className="relative z-40 h-[300px] md:h-[600px] img-shadow right-[15px]"
                        />
                        {/* Big text Coffee Bliss */}
                        <motion.div initial={{opacity: 0, x: -100}}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{type: "spring", stiffness: 100, damping: 10, delay: 0.8}}
                                    className="absolute -top-0 left-[0px] z-[1]">
                            <h1 className="text-[140px] scale-150 font-bold text-[#1a1f25]/40 leading-none">
                                Coffee Bliss
                            </h1>
                        </motion.div>
                    </div>
                </div>
            </div>
            {/* sidebar section */}
            {
                isSidebar && (
                    <motion.div
                        initial={{opacity: 0, x: 100}}
                        animate={{opacity: 1, x: 1}}
                        className="absolute top-0 right-0 w-[150px] h-full
                    bg-gradient-to-b from-[#FFC107]/80 to-[#e6ac00]/80 backdrop-blur-sm z-10"
                    >
                        {/* Changed items-center to items-start and added pt-8 for top padding */}
                        <div className="w-full h-full flex justify-center items-start pt-25">
                            <div className="flex flex-col justify-start items-center gap-4 text-white w-full px-2 mt-8">
                                {/* line - shortened since we're higher up */}
                                <div className="w-[1px] h-[30px] bg-white"></div>

                                {/* items - all same size */}
                                <div className="w-full py-3 rounded-full cursor-pointer border border-white flex justify-center">
                                    <h1 className="text-xl font-bold uppercase">Coffee</h1>
                                </div>

                                <div className="w-full py-3 rounded-full cursor-pointer border border-white flex justify-center">
                                    <h1 className="text-xl font-bold uppercase">Desserts</h1>
                                </div>

                                <div className="w-full py-3 rounded-full cursor-pointer border border-white flex justify-center">
                                    <h1 className="text-xl font-bold uppercase">Breakfast</h1>
                                </div>

                                <div className="w-full py-3 rounded-full cursor-pointer border border-white flex justify-center">
                                    <h1 className="text-xl font-bold uppercase">Gelato</h1>
                                </div>

                                <div className="w-full py-3 rounded-full cursor-pointer border border-white flex justify-center">
                                    <h1 className="text-xl font-bold uppercase">Contact</h1>
                                </div>

                                {/* line - shortened */}
                                <div className="w-[1px] h-[30px] bg-white"></div>
                            </div>
                        </div>
                    </motion.div>
                )
            }
        </section>
    </main>
}

export default Hero;