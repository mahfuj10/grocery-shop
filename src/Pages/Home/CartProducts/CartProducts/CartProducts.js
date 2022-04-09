import React from 'react';
import Product from './Product';
import emtyCart from '../../../../images/emptycart.gif';
import { useSelector } from 'react-redux';

const CartProducts = ({ cartProducts }) => {

    // const state = useSelector(state => state.products.cartProducts);

    return (
        <>

            {
                cartProducts.length === 0 ?

                    <article className='w-100 d-grid justify-content-center'>
                        <img className='img-fluid' src={emtyCart} alt="emtycart" />
                        <h6 className='fw-bold text-center'> Your cart is emty</h6>
                    </article>
                    :
                    <section className='d-flex gap-3 flex-wrap'>
                        {
                            cartProducts.map(product => <Product
                                product={product}
                                key={product._id}
                            />
                            )
                        }
                    </section>}

        </>
    );
};

export default CartProducts;