import React, { useEffect, useState } from 'react';
import { Col, Dropdown } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import banner1 from '../../../../images/banner-1.jpg';
import banner2 from '../../../../images/banner-2.jpg';
import CategoryProduct from '../CategoryProduct/CategoryProduct';

const CategoriesProducts = () => {

    const [products, setProducts] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const { origin } = useParams();
    const [next, setNext] = useState(5);
    const postsPerPage = 10;
    const [loading, setLoading] = useState(true);

    const fetchProducts = (start, end) => {
        fetch(`https://secret-island-26493.herokuapp.com/products/${origin}`)
            .then(res => res.json())
            .then(data => {
                setQuantity(data.length);
                setProducts(data.slice(start, end))
                setLoading(false);
            });
    };

    // data loaded
    useEffect(() => {
        fetchProducts(0, postsPerPage)
    }, [origin]);

    // load button
    const loadButton = {
        background: "#10B981",
        border: '1px solid #10B981',
        padding: '8px 25px',
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 50
    };

    const handleLoadProducts = () => {
        fetchProducts(0, next + postsPerPage);
        setNext(next + postsPerPage)
    }

    return (

        <section style={{ marginTop: 55 }}>

            <article
                className='d-flex mb-0'
                style={{ gap: 60 }}
            >
                <Col lg={6}>
                    <img src={banner1} className="img-fluid rounded-3" alt="" />
                </Col>
                <Col lg={6}>
                    <img src={banner2} className="img-fluid rounded-3" alt="" />
                </Col>
            </article>


            <article
                style={{ width: '106%' }}
                className=' shadow-sm mt-4 d-flex justify-content-between align-items-center mb-3 p-2'
            >

                <span>Total <strong>{quantity}</strong> items Found </span>

                <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1"
                        variant="success">
                        Sort By Price
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="warning">
                        <Dropdown.Item href="#/action-1" active>
                            Action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </article>

            {
                loading ?
                    <article className='d-flex justify-content-center' >
                        <ScaleLoader color="#10B981" />
                    </article>
                    :
                    <article
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', columnGap: '20px', rowGap: '20px', marginTop: 30, marginBottom: 30 }}
                    >
                        {
                            products.map(product => <CategoryProduct
                                key={product._id}
                                product={product}
                            />
                            )
                        }
                    </article>}

            {
                products.length > 0 && products.length !== quantity && <article className='d-flex justify-content-center mt-4'>
                    <button
                        onClick={handleLoadProducts}
                        className='shadow-sm'
                        style={loadButton}
                    >
                        LOAD MORE
                    </button>
                </article>
            }


        </section>
    );
};

export default CategoriesProducts;