import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Review from './Review';



const ProductReview = ({ id, name, product }) => {



    return (

        <>
            {
                product?.reviews &&

                <Container className='mb-0 pb-4'>

                    <h5 className='mb-4'>Ratings & Reviews of {name}</h5>

                    <Row>

                        <Col lg={8} xs={12} >

                            {
                                product?.reviews.map(review => <Review
                                    review={review}
                                    key={review?.name}
                                />)
                            }

                        </Col>

                    </Row>

                </Container>
            }
        </>

    );
};

export default ProductReview;