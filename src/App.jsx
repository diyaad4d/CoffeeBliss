import React from 'react';
import Hero from './components/Hero/Hero.jsx';
import BestSeller from './components/BestSeller/BestSeller.jsx';
import Menu from './components/Menu/Menu.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
    return (
        <div className="overflow-x-hidden">

            <Hero />
            <BestSeller />
            <Menu />
            <Footer />

        </div>
    );
}

export default App;
