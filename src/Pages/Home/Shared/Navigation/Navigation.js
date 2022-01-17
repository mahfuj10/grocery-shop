import React from 'react';
import { Container, FormControl, InputGroup, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar style={{ backgroundColor: "#10B981" }}>
            <Container className='d-flex justify-content-around'>

                <article>
                    asaa
                </article>

                <article>
                    <InputGroup>
                        <FormControl
                            style={{ width: 600 }}
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Default
                        </InputGroup.Text>
                    </InputGroup>
                </article>

                <article>
                    ddd
                </article>

            </Container>

        </Navbar>
    );
};

export default Navigation;