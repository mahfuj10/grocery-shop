import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Coupon = () => {

    const [coupons, setCoupons] = useState([]);

    // fake json load
    useEffect(() => {
        fetch('coupon.json')
            .then(res => res.json())
            .then(data => setCoupons(data))
    }, []);


    // copy code function
    const copyToClipboard = (text) => {
        const textField = document.createElement('textarea');
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
        copyiedSuccess();
    };

    // success message
    const copyiedSuccess = () => {
        toast.success('Copied to clipboard', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    };

    // coupon code button
    const couponButton = {
        padding: '8px 25px',
        fontWeight: "bold"
        , background: "#ECFDF5",
        color: "#10B981",
        border: "1px dotted #10B981",
        borderRadius: 10
    };

    return (
        <section className='container-md'>
            <Row style={{ margin: '80px 0' }} className='gap-3 justify-content-center  '>
                {
                    coupons.map(coupon => <Col xs={12} lg={5} className='d-flex  justify-content-between  shadow-sm p-4'>

                        <article className='d-flex  gap-2'>

                            <img width="100" height="100" src={coupon.image} alt="" />

                            <article>
                                <h6>{coupon.name}</h6>
                                <h4>
                                    <span className='text-danger fw-bold'>{coupon.discount}%</span>
                                </h4>
                            </article>
                        </article>

                        <article>

                            <button
                                onClick={() => copyToClipboard(coupon.code)}
                                style={couponButton}>
                                {coupon.code}
                            </button>



                            <br />

                            <small style={{ fontSize: 10 }}>* This coupon code apply when you shopping more then ${coupon.shopPice}</small>

                        </article>

                    </Col>
                    )
                }
            </Row>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </section>
    );
};

export default Coupon;