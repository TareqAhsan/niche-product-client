import React from 'react';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import Keepintouch from '../Keepintouch/Keepintouch';
import OurBestsell from '../OurBestsell/OurBestsell';
import Products from '../Products/Products';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Banner/>
            <Products/>
            <CustomerReview/>
            <OurBestsell/>
            <Keepintouch/>
            <Footer/>
        </div>
    );
};

export default Home;