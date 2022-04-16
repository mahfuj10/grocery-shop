import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useFirebase from '../../../Login/Hooks/useFirebase';
import { getAuth, updateEmail } from "firebase/auth";

const AccountSetting = () => {

    const auth = getAuth();

    const { user } = useFirebase();
    const emailRef = useRef(null);

    const handleUpdateEmail = () => {
        const newEmail = emailRef.current.value;
        updateEmail(auth.currentUser, newEmail).then(() => {
            // Email updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });

    }

    return (

        <Container>

            <Row className='shadow p-3'>

                <Col lg={6}>

                    <h6>Email</h6>
                    <h6>{user?.email}</h6>

                    <input ref={emailRef} type="email" />
                    <button onClick={handleUpdateEmail}>Update</button>

                </Col>

            </Row>

        </Container>
    );
};

export default AccountSetting;