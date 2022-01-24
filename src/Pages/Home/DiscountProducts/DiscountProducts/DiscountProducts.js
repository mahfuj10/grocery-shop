import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import DiscountProduct from '../DiscountProduct/DiscountProduct';

const DiscountProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://secret-island-26493.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <section style={{ background: "#F9FAFB" }}>

            <Container style={{ paddingTop: 75, paddingBottom: 70 }}>

                <h4 className='text-center'>Latest Discounted Products</h4>
                <p className='text-center pb-4'>See Our latest discounted products below. Choose your daily needs from here <br /> and get a special discount with free shipping.</p>

                <Row>
                    {
                        products.map(product => product.discount && <DiscountProduct
                            key={product._id}
                            product={product}
                        />)
                    }
                </Row>

            </Container>
        </section>
    );
};

export default DiscountProducts;