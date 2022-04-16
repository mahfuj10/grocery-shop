import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import Rating from 'react-rating';
import './UpdateBox.css';
import useFirebase from '../../../Login/Hooks/useFirebase';
import { Col, Row, Container } from 'react-bootstrap';
import swal from 'sweetalert';
import { GiTireIronCross } from 'react-icons/gi';


const WriteReview = ({ name, ID, handeCloseReviewBox }) => {

    const { register, handleSubmit, reset } = useForm();
    const { user } = useFirebase();
    const [loading, setLoading] = useState(true);
    const [openBox, setOpenBox] = useState(false);
    const [userReview, setUserReview] = useState({});
    const nameRef = useRef(null);
    const ratingRef = useRef(null);
    const messageRef = useRef(null);

    const onSubmit = data => {

        data.uid = user?.uid;
        data.image = user.photoURL;
        data.date = new Date();
        setLoading(true);
        if (data.name === '') {
            data.name = user?.displayName;
        };
        axios.post(`https://secret-island-26493.herokuapp.com/addproductreivew?foodId=${ID}`, data).then(res => {
            reset();
            setLoading(false)
        });
    };


    useEffect(() => {
        axios.get(`https://secret-island-26493.herokuapp.com/userReview/QhRYrYNQbKcpetrYJYaCSoDWGsd2`)
            .then(res => {
                setUserReview(res.data);
            })
    }, [openBox, loading]);

    // match review
    const review = userReview?.reviews?.find(product => product?.uid === user.uid);

    // update name in the review
    const handleUpdateReview = () => {
        const updatedName = nameRef.current.value;
        const updatedRating = ratingRef.current.value;
        const updatedMessage = messageRef.current.value;
        const updatedDoc = { updatedName, updatedMessage, updatedRating };
        axios.put(`https://secret-island-26493.herokuapp.com/updateName?uid=${review?.uid}`, updatedDoc).then(res => setOpenBox(false));
    };


    const handleDeleteReview = () => {
        setLoading(true);
        swal({
            text: "Are you sure you wanna delete this review?",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`https://secret-island-26493.herokuapp.com/deleteReview?uid=${user?.uid}`).then(res => {
                        swal("Poof! Your review has been deleted!", {
                            icon: "success",
                        });
                        setLoading(false);
                    })

                }
            });

    }

    // input style
    const inputStyle = {
        width: '100%',
        marginBottom: 20
    };

    // button style
    const buttonStyle = {
        border: '1px solid #2574A9',
        background: '#fff',
        color: "#2574A9",
        letterSpacing: 2,
        marginRight: 10,
        marginTop: 10,
        padding: '5px 20px',
        borderRadius: 5
    };

    // crossButton
    const crossButton = {
        display: 'flex',
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        padding: 5,
        height: 30,
        background: 'white',
        marginTop: -27,
        marginBottom: 10,
        float: 'right'
    };

    return (

        <Container>

            <Row>

                <Col lg={6}>

                    {
                        !review ?
                            <article className='shadow w-50 p-2'>

                                <i
                                    onClick={() => handeCloseReviewBox()}
                                    className='shadow'
                                    type="button"
                                    style={crossButton}
                                >
                                    <GiTireIronCross />
                                </i>


                                <form onSubmit={handleSubmit(onSubmit)} className="p-2">

                                    <h6 className='mb-3'>Write review for {name}</h6>

                                    <input className='p-2 w-100 mb-4' defaultValue={user?.displayName} {...register("name")} />


                                    <select {...register("rating")}>

                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>

                                    </select>


                                    <textarea rows="4" {...register("description", { required: true })} placeholder='Your Message *'></textarea>

                                    <input type="submit" className='bg-white border-1 ' style={inputStyle} />

                                </form>


                            </article>
                            :
                            <article className='shadow p-3' style={{ width: '350px' }}>

                                <i
                                    onClick={() => handeCloseReviewBox()}
                                    className='shadow'
                                    type="button"
                                    style={crossButton}
                                >
                                    <GiTireIronCross />
                                </i>

                                <h5>Name:- {review?.name}</h5>

                                <h5>
                                    Rating:-      <Rating initialRating={review?.rating}
                                        style={{ fontSize: "13px", marginBottom: 5, color: "#FF9529" }}
                                        emptySymbol="far fa-star icon-color" fullSymbol="fas fa-star icon-color" readonly>
                                    </Rating>
                                </h5>

                                <h5>Message:- {review?.description}</h5>

                                <button style={buttonStyle} onClick={handleDeleteReview}>DELETE</button>
                                {
                                    !openBox ?
                                        <button style={buttonStyle} onClick={() => setOpenBox(true)}>EDIT</button>
                                        :
                                        <button style={buttonStyle} onClick={() => setOpenBox(false)}>CLOSE</button>
                                }

                            </article>
                    }

                </Col>

                {
                    openBox &&

                    <Col lg={6} className='update_box mt-2'>

                        <article className="form-group">
                            <input ref={nameRef} className="form-field" defaultValue={review?.name} type="email" />
                            <span onClick={handleUpdateReview} type="button">UPDATE</span>
                        </article>

                        <article className="form-group">
                            <input type='number' ref={ratingRef} className="form-field" defaultValue={review?.rating} />
                            <span type="button" onClick={handleUpdateReview}>UPDATE</span>
                        </article>

                        <article className="form-group">
                            <input ref={messageRef} className="form-field" defaultValue={review?.description} />
                            <span type="button" onClick={handleUpdateReview}>UPDATE</span>
                        </article>

                    </Col>
                }
            </Row>
        </Container>

    );
};

export default WriteReview;