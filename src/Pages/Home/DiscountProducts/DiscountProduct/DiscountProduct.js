import React from 'react';
import { Badge, Col } from 'react-bootstrap';
import { IoBagAdd } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const DiscountProduct = ({ product }) => {

    const { name, price, image, discount, oldPrice, _id } = product;
    const navigate = useNavigate();
    return (

        <Col lg={2} sm={6} md={4} xs={6}>

            <article className='shadow-sm' style={{ width: '210px', background: "#FFFFFF", marginBottom: 10, borderRadius: 5 }}>



                <Badge bg="warning" className='position-absolute mt-2 ms-2 mb-md-4 mb-lg-2' text="danger">
                    {discount}% Off
                </Badge>

                <article
                    onClick={() => navigate(`/single-details/${_id}`)}
                    type="button"
                    className='d-flex justify-content-center'
                >
                    <img width="160" height="160" src={image} alt="foodImage" />
                </article>

                <h6 style={{ fontSize: 14, paddingLeft: 15 }}>{name}</h6>

                <article className='d-flex align-items-center justify-content-between pb-3'>

                    <article className='d-flex align-items-center gap-2'>

                        <h6 style={{ color: "#4B5563" }} className='ps-3'>${price}</h6>

                        <h6 style={{ fontSize: 13, color: "#9CA3AF" }}>
                            <s>${oldPrice}</s>
                        </h6>

                    </article>

                    <button
                        style={{
                            borderRadius: 5,
                            background: "#FFFFFF", border: "1px solid #E5E7EB", marginRight: 10, color: "#10B981"
                        }}
                    >
                        <h6>  <IoBagAdd /></h6>
                    </button>
                </article>

            </article>
        </Col>
    );
};

export default DiscountProduct;