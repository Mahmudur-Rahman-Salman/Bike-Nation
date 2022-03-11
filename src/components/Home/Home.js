import React from 'react';
import About from '../About/About';
import Accessories from '../Accessories/Accessories';
import Banner from '../Banner/Banner'
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Accessories></Accessories>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;