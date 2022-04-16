import React, { useRef, useState } from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import Navigation from '../../Home/Shared/Navigation/Navigation';
import useFirebase from '../Hooks/useFirebase';
import { FcGoogle } from 'react-icons/fc';
import { FaUnlock } from 'react-icons/fa';
import './LoginForm.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { googleSign, registerUser, userLogin, error, loading } = useFirebase();
    const [login, setLogin] = useState(false);
    const emailRef = useRef(null);
    const passRef = useRef(null);
    const nameRef = useRef(null);

    // providerButton
    const providerButton = {
        border: '1px solid #DDDDDD',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: ' 0 5px',
        height: '40px',
        width: '40px',
        background: '#fff'
    };

    // inputStyle
    const inputStyle = {
        border: '1px solid #DDDDDD',
        display: 'block',
        background: "#DDDDDD",
        height: 50,
        width: '90%',
        marginBottom: 0,
    };

    //  handleRegisterUser
    const handleRegisterUser = () => {
        // alert('helo')
        registerUser(nameRef.current.value, emailRef.current.value, passRef.current.value, navigate, location);
    };

    // handle login user
    const handleLoginUser = () => {
        // email, password, location, navigate
        userLogin(emailRef.current.value, passRef.current.value, location, navigate);
    };

    return (

        <>
            <Navigation />


            <article className='position-absolute shadow p-3  mt-5'>
                <h6>Admin Email:- admin@gmail.com</h6>
                <h6>Admin Pass:- admin##</h6>
            </article>

            <Container style={{ height: '90vh', display: 'grid', alignItems: 'center' }}>



                <Row className='shadow   login_form ' style={{ height: '530px' }} >

                    {/* <h1>{error}</h1> */}

                    <Col xs={12} md={4} lg={6} className="p-5 p-md-0" style={{ background: "#2574A9", display: 'grid', alignItems: 'center' }} >


                        {
                            !login ?

                                <article className='signIn_overlay'>

                                    <h2 className='text-center  fw-bold text-white mb-3'>Welcome Friend !</h2>

                                    <span className='w-100 d-flex justify-content-center'>
                                        <p className='text-center fw-bold text-white w-50 '>Enter your personal details and start journey with us. </p>
                                    </span>

                                    <span className='w-100 d-flex justify-content-center'>
                                        <button className='sinIn_button' onClick={() => setLogin(true)}>SIGN IN</button>
                                    </span>

                                </article>
                                :
                                <article className='signUp_overlay'>

                                    <h2 className='text-center  fw-bold text-white mb-3'>Welcome Back!</h2>

                                    <span className='w-100 d-flex justify-content-center'>
                                        <p className='text-center fw-bold text-white w-50 '>To keep connected with us please login with your personal info </p>
                                    </span>

                                    <span className='w-100 d-flex justify-content-center'>
                                        <button className='sinIn_button' onClick={() => setLogin(false)}>SIGN UP</button>
                                    </span>

                                </article>
                        }

                        {
                            error &&
                            <Alert className='position-absolute  ' variant="danger" style={{ marginTop: '25%' }}>
                                {error}
                            </Alert>
                        }

                    </Col>

                    <Col xs={12} md={8} lg={6} className='pt-5 '>

                        {
                            !login ?
                                <h2 className='fw-bolder text-center '>Create Account</h2>
                                :
                                <h2 className='fw-bolder text-center '>Please Login</h2>
                        }

                        <span className='d-flex justify-content-center mt-3'>

                            <button style={providerButton} onClick={() => googleSign(navigate, location)}>
                                <FcGoogle />
                            </button>

                        </span>

                        <small className='text-center d-block mt-2 text-secondary'>or use your email for registration</small>

                        <article style={{ margin: 'auto', display: 'flex', justifyContent: 'center' }}>

                            <article class="input-icons mt-4 mb-5" style={{ width: 400, }}>

                                {
                                    !login && <span>
                                        <i class="fa fa-user icon"></i>
                                        <input ref={nameRef} style={inputStyle} placeholder='Name' class="input-field" type="text" /><br />
                                    </span>

                                }

                                <i class="fa fa-envelope icon"></i>

                                <input ref={emailRef} style={inputStyle} placeholder='Email' class="input-field" type="email" />
                                <br />

                                <i ><FaUnlock className='mt-3 ms-3' /></i>

                                <input ref={passRef} style={inputStyle} placeholder='Password' class="input-field" type="password" />

                                <span className='d-flex justify-content-center'>

                                    {
                                        !login ?
                                            <span>
                                                {
                                                    !loading ?

                                                        <button className='login_button' onClick={handleRegisterUser}>SIGN UP</button>
                                                        :
                                                        <button className='login_button'>Loading...</button>
                                                }
                                            </span>

                                            :
                                            <span>
                                                {
                                                    !loading ?
                                                        <button className='login_button' onClick={handleLoginUser}>SIGN IN</button>
                                                        :
                                                        <button className='login_button' >Loading...</button>

                                                }
                                            </span>


                                    }

                                </span>

                            </article>

                        </article>



                    </Col>

                </Row>

            </Container>

        </>
    );
};

export default Login;