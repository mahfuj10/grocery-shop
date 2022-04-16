import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import CheckoutProducts from '../CheckoutProducts/CheckoutProducts';
import CheckoutButton from '../CheckoutButton/CheckoutButton';
import { useForm } from "react-hook-form";
import useFirebase from '../../../../Login/Hooks/useFirebase';
import { useDispatch, useSelector } from 'react-redux';
import { saveOrderInfo, userProfile } from '../../../../../Redux/reducer/cartSlice';
import { Link } from 'react-router-dom';


const CheckoutForm = ({ cartProducts, price }) => {

    const { user } = useFirebase();
    const { register, handleSubmit } = useForm();
    const { myProfile, myProfileLoading } = useSelector(state => state.products);

    const dispatch = useDispatch();

    const onSubmit = data => {
        // const
        dispatch(saveOrderInfo(data))
    };

    useEffect(() => {
        dispatch(userProfile(user?.uid))
    }, [user.uid])

    // input style
    const inputStyle = {
        width: '100%',
        padding: 6,
        marginBottom: 10,
        border: '1px solid #10B981'
    };
    const label = {
        fontWeight: 'bold',
        letterSpacing: 2,
        fontSize: 14,
        marginBottom: 4
    };

    return (

        <Row>

            <Col lg={6}>

                <form onSubmit={handleSubmit(onSubmit)}>


                    <label style={label}> NAME <span>*</span></label>
                    <input style={inputStyle} defaultValue={user.displayName}  {...register("name")} type="text" />

                    <label style={label}> EMAIL <span>*</span></label>
                    <input disabled style={inputStyle} value={user.email} type="email" />

                    {
                        !myProfile?.number ?

                            <article>

                                <label style={label} > PHONE NUMBER <span>*</span></label>

                                <input style={inputStyle}  {...register("number", { required: true })} type="number" />

                                <label style={label}> ADDRESS <span>*</span></label>
                                <textarea   {...register("address", { required: true })} style={inputStyle} rows="4"></textarea>


                            </article>
                            :
                            <article>

                                <label style={label} > PHONE NUMBER <span>*</span></label>

                                <input value={myProfile?.number} style={inputStyle} disabled type="number" />

                                <label style={label}> ADDRESS <span>*</span></label>
                                <textarea disabled value={myProfile?.address} style={inputStyle} rows="4"></textarea>

                                <span>Wan to update ? <Link to=''>Click here !</Link></span>
                            </article>
                    }

                </form>

            </Col>

            <Col lg={1}></Col>

            <Col lg={2}>
                <CheckoutProducts price={price} cartProducts={cartProducts} />
            </Col>

            <Col lg={1}></Col>

            <Col lg={2} >
                <CheckoutButton />
            </Col>

        </Row>
    );
};

export default CheckoutForm;