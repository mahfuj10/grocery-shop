import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CategoryBanner from '../CategoryBanner/CategoryBanner';
import PopularProduct from '../PopularProduct/PopularProduct';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { useDispatch, useSelector } from 'react-redux';
import { allPorducts } from '../../../../Redux/reducer/cartSlice';

const PopularProducts = () => {


    const dispatch = useDispatch();
    const { products, productLoading } = useSelector(state => state.products);

    // load data
    useEffect(() => {
        dispatch(allPorducts());
    }, [dispatch])

    return (

        <section style={{ marginTop: 100, background: "#F9FAFB" }}>
            <Container style={{ paddingTop: 70 }}>

                <h4 className='text-center'>Popular Products for Daily Shopping</h4>
                <p className='text-center pb-4'>See all our popular products in this week. You can choose your daily needs <br /> products from this list and get some special offer with free shipping.</p>

                {
                    productLoading
                        ?
                        <article className='d-flex justify-content-center' >
                            <ScaleLoader color="#10B981" />
                        </article>
                        :
                        <Row>
                            {
                                products.slice(0, 22).map(product => !product.discount && <PopularProduct
                                    key={product._id}
                                    product={product}
                                />
                                )
                            }
                        </Row>
                }

                <CategoryBanner />

            </Container>
        </section>
    );
};

export default PopularProducts;