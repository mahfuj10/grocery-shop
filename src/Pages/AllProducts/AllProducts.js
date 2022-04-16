import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navigation from '../../Pages/Home/Shared/Navigation/Navigation';
import { allPorducts } from '../../Redux/reducer/cartSlice';
import PopularProduct from '../Home/PopularProducts/PopularProduct/PopularProduct';

const AllProducts = () => {



    const { products } = useSelector(state => state.products);
    const { searchProduct } = useParams();

    const matchProducts = products.filter(product => product.name?.toLowerCase()?.includes(searchProduct?.toLowerCase()));


    const dispatch = useDispatch();
    // load data
    useEffect(() => {
        dispatch(allPorducts());
    }, [dispatch])

    return (

        <>

            <Navigation />

            <Container className='mt-5 d- '>

                <Row>

                    <h5 className='mb-3'>Products found {matchProducts.length}</h5>

                    {
                        matchProducts.map(product => <PopularProduct
                            key={product._id}
                            product={product}
                        />
                        )
                    }


                </Row>

            </Container>

        </>

    );
};

export default AllProducts;