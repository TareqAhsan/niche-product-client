import React from 'react';
import Footer from '../../Home/Shared/Footer/Footer';
import Navigation from '../../Home/Shared/Navigation/Navigation';
import Exploremore from '../Exploremore';

const ExploreHome = () => {
    return (
        <div>
            <Navigation/>
            <Exploremore/>
            <Footer/>
        </div>
    );
};

export default ExploreHome;