import React from 'react';
import useFirebase from '../../Login/Hooks/useFirebase';
import './Dashboard.css';
import { Link, Outlet } from "react-router-dom";
import Footer from '../../Home/Shared/Footer/Footer';


const Dashboard = () => {


    const { user } = useFirebase();

    return (
        <div>
            <div className="sidebar-container">


                <div className="sidebar-logo">

                    <div className='d-flex justify-content-center'>
                        <img src={user.photoURL} className="rounded-circle" alt={user?.displayName} />
                    </div>

                    {user?.displayName}

                </div>
                <ul className="sidebar-navigation">
                    {/* <li className="header">Navigation</li> */}
                    <li>
                        <Link to='/dashboard/addreview'>
                            <i className="fa fa-home" aria-hidden="true"></i> Homepage
                        </Link>
                    </li>
                    <li>
                        <Link to='/dashboard/myorder'>
                            <i className="fa fa-tachometer" aria-hidden="true"></i> My Order
                        </Link>
                    </li>
                    <li>
                        <Link to='/dashboard/'>
                            <i className="fa fa-users" aria-hidden="true"></i> Friends
                        </Link>
                    </li>
                    <li>
                        <Link to='/dashboard/'>
                            <i className="fa fa-cog" aria-hidden="true"></i> Settings
                        </Link>
                    </li>
                    <li>
                        <Link to='/dashboard/'>
                            <i className="fa fa-info-circle" aria-hidden="true"></i> Information
                        </Link>
                    </li>
                    <li>
                        <Link to='/dashboard/managetestimonials'>
                            <i className="fa fa-info-circle" aria-hidden="true"></i> Manage Testimonials
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="content-container">

                <div className="container-fluid">

                    <div className="jumbotron">

                        <div className='w-100 p-4 shadow mb-5' style={{ background: '#2574A9' }}>

                            <nav className='text-light d-flex justify-content-between ml-5'>
                                <Link to="" ></Link>
                                <Link to="/" className='text-white text-decoration-none'>HOME</Link>
                                <Link to="" className='text-white text-decoration-none'>HOME</Link>
                                <Link to="" className='text-white text-decoration-none'>HOME</Link>
                            </nav>

                        </div>

                        <Outlet />

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;