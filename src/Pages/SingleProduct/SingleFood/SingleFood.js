import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { FaOpencart } from 'react-icons/fa';
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { FaGreaterThan } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import DeliveryDetails from '../DeliveryDetails/DeliveryDetails';
import '../SingleProduct.css';
import ProductReview from '../ProductReview/ProductReview';
import RelatedProducts from '../RelatedProducts/RelatedProducts';

const SingleFood = () => {

    const { id } = useParams();
    const [food, setFood] = useState({});

    // fetch data
    const getSingleFood = async () => {
        const response = await axios.get(`https://secret-island-26493.herokuapp.com/food/${id}`);
        setFood(response.data);
    };

    useEffect(() => {
        getSingleFood();
    }, [id, food]);

    // cart button

    const cartButton = {
        padding: '3px 20px',
        border: '1px solid #10B981',
        color: "#fff",
        background: "#10B981",
        fontWeight: 500,
        borderRadius: 2,
        marginBottom: 20
    };



    return (

        <section style={{ backgroundColor: "#F9FAFB" }}>

            <Container style={{ paddingTop: 50, marginBottom: 60 }}>

                <h6 style={{ fontSize: 14, marginBottom: 50 }}>Home <FaGreaterThan /> Food Details <FaGreaterThan /> {food?.name} </h6>

                <Row className='shadow align-items-center rounded-3 food-details ' style={{ backgroundColor: "#FFFFFF" }}>

                    <Col xs={12} lg={4}>

                        <article className='d-flex justify-content-center'>
                            <img className='img-fluid' src={food.image} alt="foodImage" />
                        </article>

                    </Col>

                    <Col xs={12} md={6} lg={4} className='p-md-3 p-lg-0'>

                        <h5 className='fw-bold pt-5'>{food.name}</h5>
                        <h4 className='fw-bold' style={{ color: "#EF4444" }}>${food.price}</h4>

                        <h6 style={{ fontSize: 14 }}>Category: Fresh {food.category}</h6>

                        <Rating initialRating={food?.rating}
                            style={{ fontSize: "13px", marginBottom: 5, color: "#10B981" }}
                            emptySymbol="far fa-star icon-color" fullSymbol="fas fa-star icon-color" readonly></Rating>

                        <p style={{ fontWeight: 500, color: "rgb(86 95 125)", fontSize: 15, marginTop: 5 }}>Most fresh vegetables are low in calories and have a water content in excess of 70 percent carrots, radishes, sweet potatoes, and turnips.</p>

                        <button style={cartButton}><FaOpencart className='fs-4' /> Add to cart</button>

                        <h6 style={{ fontWeight: 'bold', fontSize: 16 }}>Share your social network</h6>

                        <p style={{ fontSize: 14 }}>For get lots of traffic from social network share this product </p>

                        <article className='social-button'>

                            <button>
                                <RiFacebookFill />
                            </button>
                            <button>
                                <AiOutlineTwitter />
                            </button>
                            <button>
                                <FaLinkedinIn />
                            </button>
                            <button>
                                <BsWhatsapp />
                            </button>

                        </article>

                    </Col>

                    <Col xs={12} md={6} lg={4} >
                        <DeliveryDetails />
                    </Col>

                </Row>


            </Container>

            {/* product review */}
            <ProductReview id={id} name={food?.name} />

            {/* related products */}
            <RelatedProducts category={food?.category} />

        </section>
    );
};

export default SingleFood;