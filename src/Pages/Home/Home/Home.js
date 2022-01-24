import React from 'react';
import Category from '../Category/Category';
import DiscountProducts from '../DiscountProducts/DiscountProducts/DiscountProducts';
import Header from '../Header/Header/Header';
import Services from '../Header/Services/Services';
import PopularProducts from '../PopularProducts/PopularProducts/PopularProducts';
import BotttomNav from '../Shared/BotttomNav/BotttomNav';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Home = () => {
    return (
        <>
            {/* <Navigation /> */}
            <Header />
            <Services />
            <Category />
            <PopularProducts />
            <DiscountProducts />
            {/* <Footer /> */}
            <BotttomNav />
        </>
    );
};

export default Home;