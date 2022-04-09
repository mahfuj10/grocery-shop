import React, { useEffect, useState } from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { MoonLoader } from 'react-spinners';
import { Myorders } from '../../../../Redux/reducer/cartSlice';
import useFirebase from '../../../Login/Hooks/useFirebase';
import WriteReview from '../WriteReview/WriteReview';

const MyOrders = () => {

    const dispatch = useDispatch();
    const { user } = useFirebase();
    const { orders, orderDataLoading } = useSelector(state => state.products);
    const [reviewProduct, setReviewProduct] = useState({});
    const [openReivewBox, setOpenReivewBox] = useState(false);
    console.log(reviewProduct);
    useEffect(() => {
        dispatch(Myorders(user?.email));
    }, [user, dispatch]);

    // reviewButton button
    const reviewButton = {
        width: '100%',
        marginBottom: 10,
        background: 'none',
        border: '1px solid #10B981',
        textTransform: 'uppercase',
        letterSpacing: 2,
        color: '#10B981',
        fontSize: 13,
        padding: 5
    };

    // open review function
    const handleOpenReviewBox = product => {
        setReviewProduct(product);
        setOpenReivewBox(true);
    };

    // handle close review box 
    const handeCloseReviewBox = () => {
        setOpenReivewBox(false);
    };

    return (

        <Container>

            {
                orders?.length === 0 && !orderDataLoading && <h5> There are now order yet ! </h5>
            }

            {
                orderDataLoading &&
                <article className='h-100 d-flex justify-content-center align-items-center'>
                    <MoonLoader color='#10B981' />
                </article>
            }

            {
                !orderDataLoading && !openReivewBox &&

                <Row className=''>

                    <Col lg={9}>

                        <Row>
                            {
                                orders.map(order => <Col lg={3} key={order._id}>

                                    <article
                                        className='shadow-sm mb-4 mr-3'
                                        style={{
                                            width: '210px',
                                            background: "#FFFFFF",
                                            marginBottom: 10,
                                            borderRadius: 5
                                        }}>


                                        <article
                                            // onClick={() => navigate(`/single-details/${_id}`)}
                                            type="button"
                                            className='d-flex justify-content-center'
                                        >
                                            <img width="160" height="160" src={order?.image} alt="foodImage" />
                                        </article>

                                        <h6 style={{ fontSize: 14, paddingLeft: 15 }}>{order?.name}</h6>

                                        <article className='d-flex align-items-center justify-content-between pb-3'>

                                            <h6 style={{ color: "#4B5563" }} className='ps-3'>${order?.price}</h6>

                                            <button
                                                style={{
                                                    borderRadius: 5,
                                                    background: "#FFFFFF", border: "none", marginRight: 10, color: "#10B981"
                                                }}
                                            >
                                                <Badge bg="success">{order?.status}</Badge>
                                            </button>
                                        </article>

                                        <button
                                            onClick={() => handleOpenReviewBox(order)}
                                            style={reviewButton}
                                        >
                                            Write a review
                                        </button>

                                    </article>


                                </Col>)
                            }

                        </Row>

                    </Col>

                    <Col lg={3}>


                        {
                            orders?.length > 0 && <article className='shadow-sm p-2 w-100'>

                                <h5 className='mb-3'>Order Information</h5>

                                <h6>Name :- {orders[0]?.orderInfo?.name}</h6>
                                <h6>Number :- {orders[0]?.orderInfo?.number}</h6>
                                <h6>Address :- {orders[0]?.orderInfo?.address}</h6>

                            </article>

                        }
                    </Col>




                </Row>
            }

            {/* review component */}
            {
                openReivewBox && <WriteReview
                    {...reviewProduct}
                    handeCloseReviewBox={handeCloseReviewBox}
                    openReivewBox={openReivewBox}
                />
            }

        </Container >
    );
};

export default MyOrders;