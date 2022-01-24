import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import foodBanner from '../../../images/appBanner.png';
import appStore from '../../../images/app-store.svg';
import playStore from '../../../images/play-store.svg';

const Appbanner = () => {

    return (

        <section style={{ background: "#EEF2FF", marginTop: 0 }}>

            <Container>

                <Row className='align-items-center'>

                    <Col md={6} lg={8}>
                        <h3 className='fw-bold pt-4 pt-lg-0'>Get Your Daily Needs From Our <br className='d-none d-lg-block' /> KachaBazar Store</h3>
                        <p className='mt-2 mb-4'>There are many products you will find our shop, Choose your daily necessary <br className='d-none d-lg-block' /> product from our KachaBazar shop and get some special offer.</p>

                        <img type="button" width="170" src={appStore} alt="appstoreimage" />

                        <img type="button" width="170" className='ms-lg-3 mt-2 mt-lg-0 pb-4 pb-lg-0' src={playStore} alt="playstoreimage" />

                    </Col>

                    <Col md={6} lg={4} className='d-none d-md-block '>
                        <img className='img-fluid' src={foodBanner} alt="" />
                    </Col>

                </Row>
            </Container>

        </section>
    );
};

export default Appbanner;