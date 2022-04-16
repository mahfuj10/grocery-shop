import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { GrFormNext } from 'react-icons/gr';
import { GrFormPrevious } from 'react-icons/gr';
import { Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopularProduct from '../../Home/PopularProducts/PopularProduct/PopularProduct';

const RelatedProducts = ({ category }) => {

    const [relatedProducts, setRelatedProducts] = useState([]);

    // data loaded
    useEffect(() => {
        fetch(`https://secret-island-26493.herokuapp.com/foods/${category}`)
            .then(res => res.json())
            .then(data => setRelatedProducts(data));
    }, [category]);


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


    // swiper state
    const [my_swiper, set_my_swiper] = useState({});
    const [my_swiper_status, set_my_swiper_status] = useState({
        isBeginning: true,
        isEnd: false
    });

    return (

        <Container style={{ paddingBottom: 60 }}>

            <h5 className='mb-4'>Related Products</h5>

            <Swiper
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    600: {
                        slidesPerView: 3,
                    },
                    800: {
                        slidesPerView: 3,
                    },

                    1024: {
                        slidesPerView: 4,
                    }
                }}
                spaceBetween={90}

                loop={false}
                slidesPerView={relatedProducts.length > 5 ? 6 : relatedProducts.length === 1 ? 1 : relatedProducts.length === 2 ? 2 : relatedProducts.length === 3 ? 3 : 5}
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
                    relatedProducts.map(product => <SwiperSlide key={product._id}>
                        <PopularProduct
                            product={product}
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

        </Container >
    );
};

export default RelatedProducts;