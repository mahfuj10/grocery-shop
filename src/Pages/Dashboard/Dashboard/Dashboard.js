import React, { useEffect, useRef } from 'react';
import useFirebase from '../../Login/Hooks/useFirebase';
import { Link, Outlet } from "react-router-dom";
import Footer from '../../Home/Shared/Footer/Footer';
import '../Dashboard/Dashboard.css';
import { userProfile } from '../../../Redux/reducer/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import BotttomNav from '../../Home/Shared/BotttomNav/BotttomNav';
import './DashboardSidebar.css';
import { GiTireIronCross } from 'react-icons/gi';
import { BiMenuAltLeft } from 'react-icons/bi';

const Dashboard = () => {


    const { handaleLogOut } = useFirebase();
    const dispatch = useDispatch();
    const { myProfile, user } = useSelector(state => state.products);
    const sidebarRef = useRef(null);

    // load user
    useEffect(() => {
        dispatch(userProfile(user?.uid))
    }, [])


    // handle Open Sidebar
    const handleOpenSidebar = () => {
        sidebarRef.current.classList.add('activeNav');
    };

    // handleCloseSideNav
    const handleCloseSideNav = () => {
        // sidebarRef.current.classList.add('removeSidebar');
        sidebarRef.current.classList.remove('activeNav');
    };

    // logOutBtn
    const logOutBtn = {
        width: '98%',
        padding: '7px',
        fontWeight: 'bold',
        letterSpacing: 2,
        color: "#2574A9",
        background: 'none',
        border: '2px solid #2574A9',
        marginTop: 20
    };

    return (
        <>
            <section className="sidebar-container">


                <article className="sidebar-logo d-grid justify-content-center">

                    <article className='d-flex justify-content-center'>
                        <img src={myProfile?.image} style={{ height: 100, width: 100, borderRadius: '50%' }} alt={myProfile?.name} />
                    </article>

                    {myProfile?.name}

                </article>



                <ul className="sidebar-navigation">

                    <li className='mt-3'>
                        <Link to='/' >
                            <i className="fa fa-home" aria-hidden="true"></i> Homepage
                        </Link>
                    </li>


                    <li>
                        <Link to='/dashboard/myprofile'>
                            <i class="fa fa-user" ></i>   My Profile
                        </Link>
                    </li>



                    <li>
                        <Link to='/dashboard/myorder'>
                            <i className="fa fa-tachometer" aria-hidden="true"></i> My Order
                        </Link>
                    </li>

                    <li>
                        <Link to='/dashboard/addreview'>
                            <i className="fa fa-plus" aria-hidden="true"></i> Add Testimonial</Link>
                    </li>

                    {
                        myProfile?.role === 'admin' && <aside>


                            <li>
                                <Link to='/dashboard/managetestimonials'>
                                    <i className="fa fa-info-circle" aria-hidden="true"></i> Manage Reviews
                                </Link>
                            </li>

                            <li>
                                <Link to='/dashboard/addproduct'>
                                    <i className="fa fa-plus" aria-hidden="true"></i> Add Product
                                </Link>
                            </li>

                            <li>
                                <Link to='/dashboard/manageproduct'>
                                    <i className="fa fa-bars" aria-hidden="true"></i> Manage Products
                                </Link>
                            </li>

                            <li>
                                <Link to='/dashboard/makeadmin'>
                                    <i class="fa fa-user-plus"></i> Make Admin
                                </Link>
                            </li>

                            <li>
                                <Link to='/dashboard/manageorders'>
                                    <i class="fa fa-check"></i> Manage Orders
                                </Link>
                            </li>

                        </aside>
                    }

                    <button style={logOutBtn} onClick={handaleLogOut}>LOG OUT</button>

                </ul>


            </section>





            <section className="content-container">

                <article className="container-fluid">

                    <article className="jumbotron">

                        <article className='w-100 p-4 shadow mb-5 ' style={{ background: '#2574A9' }}>

                            <nav className='text-light d-flex justify-content-between ml-5'>


                                <h4 onClick={handleOpenSidebar} type='button'>   <BiMenuAltLeft /></h4>

                                <Link to="" ></Link>
                                <Link to="/" className='text-white text-decoration-none'>HOME</Link>
                                <Link to="/category=/Fruits" className='text-white text-decoration-none'>PRODUCTS</Link>
                                <Link to="/contactus" className='text-white text-decoration-none'>CONTACT</Link>
                            </nav>

                        </article>

                        <Outlet />

                    </article>

                </article>
            </section>

            <section ref={sidebarRef} id='side_bar'>

                <h6 onClick={handleCloseSideNav} className='text-white my-4 d-flex justify-content-center' type='button'>
                    <GiTireIronCross />
                </h6>

                <article className="bg-white p-3 d-grid justify-content-center">

                    <article className='d-flex justify-content-center'>
                        <img src={myProfile?.image} style={{ height: 100, width: 100, borderRadius: '50%' }} alt={myProfile?.name} />
                    </article>

                    <h4 className='mt-2'>{myProfile?.name}</h4>

                </article>

                <Link to='/'>
                    <i className="fa fa-home" aria-hidden="true"></i> Homepage
                </Link>

                <Link to='/dashboard/addreview'>
                    <i className="fa fa-plus" aria-hidden="true"></i> Add Testimonial</Link>

                <Link to='/dashboard/myprofile'>
                    <i class="fa fa-user" ></i>   My Profile
                </Link>

                <Link to='/dashboard/myorder'>
                    <i className="fa fa-tachometer" aria-hidden="true"></i> My Order
                </Link>

                <Link to='/dashboard/managetestimonials'>
                    <i className="fa fa-info-circle" aria-hidden="true"></i> Manage Reviews
                </Link>

                <Link to='/dashboard/addproduct'>
                    <i className="fa fa-plus" aria-hidden="true"></i> Add Product
                </Link>

                <Link to='/dashboard/manageproduct'>
                    <i className="fa fa-bars" aria-hidden="true"></i> Manage Products
                </Link>

                <Link to='/dashboard/makeadmin'>
                    <i class="fa fa-user-plus"></i> Make Admin
                </Link>

                <Link to='/dashboard/manageorders'>
                    <i class="fa fa-check"></i> Manage Orders
                </Link>

                <button className='mb-5 mt-0' style={logOutBtn} onClick={handaleLogOut}>LOG OUT</button>

                <br /><br />
            </section>

            {/* bottom nav */}
            <BotttomNav />
        </>
    );
};

export default Dashboard;