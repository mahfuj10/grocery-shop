import React from 'react';
import useFirebase from '../../../Login/Hooks/useFirebase';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BarLoader } from 'react-spinners';

const PrivateRoute = ({ children }) => {

    let location = useLocation();
    const { user } = useSelector(state => state.products);
    const { loading } = useFirebase()

    // loading
    if (loading) {
        return (

            <article className='d-flex justify-content-center align-items-center ' style={{ height: '100vh' }}>
                <BarLoader color="black" />
            </article>
        );
    }
    return (
        <>
            {user.email ? children : <Navigate state={{ from: location }} to="/login"></Navigate>}

        </>
    );
};

export default PrivateRoute;