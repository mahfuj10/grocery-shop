import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CategoryBanner from '../CategoryBanner/CategoryBanner';
import PopularProduct from '../PopularProduct/PopularProduct';

const PopularProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://secret-island-26493.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <section style={{ marginTop: 100, background: "#F9FAFB" }}>
            <Container style={{ paddingTop: 70 }}>

                <h4 className='text-center'>Popular Products for Daily Shopping</h4>
                <p className='text-center pb-4'>See all our popular products in this week. You can choose your daily needs <br /> products from this list and get some special offer with free shipping.</p>

                <Row>
                    {
                        products.map(product => !product.discount && <PopularProduct
                            key={product._id}
                            product={product}
                        />
                        )
                    }
                </Row>

                <CategoryBanner />

            </Container>
        </section>
    );
};

export default PopularProducts;