import React from 'react';
import { Col, Row } from 'react-bootstrap';
import banner1 from '../../../../images/banner-4 (1).webp'
import banner2 from '../../../../images/banner-4 (2).webp'
import banner3 from '../../../../images/banner-4 (3).webp'

const CategoryBanner = () => {



    return (

        <Row style={{ marginTop: 70, paddingBottom: 70 }} >

            <Col xs={12} md={6} lg={4}>
                <img className='img-fluid mb-3 mb-lg-0' src={banner1} alt="" />
            </Col>

            <Col xs={12} sm={6} lg={4}>
                <img className='img-fluid mb-3 mb-lg-0' src={banner2} alt="" />
            </Col>

            <Col xs={12} sm={6} lg={4}>
                <img className='img-fluid mb-3 mb-lg-0' src={banner3} alt="" />

            </Col>
        </Row>
    );
};

export default CategoryBanner;