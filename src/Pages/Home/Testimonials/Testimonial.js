import React from 'react';
import Rating from 'react-rating';

const Testimonial = ({ review }) => {

    const { name, image, profession, rating, description, date } = review;

    return (

        <article className='d-flex justify-content-center'>

            <article className='shadow-sm rounded-3 mb-3' style={{ width: 350, background: "#fff", padding: 30 }}>

                <article
                    style={{}}
                    className='d-flex justify-content-center'
                >

                    <img src={image} className="rounded-circle shadow-md" height="90" width="90" alt={name} />

                </article>

                <h5 className='text-center mt-3' >{name}</h5>

                <p className='text-center'>{description?.slice(0, 160)}.</p>

                <article className='d-flex justify-content-center'>

                    <Rating
                        initialRating={rating}
                        style={{
                            fontSize: "14px",
                            marginBottom: 5,
                            color: "#FF9529",
                            letterSpacing: 4
                        }}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly
                    />

                </article>

                <h6 className='text-center text-uppercase ' style={{ color: "#10B981", letterSpacing: 2 }}>{profession}</h6>

                <small className='text-center d-block'>{date}</small>

            </article>

        </article>

    );
};

export default Testimonial;