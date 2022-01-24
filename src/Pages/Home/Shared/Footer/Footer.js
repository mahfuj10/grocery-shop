import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import './Footer.css';
import Appbanner from '../../Appbanner/Appbanner';

const Footer = () => {

    const socialButton = {
        height: '30px',
        width: '30px',
        border: '1px solid #10B981',
        borderRadius: '50%',
        color: "#fff",
        marginRight: 10,
        background: "#10B981",
    };

    return (

        <footer>

            <Appbanner />

            <Container>
                <Row style={{ paddingTop: 100, paddingBottom: 50 }}>

                    <Col sm={6} md={4} lg={6}>
                        <img width="110" src="https://kachabazar-store.vercel.app/_next/image?url=%2Flogo%2Flogo-color.svg&w=128&q=75" alt="" />
                        <p className='mt-3 w-75' style={{ fontSize: 13 }}>There are many popular products you will find our shop, Choose your daily necessary product from our KachaBazar shop and get some special offer.</p>
                        <h6 className='mt-3'>Follow Us</h6>

                        <article className='social-button'>

                            <button style={socialButton}>
                                <RiFacebookFill />
                            </button>
                            <button style={socialButton}>
                                <AiOutlineTwitter />
                            </button>
                            <button style={socialButton}>
                                <FaLinkedinIn />
                            </button>
                            <button style={socialButton}>
                                <BsWhatsapp />
                            </button>

                        </article>

                    </Col>

                    <Col sm={6} md={8} lg={6}>
                        <Row>
                            <Col xs={6} md={4}>
                                <h6 className='mb-4'>Company</h6>
                                {/* <Link >as</Link> */}
                                <a href="">About Us</a>
                                <a href="">Contact us</a>
                                <a href="">Careers</a>
                                <a href="">Latest news</a>
                                <a href="">Latest Discount</a>
                            </Col>
                            <Col xs={6} md={4}>
                                <h6 className='mb-4'>Top Category</h6>

                                <a href="">Fish & Meat</a>
                                <a href="">Soft Drinks</a>
                                <a href="">Baby Care</a>
                                <a href="">Beauty & Health</a>
                                <a href="">Fruits & Vegetable</a>
                            </Col>
                            <Col xs={6} md={4}>
                                <h6 className='mb-4'>My Account</h6>

                                <a href="">Dashboard</a>
                                <a href="">My Orders</a>
                                <a href="">Recent Orders</a>
                                <a href="">Updated Profile</a>
                                <a href="">Fruits & Vegetable</a>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>

        </footer>
    );
};

export default Footer;