import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BeatLoader } from 'react-spinners'
import { useEffect, useState } from 'react';
import { GrFormNext } from 'react-icons/gr';
import { GrFormPrevious } from 'react-icons/gr';
import Testimonial from './Testimonial';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { Testimonials } from "../../../Redux/reducer/cartSlice";

const Testimonails = () => {


    const [my_swiper, set_my_swiper] = useState({});
    const dispatch = useDispatch();
    const { testimonials, testimonialsLoading } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(Testimonials());
    }, [dispatch]);

    const [my_swiper_status, set_my_swiper_status] = useState({
        isBeginning: true,
        isEnd: false
    });



    // button style
    const btnStyle = {
        background: 'white',
        boxShadow: '0 2px 5px 0 rgb(0 0 0 / 40%)',
        '&:hover': {
            background: "white",
        },
        zIndex: '9999999999',
        border: 'none',
        borderRadius: '50%',
        fontSize: 20
    };

    return (

        <section style={{ background: '#F9FAFB', padding: '90px 0', zIndex: -99232 }}>

            <Container style={{ position: 'relative' }}>




                <h4 className='text-center mb-5'>LET OUR CUSTOMERS SPEAK US</h4>

                {
                    testimonialsLoading ?
                        <article className='d-flex justify-content-center align-items-center' >
                            <BeatLoader color="#10B981" />
                        </article>
                        :
                        <Swiper
                            breakpoints={{
                                // when window width is >= 640px
                                320: {
                                    slidesPerView: 1,
                                },
                                // when window width is >= 768px
                                600: {
                                    slidesPerView: 1,
                                },
                                900: {
                                    slidesPerView: 2,
                                },
                                1300: {
                                    slidesPerView: 3,
                                }
                            }}
                            spaceBetween={90}

                            loop={false}
                            slidesPerView={3}
                            modules={[Navigation]}
                            grabCursor={true}
                            onSlideChange={(ev) => {
                                set_my_swiper(ev)

                                set_my_swiper_status({
                                    isBeginning: ev.isBeginning,
                                    isEnd: ev.isEnd,
                                })
                            }}
                            onInit={(ev) => {
                                set_my_swiper(ev)
                            }}
                        >

                            {
                                testimonials?.map(review => review.status === 'approved' &&
                                    <SwiperSlide key={review._id}>
                                        <Testimonial
                                            review={review}
                                        />
                                    </SwiperSlide>
                                )
                            }


                            <article style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                position: 'absolute',
                                top: '45%',
                                width: '100%',
                                zIndex: 77799999999999
                            }}>

                                {
                                    my_swiper_status.isBeginning ? <div></div> : <button
                                        style={btnStyle}
                                        onClick={() => my_swiper.slidePrev()}
                                    >
                                        <GrFormPrevious style={{ color: "#10B981" }} />
                                    </button>
                                }


                                {
                                    my_swiper_status.isEnd ? <div></div> : <button
                                        onClick={() => my_swiper.slideNext()}
                                        style={btnStyle}
                                    >
                                        <GrFormNext style={{ color: "#10B981" }} />
                                    </button>
                                }

                            </article>

                        </Swiper>
                }

            </Container>

        </section>
    );
};

export default Testimonails;