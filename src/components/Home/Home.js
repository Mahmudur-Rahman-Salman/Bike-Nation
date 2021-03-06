import React from 'react';
import About from '../About/About';
import Accessories from '../Accessories/Accessories';
import Banner from '../Banner/Banner'
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Accessories></Accessories>
            <Services></Services>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;