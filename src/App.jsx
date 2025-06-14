import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero.jsx';
import BestSeller from './components/BestSeller/BestSeller.jsx';
import Menu from './components/Menu/Menu.jsx';
import Footer from './components/Footer/Footer.jsx';
import CaffeineCorner from './pages/CaffeineCorner';
import BreakfastCorner from './pages/BreakfastCorner';
import DessertCorner from './pages/DessertCorner';
import ScrollToTop from './components/ScrollToTop';
import Cart from './pages/Cart.jsx';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="overflow-x-hidden">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Hero />
                                <BestSeller />
                                <Menu />
                                <Footer />
                            </>
                        }
                    />
                    <Route path="/caffeine" element={<CaffeineCorner />} />
                    <Route path="/breakfast" element={<BreakfastCorner />} />
                    <Route path="/dessert" element={<DessertCorner />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
