import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51K93ltBcGooWtax9JKsV2tP7uqmbQYtdpRXFr4Ey1CHijNCVjRMV8eDkLX1YlNvDJHvktGKwvAjYvzFo93K3j06q00slg9hLuX');

const Payment = ({ totalPrice, cartProducts }) => {

    // const [cartProducts, setCartProducts] = useState([]);
    let total = totalPrice;

    return (

        <section>

            {
                total > 0 && <Elements stripe={stripePromise}>
                    <CheckoutForm
                        cartProducts={cartProducts}
                        price={total}
                    />
                </Elements>
            }
        </section >
    );
};

export default Payment;