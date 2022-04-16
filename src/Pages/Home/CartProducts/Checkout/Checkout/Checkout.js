import React from 'react';

const Checkout = ({ totalPrice, items }) => {


    // button style
    const checkoutButton = {
        border: 'none',
        background: "#10B981",
        fontWeight: 500,
        fontSize: 14,
        padding: 5,
        width: '100%',
        marginTop: 10,
        color: '#fff'
    };

    return (



        <>

            <article className=' shadow p-3 rounded-3'>



                <h6>Order Summary</h6>

                <span className='d-flex justify-content-between mb-2'>
                    <small>Subtotal ({items} items) </small>
                    <small>${totalPrice}</small>
                </span>

                <span className='d-flex justify-content-between mb-3'>
                    <small>Shipping Fee</small>
                    <small>$55</small>
                </span>

                <span className='d-flex gap-2 justify-content-between'>

                    <input placeholder='Enter Voucher Code' className='w-100' type="text" />

                    <button
                        style={{ background: '#10B981', border: '1px solid #10B981', color: 'white' }}
                    >
                        Apply
                    </button>

                </span>

                <span className='d-flex  mt-2 justify-content-between fw-bold fs-6'>
                    <small>Total</small>
                    <small style={{ fontSize: 17, color: "#10B981" }}>${totalPrice}</small>
                </span>

                <div className="nav nav-tabs" id="nav-tab" role="tablist">

                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="true" style={checkoutButton}>PROCEED TO CHECKOUT</button>

                </div>

            </article>

        </>

    );
};

export default Checkout;