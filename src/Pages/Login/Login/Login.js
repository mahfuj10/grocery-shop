import React from 'react';
import { Container } from 'react-bootstrap';

const Login = () => {

    const input = {
        width: '100%',
        padding: 4,
        display: "block",
        marginBottom: 10
    }

    return (

        <Container className='d-flex'>
            <article>
                <img width="400" src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
            </article>
            <article>
                <input style={input} type="text" />
                <input style={input} type="text" />
            </article>
        </Container>
    );
};

export default Login;