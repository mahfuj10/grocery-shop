import React from 'react';
import { IoBagAdd } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const CategoryProduct = ({ product }) => {

    const { name, price, image, _id } = product;
    const navigate = useNavigate();

    return (

        <article className='shadow-sm mb-md-4 mb-lg-2' style={{ width: '190px', background: "#FFFFFF", marginBottom: 10, borderRadius: 5 }}>


            <article
                onClick={() => navigate(`/single-details/${_id}`)}
                type="button"
                className='d-flex justify-content-center'
            >
                <img width="140" height="140" src={image} alt={name} />
            </article>

            <h6 style={{ fontSize: 14, paddingLeft: 15 }}>{name}</h6>

            <article className='d-flex align-items-center justify-content-between pb-3'>

                <h6 style={{ color: "#4B5563" }} className='ps-3'>${price}</h6>

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



    );
};

export default CategoryProduct;