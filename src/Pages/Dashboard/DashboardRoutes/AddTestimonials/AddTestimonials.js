import userEvent from '@testing-library/user-event';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { addTestimonial } from '../../../../Redux/reducer/cartSlice';
import useFirebase from '../../../Login/Hooks/useFirebase';
import '../../Dashboard/Dashboard.css';

const AddTestimonials = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useFirebase();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const onSubmit = data => {
        setLoading(true);
        let today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;

        // property
        data = { ...data, date: today, status: 'pending', image: user.photoURL };
        // dispatch(addTestimonial(data));
        axios.post('https://secret-island-26493.herokuapp.com/review', data).then(res => {
            setLoading(false);
            reset();
            Swal.fire({
                text: "Thank you for your review !",
            })
        });


    };


    // input style
    const inputStyle = {
        width: '100%',
        display: 'block',
        marginBottom: 20,
        padding: 10,
        border: "1px solid #fff",
        background: "#fff",
        borderRadius: 5
    };

    // submit button
    const submitButton = {
        background: "#2574A9",
        border: '1px solid #2574A9',
        padding: '5px 25px',
        color: "#fff",
        borderRadius: 5
    };

    return (

        <Container>

            <article className='shadow-sm w-50 p-3 testimonial_form' style={{ background: "#F7F7F7" }}>

                <h5 className='mb-3'>What's your experience ?</h5>

                <form className='testimonial_form' onSubmit={handleSubmit(onSubmit)}>

                    <input style={inputStyle} placeholder="Your Name *" {...register("name", { required: true })} />

                    <input placeholder="Your Profession *" style={inputStyle} {...register("profession", { required: true })} />

                    <select type="button" style={inputStyle} {...register("rating")}>
                        <option value="1">Select your rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <textarea placeholder="Your Message *"  {...register("description", { required: true })} style={inputStyle} rows="3"></textarea>

                    {
                        !loading ?
                            <input style={submitButton}
                                type="submit"
                            />
                            :
                            <button style={submitButton}
                            >
                                Loading...
                            </button>
                    }

                </form>

            </article>



        </Container>
    );
};

export default AddTestimonials;