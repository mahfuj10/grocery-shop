import { Modal } from 'react-bootstrap';
import React, { useEffect, useRef } from 'react';
import '../WriteReview/UpdateBox.css';
import { useDispatch } from 'react-redux';
import { updateProductCategory, updateProductName, updateProductPrice } from '../../../../Redux/reducer/cartSlice';

const UpdateModalBox = (props) => {

    const { name, price, category, _id } = props.product;
    const dispatch = useDispatch();
    const nameRef = useRef(null);
    const priceRef = useRef(null);
    const categoryRef = useRef(null);

    // updateProductName
    const handleUpdateProductName = () => {
        const name = nameRef.current.value;
        dispatch(updateProductName({ _id, name }));
        props.handleCloseUpdateModal();
    };

    // update Product Price
    const handleUpdateProductPrice = () => {
        const price = priceRef.current.value;
        dispatch(updateProductPrice({ _id, price }));
        props.handleCloseUpdateModal();
    };


    // update Product category
    const handleUpdateProductCategory = () => {
        const category = categoryRef.current.value;
        dispatch(updateProductCategory({ _id, category }));
        props.handleCloseUpdateModal();
    };




    return (

        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>

                <Modal.Title id="contained-modal-title-vcenter">
                    <h6>  wanna update product details? fill the below box !</h6>

                </Modal.Title>

            </Modal.Header>

            <Modal.Body className='update_box '>

                <article className="form-group">
                    <input defaultValue={name} ref={nameRef} className="form-field" />
                    <span type="button" onClick={handleUpdateProductName}>UPDATE NAME</span>
                </article>

                <article className="form-group">
                    <input defaultValue={price} ref={priceRef} className="form-field" type="number" />
                    <span type="button" onClick={handleUpdateProductPrice}>UPDATE PRICE</span>
                </article>

                <article className="form-group">
                    <input className="form-field" ref={categoryRef} defaultValue={category} />
                    <span type="button" onClick={handleUpdateProductCategory}>UPDATE CATEGORY</span>
                </article>

            </Modal.Body>

        </Modal>
    );
};

export default UpdateModalBox;