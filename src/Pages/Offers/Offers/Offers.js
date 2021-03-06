import React from 'react';
import headerImage from '../../../images/offepage-header.jpg';
import Coupon from '../Coupon/Coupon';
import Navigation from '../../Home/Shared/Navigation/Navigation';
import Footer from '../../Home/Shared/Footer/Footer';

const Offers = () => {

    return (
        <>

            <Navigation />

            <section
                style={{ backgroundImage: `url(${headerImage})`, height: 200, backgroundSize: 'cover', display: "flex", justifyContent: 'center', alignItems: 'center' }}
            >

                <h2 className='-center fw-bold'>Mega Offer</h2>

            </section>

            <Coupon />

            <Footer />
        </>
    );
};

export default Offers;