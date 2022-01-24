import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Review from './Review';
import ReviewForm from './ReviewForm';

const ProductReview = ({ id, name }) => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://secret-island-26493.herokuapp.com/reviews/${id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews, id])

    return (
        <>
            <Container className='mb-5 pb-5'>

                <h5 className='mb-5'>Ratings & Reviews of {name}</h5>

                <Row>
                    <Col lg={6} style={{ height: "636px", overflowY: "scroll" }}>
                        {
                            reviews.map(review => <Review
                                review={review}
                                key={review?.image}
                            />)
                        }
                    </Col>



                    <Col lg={6}>
                        <ReviewForm id={id} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ProductReview;