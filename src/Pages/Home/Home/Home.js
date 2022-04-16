import React from 'react';
import Login from '../../Login/Login/Login';
import Category from '../Category/Category';
import DiscountProducts from '../DiscountProducts/DiscountProducts/DiscountProducts';
import Header from '../Header/Header/Header';
import Services from '../Header/Services/Services';
import PopularProducts from '../PopularProducts/PopularProducts/PopularProducts';
import BotttomNav from '../Shared/BotttomNav/BotttomNav';
import Footer from '../Shared/Footer/Footer';
import ProgressBar from "react-scroll-progress-bar";
import Navigation from '../Shared/Navigation/Navigation';
import Testimonials from '../Testimonials/Testimonials';
import { useDispatch } from 'react-redux';
import { userProfile } from '../../../Redux/reducer/cartSlice';
import useFirebase from '../../Login/Hooks/useFirebase';

const Home = () => {

    const { user } = useFirebase();
    const dispatch = useDispatch();

    if (user.email) dispatch(userProfile(user?.uid));


    return (

        <>

            <Navigation />

            <Header />


            <Services />
            <Category />
            <PopularProducts />
            <DiscountProducts />
            <Testimonials />
            <Footer />

            {/* <Login /> */}
        </>
    );
};

export default Home;