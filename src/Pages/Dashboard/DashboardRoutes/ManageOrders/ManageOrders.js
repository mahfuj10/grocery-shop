import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { SyncLoader } from 'react-spinners';
import { allOrdersData } from '../../../../Redux/reducer/cartSlice';

const ManageOrders = () => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const { allOrderDataLoading, allOrders } = useSelector(state => state.products);

    let status;
    const getStatusValue = (e) => {
        status = e.target.value;
    };
    const handleStatusChange = (id) => {
        if (status) {
            setLoading(false);
            axios.put(`https://secret-island-26493.herokuapp.com/updatestatus?id=${id}`, { status }).then(() => {
                setLoading(true);
            });
        }
    };

    useEffect(() => {
        dispatch(allOrdersData());
    }, [dispatch, loading])

    // loading
    if (allOrderDataLoading) {
        return <h6 className='text-center'><SyncLoader color='#2574A9' /></h6>
    };

    return (

        <Container>

            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Order Product</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {

                        allOrders?.map((order, index) => <tr
                            key={order._id}
                        >
                            <td>{index + 1}</td>
                            <td>{order.name}</td>
                            <td>{order.orderInfo?.name}</td>
                            <td>{order.email}</td>
                            <td>{order.orderInfo?.number}</td>
                            <td>{order.orderInfo?.address}</td>

                            <td className='d-flex gap-2'>

                                {
                                    order.status === 'Shipped' ?
                                        <td>{order?.status}</td>

                                        :
                                        <Form.Select onChange={getStatusValue} onClick={() => handleStatusChange(order._id)} size="md" >
                                            <option value={order.status}>{order.status}</option>
                                            <option value="On going"> On going</option>
                                            <option value="Shipped">Shipped</option>
                                        </Form.Select>


                                }

                            </td>

                        </tr>
                        )
                    }

                </tbody>

            </Table>

        </Container>
    );
};

export default ManageOrders;