import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { GrArticle } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';


const Category = () => {

    const [categorys, setCategorys] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("category.json")
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, []);

    const handleNavigateRoute = category => {
        navigate(`/category=/${category}`)
    }
    return (

        <section className='container-md' style={{ marginTop: 90 }}>

            <h4 className='text-center '>Featured Categories</h4>
            <p className='text-center'>Choose your necessary products from this feature categories.</p>
            <Row className='mt-4'>
                {
                    categorys.map(category => <Col key={category.name} xs={6} sm={4} lg={2} md={4} >

                        <article
                            onClick={() => handleNavigateRoute(category.category)}
                            type="button"
                            style={{
                                borderRadius: 8,
                                width: 208,
                                border: '1px solid #E5E7EB', padding: 10,
                                margin: "5px 0"
                            }}
                            className='d-flex align-items-center'>

                            <img src={category.image} height="35" width="35" alt="categoryImage" />

                            <h6 style={{ fontSize: 14, paddingLeft: 7, marginTop: 8 }}>{category.name}</h6>

                        </article>
                    </Col>
                    )
                }
            </Row>
        </section>
    );
};

export default Category;