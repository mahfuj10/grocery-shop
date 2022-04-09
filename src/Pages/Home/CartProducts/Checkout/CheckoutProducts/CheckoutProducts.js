import React from 'react';

const CheckoutProducts = ({ cartProducts, price }) => {

    return (

        <section className='shadow-sm ps-2'>

            <h6 style={{ fontWeight: 'bold', color: 'black' }}>Checkout products</h6>

            {
                cartProducts.map(product => <article key={product._id} className='d-flex align-items-center mb-1'>
                    <img src={product.image} width="50" alt="productImage" />
                    <h6 style={{ fontSize: 14, color: 'black' }}>{product.name}</h6>
                </article>
                )
            }
            <h6 className='pb-2 text-black'>Total price ${price}</h6>
        </section>
    );
};

export default CheckoutProducts;