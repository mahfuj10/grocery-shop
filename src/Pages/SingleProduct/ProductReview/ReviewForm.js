import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import useFirebase from '../../Login/Hooks/useFirebase';
import '../SingleProduct.css';

const ReviewForm = ({ id }) => {

    const { register, handleSubmit, reset } = useForm();
    let today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const presentDate = today.getFullYear();
    today = day + '/' + month + '/' + presentDate;
    const { user } = useFirebase();
    const [loading, setLoading] = useState(true);


    // post review

    const onSubmit = data => {

        setLoading(false);
        data.foodId = id;
        data.date = today;
        data.image = user?.photoURL
        fetch('https://secret-island-26493.herokuapp.com/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json(data))
            .then(data => {
                reset();
                setLoading(true);
                Swal.fire('Thanks for your review ')
            })
    };

    // submit and loading button style
    const buttonStyle = {
        background: "#10B981", border: '1px solid white', color: "white"
    };

    return (

        <section className="review-form shadow-sm mt-3 mb-3">

            <h4 className="mb-0 fw-bold">Write a reivew</h4>

            <form className="pt-3" onSubmit={handleSubmit(onSubmit)}>

                <label>Your Name*</label> <br />
                <input required {...register("name")} /> <br />
                <label>Rating*</label> <br />
                <select type="button"   {...register("rating")}>
                    <option required></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select> <br />

                <label>You Message*</label> <br />
                <textarea required {...register("description")} rows="4"></textarea>

                {
                    loading ?
                        <input style={buttonStyle} value="Submit a Review" type="submit" />
                        :
                        <input style={buttonStyle} value="Loading..." type="submit" />
                }

            </form>
        </section>
    );
};

export default ReviewForm;