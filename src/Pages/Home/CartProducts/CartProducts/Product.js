import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFormCart } from '../../../../Redux/reducer/cartSlice';

const Product = ({ product }) => {

    const { name, price, image, _id } = product;
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const state = useSelector(state => state.products.cartProducts);



    // delete cart product
    const handleDeleteProduct = id => {


        Swal.fire({
            text: "Remove from cart ?",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'REMOVE'
        }).then((result) => {
            if (result.isConfirmed) {
                setLoading(false);
                const uri = `https://secret-island-26493.herokuapp.com/deleteCartProduct/${id}`;
                fetch(uri, {
                    method: "DELETE",
                }).then().then(data => {
                    if (data.deleteCount > 0) {
                        setLoading(true);
                    }
                })
            }
        })



    };


    return (
        <>
            <article className='d-flex shadow-sm p-3 rounded-3 gap-4 align-items-center' style={{ background: '#F9FAFB' }}>

                <article>
                    <img width="50" className='rounded-circle' height="50" src={image} alt="" />
                </article>

                <article>
                    <h6 style={{ fontSize: 15 }}>{name}</h6>
                    <h6>${price}</h6>
                </article>



                {
                    !loading ? <article>
                        <Spinner animation="border" variant="success" />
                    </article>
                        :
                        <article>
                            <RiDeleteBin6Line
                                onClick={() => handleDeleteProduct(_id)}
                                type="button"
                                style={{ fontSize: 22, color: "#ED4444" }}
                            />
                        </article>
                }

            </article>
        </>
    );
};

export default Product;