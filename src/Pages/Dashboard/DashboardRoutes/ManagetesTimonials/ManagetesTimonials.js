import axios from 'axios';
import React, { useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import Rating from 'react-rating';
import { SyncLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { ApproveTestimonial, deleteTestimonial, remainingTestimonial, Testimonials } from '../../../../Redux/reducer/cartSlice';
import '../../Dashboard/Dashboard.css';

const ManagetesTimonials = () => {

    const dispatch = useDispatch();
    const { testimonials, ApproveTestimonialLoading, testimonialsLoading } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(Testimonials());
    }, [dispatch, ApproveTestimonialLoading]);

    // handleApproveTestimonial
    const handleApproveTestimonial = id => {
        dispatch(ApproveTestimonial(id));
        // dispatch(remainingTestimonial(id));
        // axios.
    };

    // handle deleteTestimonial
    const handleDeleteTestimonial = id => {
        dispatch(deleteTestimonial(id));
        dispatch(remainingTestimonial(id));
    };

    // loading
    if (testimonialsLoading) {
        return <h6 className='text-center'><SyncLoader color='#2574A9' /></h6>
    };

    return (

        <Container className='manage_testimonials'>

            <Table striped bordered hover size="lg">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Profession</th>
                        <th>Rating</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        testimonials.map(testimonial => <tr key={testimonial._id}>

                            <td>{testimonial.name}</td>
                            <td>{testimonial.profession}</td>

                            <td>
                                <Rating initialRating={testimonial?.rating}
                                    style={{ fontSize: "13px", marginBottom: 5, color: "#FF9529" }}
                                    emptySymbol="far fa-star icon-color" fullSymbol="fas fa-star icon-color" readonly>
                                </Rating>
                            </td>

                            <td>
                                {
                                    testimonial.status === 'pending' ?

                                        <button onClick={() => handleApproveTestimonial(testimonial._id)}>APPROVE</button>

                                        :

                                        <button className='ms-2' onClick={() => handleDeleteTestimonial(testimonial._id)}>DELETE</button>
                                }
                            </td>

                        </tr>
                        )
                    }

                </tbody>

            </Table>

        </Container>
    );
};

export default ManagetesTimonials;