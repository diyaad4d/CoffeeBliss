import React from 'react';
import {motion, spring} from 'framer-motion';
import iceAmericano from '../../assets/iceAmricano.png';
import iceLatte from '../../assets/iceLatte.png';
import Macaron from '../../assets/macarons.png';

const bestSellerItems=[
    {
        id:1,
        image:iceAmericano,
        titile:"Ice Amricano",
    },
    {
        id:2,
        image:iceLatte,
        titile:"Ice Latte",
    },
    {
        id:3,
        image:Macaron,
        titile:"Macaron",
    }
];


const BestSeller = () =>{
    return <section className="container my-16 space-y-4 " id='best_seller' >
        {/* head best seller and p */}
        <div className="text-center max-w-lg mx-auto space-y-2 ">
            <motion.h1 initial={{opacity: 0,y:100}}
                       whileInView={{opacity:1,y:0}}
                       transition={{type:spring, stiffness:150, damping:10,delay:0.2}}
                       className="text-5xl md:text-6xl font-extrabold text-[#3E2C1C] tracking-tight mb-4 font-[Cinzel]">
                Best Seller
            </motion.h1>
            <motion.p initial={{opacity: 0,scale:0.5}}
                      whileInView={{opacity:1,scale:1}}
                      transition={{type:spring, stiffness:150, damping:10,delay:0.6}}>
                Discover our <span className="text-[#e6ac00] font-semibold">most-loved</span> items,
                <span className="text-[#e6ac00] font-semibold">carefully selected</span> by our
                <span className="text-[#e6ac00] font-semibold">customers</span>.
            </motion.p>
        </div>
        {/* items */}
        <motion.div variants={{hidden:{opacity:1},
            visible:{opacity:1,
                transition:{delay:0.6,staggerChildren:0.4}
            }}}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{amount:0.8}}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {
                bestSellerItems.map((item)=>(
                    <motion.div
                        variants={{
                            hidden:{opacity:0,y:20},
                            visible:{opacity:1,y:0,
                                transition:{
                                    type:"spring",
                                    stiffness:150,
                                    damping:10,
                                    easing:"easeInOut",
                                }
                            },
                        }}
                        className="text-center p-4 space-y-6"
                        key={item.id}
                    >
                        {/* Fixed height container for images */}
                        <div className="h-[270px] flex items-center justify-center">
                            <img
                                src={item.image}
                                alt={item.titile}
                                className="img-shadow2 max-w-[200px] max-h-[270px] object-contain mx-auto hover:scale-110 duration-300 cursor-pointer"
                            />
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-2xl font-bold text-[#272c35]">{item.titile}</h1>
                        </div>
                    </motion.div>
                ))
            }
        </motion.div>
    </section>
}

export default BestSeller;