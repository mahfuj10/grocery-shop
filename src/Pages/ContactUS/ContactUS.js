import React from 'react';
import Navigation from '../Home/Shared/Navigation/Navigation';
import contactBanner from '../../images/contactUs.jpeg';
import { Col, Container, Row } from 'react-bootstrap';
import { MdLocationPin } from 'react-icons/md';
import { MdAddIcCall } from 'react-icons/md';
import { MdOutlineMailOutline } from 'react-icons/md';


const ContactUS = () => {

    // icon style
    const iconContainer = {
        height: 50,
        width: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: "#fff",
        borderRadius: '50%',
        fontSize: 20,
        color: "#003082",
    };

    // input style
    const inputStyle = {
        width: '100%',
        padding: 7,
        marginBottom: 30,
        border: '2px solid #2574A9',
        borderRadius: 5
    };
    // submit button 
    const submitButton = {
        padding: '5px 30px',
        border: '2px solid #2574A9',
        background: "#2574A9",
        color: "#fff",
        letterSpacing: 2,
        borderRadius: 5
    };

    return (

        <>

            <Navigation />

            <section style={{
                backgroundImage: (`url(${contactBanner})`),
                width: '100vw',
                height: '94vh',
                backgroundSize: 'cover',
                display: 'flex',
                alignItems: 'center'
            }}>


                <Container>

                    <Row className='align-items-center'>

                        <Col lg={6}>


                            <article className='d-flex gap-3'>

                                <span style={iconContainer}>
                                    <MdLocationPin />
                                </span>

                                <span className='text-white'>
                                    <h5 className='mb-0'>Address</h5>
                                    <p>23 Kusumbag, Moulvibazar 3200</p>
                                </span>

                            </article>

                            <article className='d-flex gap-3 my-5'>

                                <span style={iconContainer}>
                                    <MdAddIcCall />
                                </span>

                                <span className='text-white'>
                                    <h5 className='mb-0'>Phone</h5>
                                    <p>+880-190-785-1900</p>
                                </span>

                            </article>

                            <article className='d-flex gap-3'>

                                <span style={iconContainer}>
                                    <MdOutlineMailOutline />
                                </span>

                                <span className='text-white'>
                                    <h5 className='mb-0'>Email</h5>
                                    <p>mahfuj192005@gmail.com</p>
                                </span>

                            </article>

                        </Col>

                        <Col lg={6}>

                            <article className='bg-white rounded-3 px-5 pt-4 pb-5' >

                                <h4 className='mb-3'>Send Message</h4>

                                <input style={inputStyle} type="text" placeholder='Name' />

                                <input style={inputStyle} type="email" placeholder='Email' />

                                <textarea placeholder='Message' style={inputStyle} rows="3" />

                                <button style={submitButton}>SEND</button>

                            </article>

                        </Col>

                    </Row>

                </Container>

            </section>

        </>
    );
};

export default ContactUS;