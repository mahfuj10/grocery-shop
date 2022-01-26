import React from 'react';
import { useForm } from "react-hook-form";
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

    const onSubmit = data => {

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
                alert('Thanks for your review ...')
            })
    };

    return (

        <section className="review-form mt-3 mb-3">

            <h4 className="position-absolute ">Write a reivew</h4>

            <form className="pt-5" onSubmit={handleSubmit(onSubmit)}>

                <label>Your Name</label> <br />
                <input placeholder={user?.displayName} required {...register("name")} /> <br />
                {/* <label>Your Email</label> <br />
                <input {...register("email")} /> <br /> */}
                <label>Rating</label> <br />
                <select   {...register("rating")}>
                    <option required>Choose rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select> <br />

                <label>You Message</label> <br />
                <textarea required {...register("description")} placeholder="Your Message" rows="4"></textarea>
                <input style={{ background: "#6388BE", border: '1px solid white', color: "white" }} value="Submit a Review" type="submit" />

            </form>
        </section>
    );
};

export default ReviewForm;