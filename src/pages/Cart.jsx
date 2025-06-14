import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart, addToCart, removeFromCart, decreaseQ } = useCart();
    const [orderType, setOrderType] = useState('takeaway');
    const navigate = useNavigate();

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <section className="bg-[#fff8ee] min-h-screen py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-[#1a1f25]">🛒 Your Cart</h1>
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-[#1a1f25] text-white px-5 py-2 rounded-full hover:bg-[#e6ac00] duration-300"
                    >
                        ← Continue Shopping
                    </button>
                </div>
                { /* if Cart empty or Else : */}
                {cart.length === 0 ? (
                    <div className="text-center mt-20">
                        <h1 className="text-gray-900 text-4xl py-10">Your cart is empty </h1>
                        <p className="text-[#1a1f25] text-3xl mb-6">Looks like you haven’t picked your bliss yet!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-6">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white shadow-md p-4 rounded-xl flex items-center gap-4"
                                >
                                    <img src={item.img} alt={item.title} className="w-24 h-24 object-cover rounded" />
                                    <div className="flex-1">
                                        <h2 className="text-xl font-bold">{item.title}</h2>
                                        <p className="text-gray-600 text-sm">${item.price.toFixed(2)} each</p>
                                        <div className="mt-2 flex items-center gap-2">
                                            <button
                                                onClick={() => decreaseQ(item.id)}
                                                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                                            >
                                                <FaMinus />
                                            </button>
                                            <span className="text-lg font-semibold">{item.quantity}</span>
                                            <button
                                                onClick={() => addToCart({ ...item, quantity: 1 })}
                                                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                                            >
                                                <FaPlus />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[#272c35]  font-bold text-2xl">
                                            ${(item.quantity * item.price).toFixed(2)}
                                        </p>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 mt-2 hover:text-red-700 text-2xl"
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Summary & Order Option */}
                        <div className="bg-white shadow-md p-6 rounded-xl space-y-6">
                            <h2 className="text-3xl font-bold">Summary</h2>

                            <div>
                                <label className="font-bold block mb-4 text-[#1a1f25] text-lg mt-20">
                                    Choose how you'll enjoy it:
                                </label>

                                <div className="flex w-full max-w-[400px] mx-auto bg-white border-2 border-[#FFC107] rounded-full p-1 shadow-sm mb-20">
                                    {['cafe', 'takeaway'].map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => setOrderType(type)}
                                            className={`w-1/2 px-4 py-2 rounded-full text-lg font-bold transition-all duration-300 
                                            ${
                                                orderType === type
                                                    ? 'bg-[#FFC107] text-white shadow-md '
                                                    : 'text-[#1a1f25] hover:cursor-pointer'
                                            }`}
                                        >
                                            {type === 'cafe' ? '🪑 In Café' : '🥡 Takeaway'}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="text-3xl font-bold">
                               <span className="text-[#FFC107]">Total:</span>  <span className="text-[#272c35] ">${total.toFixed(2)}</span>
                            </div>

                            <button
                                onClick={() => alert(`Order placed for ${orderType}`)}
                                className=" text-xl bg-[#FFC107] w-full py-2 rounded-full text-white font-bold hover:bg-[#e6ac00] transition hover:cursor-pointer"
                            >
                                 Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Cart;
