import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import { allPorducts } from '../../../../Redux/reducer/cartSlice';
import DiscountProduct from '../DiscountProduct/DiscountProduct';
import '../Skeleton.css';


const DiscountProducts = () => {


    const { products, productLoading } = useSelector(state => state.products);


    return (
        <section style={{ background: "#fff" }}>

            <Container style={{ paddingTop: 75, paddingBottom: 70 }}>

                <h4 className='text-center'>Latest Discounted Products</h4>
                <p className='text-center pb-4'>See Our latest discounted products below. Choose your daily needs from here <br /> and get a special discount with free shipping.</p>
                {
                    productLoading
                        ?
                        <article className='d-flex justify-content-center' >
                            <ScaleLoader color="#10B981" />
                        </article>
                        :
                        <Row>
                            {
                                products.map(product => product.discount && <DiscountProduct
                                    key={product._id}
                                    product={product}
                                />)
                            }
                        </Row>
                }
            </Container>
        </section>
    );
};

export default DiscountProducts;