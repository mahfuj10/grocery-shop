import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { Container } from 'react-bootstrap';
import RelatedProduct from './RelatedProduct';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RelatedProducts = ({ category }) => {

    const [relatedProducts, setRelatedProducts] = useState([]);

    // data loaded
    useEffect(() => {
        fetch(`http://localhost:5000/foods/${category}`)
            .then(res => res.json())
            .then(data => setRelatedProducts(data));
    }, [category]);

    // slider
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: relatedProducts.length > 5 ? 6 : relatedProducts.length === 1 ? 1 : relatedProducts.length === 2 ? 2 : relatedProducts.length === 3 ? 3 : 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]

    };

    return (

        <Container style={{ paddingBottom: 60 }}>

            <h5 className='mb-4'>Related Products</h5>

            <Slider {...settings} className=''>




                {
                    relatedProducts.map(product => <RelatedProduct
                        key={product._id}
                        product={product}
                    />)
                }


            </Slider>

        </Container >
    );
};

export default RelatedProducts;