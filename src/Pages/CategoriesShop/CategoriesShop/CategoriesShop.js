import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../Home/Shared/Footer/Footer';
import Navigation from '../../Home/Shared/Navigation/Navigation';
import CategoriesProducts from '../CategoriesProducts/CategoriesProducts/CategoriesProducts';
import CategoriesSidebar from '../CategoriesSidebar/CategoriesSidebar';

const CategoriesShop = () => {

    return (
        <>
            <Navigation />

            <section style={{ width: '100%', height: '100%', background: "#F9FAFB" }}>

                <Container>

                    <Row>

                        <Col lg={3}>
                            <h6 className='mt-5 mb-3'>Categories</h6>
                            <CategoriesSidebar />
                        </Col>

                        <Col lg={9} >
                            <CategoriesProducts />
                        </Col>

                    </Row>
                </Container>

            </section>

            <Footer />

        </>
    );
};

export default CategoriesShop;