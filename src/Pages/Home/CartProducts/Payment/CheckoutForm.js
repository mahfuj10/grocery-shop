import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import useFirebase from '../../../Login/Hooks/useFirebase';
import { Alert } from 'react-bootstrap';
import Particles from 'react-tsparticles';
import { useSelector } from 'react-redux';




const CheckoutForm = ({ price, cartProducts }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [process, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    const { user } = useFirebase();
    const [myorder, setMyOrder] = useState([]);
    const { orderInfo } = useSelector(state => state.products);


    const particlesInit = (main) => {
    };

    const particlesLoaded = (container) => {
    };

    const options = {
        background: {
            color: {
                value: "#fff"
            }
        },
        fullScreen: {
            enable: true,
            zIndex: -1
        },
        interactivity: {
            detectsOn: "window"
        },
        emitters: {
            position: {
                x: 50,
                y: 50
            },
            rate: {
                quantity: 15,
                delay: 0.25
            }
        },
        particles: {
            color: {
                value: ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"]
            },
            move: {
                decay: 0.05,
                direction: "top",
                enable: true,
                gravity: {
                    enable: true,
                    maxSpeed: 150
                },
                outModes: {
                    top: "none",
                    default: "destroy"
                },
                speed: { min: 25, max: 50 }
            },
            number: {
                value: 0
            },
            opacity: {
                value: 1
            },
            rotate: {
                value: {
                    min: 0,
                    max: 360
                },
                direction: "random",
                animation: {
                    enable: true,
                    speed: 30
                }
            },
            tilt: {
                direction: "random",
                enable: true,
                value: {
                    min: 0,
                    max: 360
                },
                animation: {
                    enable: true,
                    speed: 30
                }
            },
            size: {
                value: 8
            },
            roll: {
                darken: {
                    enable: true,
                    value: 25
                },
                enable: true,
                speed: {
                    min: 5,
                    max: 15
                }
            },
            wobble: {
                distance: 30,
                enable: true,
                speed: {
                    min: -7,
                    max: 7
                }
            },
            shape: {
                type: [
                    "circle",
                    "square",
                    "polygon",
                    "rectangle",

                ],
                options: {
                    polygon: [
                        {
                            sides: 5
                        },
                        {
                            sides: 6
                        }
                    ],

                }
            }
        }
    }


    useEffect(() => {
        fetch('https://secret-island-26493.herokuapp.com/getclientsecretid', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                setClientSecret(data.clientSecret);
            });

    }, [price]);

    // pay button
    const payButton = {
        border: '1px solid #98a1bc',
        padding: '5px 30px',
        borderRadius: '25px',
        color: '#fff',
        background: "#1D2029",
        marginTop: '30px'
    }

    const HandleSubmit = async (e) => {

        e.preventDefault();

        if (!stripe || !elements) {
            return;
        };
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        };
        setProcessing(true)

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {

            setSuccess("");
            setError(error.message);
        }
        else {
            setError('');
        };
        // payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {

                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message)
        }
        else {
            setError('');
            setSuccess("Your payment is done");
            setProcessing(false);

            // for (const service of cartProducts) {
            //     delete service._id;
            //     // delete service.reviews;
            //     // setMyOrder([...myorder, { ...service, date: new Date(), status: 'pending', email: user.email, orderInfo }])
            // };
            // const data = {
            //     ...cartProducts, orderInfo
            // }


            const data = [];
            for (const product of cartProducts) {
                data.push({ ...product, orderInfo, date: new Date(), status: 'pending' });
            };


            axios.post('https://secret-island-26493.herokuapp.com/storeOrders', data).then(res => {
                axios.delete(`https://secret-island-26493.herokuapp.com/deletecartproducts?email=${user?.email}`, cartProducts);
            });

            // axios.delete(`https://secret-island-26493.herokuapp.com/deletecartproducts?email=${user?.email}`, cartProducts);

        };
    };


    // const orderInformation = { name: 'mahfj' }
    // const data = {
    //     ...cartProducts, orderInformation
    // }

    return (
        < >
            {
                success && <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={options}
                />
            }

            <form onSubmit={HandleSubmit} className="payment-form" style={{ display: "flex", justifyContent: 'center' }}>

                <article
                    className='shadow-sm'
                    style={{ background: "#F7F7F7", marginTop: 20, padding: 15, width: '500px', marginBottom: 2 }}
                >
                    <CardElement

                        options={{
                            style: {

                                base: {
                                    fontSize: '16px',
                                    color: 'black',
                                    '::placeholder': {
                                        color: '#98a1bc',
                                    },
                                },
                                invalid: {
                                    color: 'red',
                                },
                            },
                        }}
                    />

                    {
                        process && !error ?
                            <button style={payButton} >
                                Loading...
                            </button>
                            :
                            <button style={payButton} type="submit" disabled={!stripe}>
                                Pay $ {price}
                            </button>
                    }


                    {success && <Alert style={{ margin: '20px 0' }} variant="success">{success}</Alert>}
                    {error && <Alert variant="error">{error}</Alert>
                    }

                </article>

            </form>

        </>
    );
};

export default CheckoutForm;