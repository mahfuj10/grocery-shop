import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { SyncLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import './MakeAdmin.css';

const MakeAdmin = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const successMessage = message => toast(message);

    useEffect(() => {
        axios.get('https://secret-island-26493.herokuapp.com/users').then(res => {
            setUsers(res.data)
        });
    }, [loading]);

    // handleMakeAdmin
    const handleMakeAdmin = email => {
        setLoading(true);
        axios.put(`https://secret-island-26493.herokuapp.com/makeadmin?email=${email}`).then(() => {
            successMessage(`${email} admin made successfully.`);
            setLoading(false)
        })
    };

    // handleRemoveAdmin
    const handleRemoveAdmin = email => {
        setLoading(true);
        axios.put(`https://secret-island-26493.herokuapp.com/removeadminrole?email=${email}`).then(() => {
            successMessage(`${email} remove from admin.`);
            setLoading(false);
        });
    };

    // button style
    const makeAdminBtn = {
        background: '#fff',
        border: '2px solid #2574A9',
        fontWeight: 'bold',
        padding: '5px 15px',
        borderRadius: 25,
        color: "#2574A9"
    };


    // loading
    if (users?.length === 0) {
        return <h6 className='text-center'><SyncLoader color='#2574A9' /></h6>
    };

    return (

        <Container className='d-flex flex-wrap gap-5'>
            <ToastContainer />
            {
                users.map(user => <article key={user._id} className='shadow px-3 py-3 d-flex gap-3 rounded-3 mb-3'>

                    <span>
                        <img width='100' height='100' src={user?.image} alt="" />
                    </span>

                    <span>

                        <h5>{user?.name}</h5>
                        <p>{user?.email}</p>

                        {
                            user?.role === 'admin' ? <button onClick={() => handleRemoveAdmin(user.email)} style={makeAdminBtn}>
                                Remove Admin
                            </button>
                                :
                                <button onClick={() => handleMakeAdmin(user.email)} style={makeAdminBtn}>
                                    Make Admin
                                </button>
                        }
                    </span>

                </article>
                )
            }

        </Container>
    );
};

export default MakeAdmin;