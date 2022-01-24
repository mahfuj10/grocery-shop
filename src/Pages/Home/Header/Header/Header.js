import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import image1 from '../../../../images/image-1.webp';
import image2 from '../../../../images/image-2.webp';
import image3 from '../../../../images/image-3.webp';
import image4 from '../../../../images/banner-1.jpg';
import image5 from '../../../../images/banner-2.jpg';

const Header = () => {

    const banner = {
        width: "100%",
        height: "170px",
        marginBottom: 18,
        borderRadius: 10
    };

    return (

        <Container className='mt-5'>
            <Row>
                <Col md={12} lg={6}>

                    <article style={{ backgroundImage: `url(${image1})`, height: '357px', backgroundSize: 'cover', borderRadius: 10 }}></article>

                </Col>
                <Col lg={6}>
                    <Row>
                        <Col lg={12}>
                            <img style={banner} src={image4} alt="" />
                        </Col>
                        <Col lg={12}>
                            <img style={banner} src={image5} alt="" />
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    );
};

export default Header;