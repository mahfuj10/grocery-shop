import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import image1 from '../../../../images/headerBanner1.webp';
import image2 from '../../../../images/headerBanner2.webp';
import image3 from '../../../../images/headerBanner3.webp';
import image4 from '../../../../images/banner-1.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import image5 from '../../../../images/banner-2.jpg';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    // handle history push
    const handleRouteChange = () => {
        navigate('/category=/Fruits');
    };

    // banner style
    const banner = {
        width: "100%",
        height: "170px",
        marginBottom: 18,
        borderRadius: 10
    };

    return (

        <Container className='mt-5 mb-5 mb-lg-0'>
            <Row>
                <Col md={12} lg={6}>


                    <Swiper grabCursor={true} pagination={true} modules={[Pagination]} className="mySwiper">

                        <SwiperSlide style={{
                            backgroundImage: `url(${image1})`,
                            height: '357px',
                            backgroundSize: 'cover',
                            borderRadius: 10,
                        }}>

                            <article className="mb-4 mb-lg-0 " style={{
                                marginTop: '13%',
                                padding: 30
                            }}
                            >

                                <h3 className='fw-bold w-75 '>The Best Quality Products Guaranteed!</h3>

                                <p className='w-75  '>Dramatically facilitate effective total linkage for go forward processes...</p>

                                <button className='btn btn-success' onClick={handleRouteChange}>SHOP NOW</button>


                            </article>

                        </SwiperSlide>



                        <SwiperSlide style={{
                            backgroundImage: `url(${image2})`,
                            height: '357px',
                            backgroundSize: 'cover',
                            borderRadius: 10
                        }}>

                            <article style={{
                                marginTop: '13%',
                                padding: 30
                            }}
                                className="mb-4 mb-lg-0"
                            >


                                <h3 className='fw-bold w-75 '>Best Different Type of Grocery Store</h3>

                                <p className='w-75'>Quickly aggregate empowered networks after emerging products...</p>

                                <button onClick={handleRouteChange} className='btn btn-success'>SHOP NOW</button>



                            </article>


                        </SwiperSlide>

                        <SwiperSlide style={{
                            backgroundImage: `url(${image3})`,
                            height: '357px',
                            backgroundSize: 'cover',
                            borderRadius: 10
                        }}>

                            <article style={{
                                marginTop: '13%',
                                padding: 30
                            }}
                                className="mb-4 mb-lg-0"
                            >

                                <h3 className='fw-bold w-75 '>Wanna need a fresh foods ? connect with us!</h3>

                                <p className='w-75'>Quickly aggregate empowered networks after emerging products...</p>

                                <button onClick={handleRouteChange} className='btn btn-success'>SHOP NOW</button>

                            </article>

                        </SwiperSlide>

                    </Swiper>



                </Col>
                <Col lg={6}>

                    <Row>

                        <Col lg={12}>
                            <img type="button" onClick={() => navigate('/category=/Vegetable')} className='d-none d-lg-block' style={banner} src={image4} alt="" />
                        </Col>

                        <Col lg={12}>
                            <img type="button" onClick={() => navigate('/category=/Cooking%20Essentials')} className='d-none d-lg-block' style={banner} src={image5} alt="" />
                        </Col>

                    </Row>

                </Col>
            </Row>
        </Container>
    );
};

export default Header;