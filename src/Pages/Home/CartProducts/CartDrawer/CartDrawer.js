import { useEffect, useState } from "react";
import { Col, Offcanvas, Row } from "react-bootstrap";
import useFirebase from "../../../Login/Hooks/useFirebase";
import CartProducts from "../CartProducts/CartProducts";
import Checkout from "../Checkout/Checkout/Checkout";
import CheckoutForm from "../Checkout/CheckoutForm/CheckoutForm";
import Payment from "../Payment/Payment";

function CartDrawer({ name, handleShow, show, handleClose, ...props }) {


    const [cartProducts, setCartProducts] = useState([]);
    const { user } = useFirebase();

    let totalPrice = 0;
    for (const product of cartProducts) {
        totalPrice = parseInt(product.price) + totalPrice;
    };

    useEffect(() => {
        fetch(`http://localhost:5000/myCartProducts/${user.email}`).then(res => res.json()).then(data => setCartProducts(data));
    }, [cartProducts, user]);



    return (


        <>

            <Offcanvas style={{ height: '100%', backroundColor: "red" }} show={show} onHide={handleClose} {...props}>

                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="fw-bold">My cart</Offcanvas.Title>
                    {/* <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                        <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
                    </div> */}
                </Offcanvas.Header>
                <Offcanvas.Body>

                    <div className="tab-content" id="nav-tabContent">




                        <article className="tab-pane fade show active " id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                            <Row>

                                <Col lg={10}>
                                    <CartProducts cartProducts={cartProducts} />
                                </Col>

                                <Col lg={2}>

                                    <Checkout
                                        totalPrice={totalPrice}
                                        items={cartProducts.length}
                                    />
                                </Col>
                            </Row>

                        </article>

                        <article className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <CheckoutForm price={totalPrice} cartProducts={cartProducts} />
                        </article>

                        <article className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">

                            <Payment
                                cartProducts={cartProducts}
                                totalPrice={totalPrice}
                            />


                        </article>

                    </div>

                </Offcanvas.Body>

            </Offcanvas>
        </>
    );
}
export default CartDrawer;