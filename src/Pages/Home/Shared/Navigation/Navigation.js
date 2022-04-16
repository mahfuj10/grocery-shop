import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { CgClose } from 'react-icons/cg';
import { MdManageAccounts } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { FiMenu } from 'react-icons/fi';
import './Navigation.css';
import './Nav.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import CartDrawer from '../../CartProducts/CartDrawer/CartDrawer';
import useFirebase from '../../../Login/Hooks/useFirebase';
import BotttomNav from '../BotttomNav/BotttomNav';

const Navigation = () => {

    const [openNav, setOpenNav] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { user, handaleLogOut } = useFirebase();
    const navigate = useNavigate();

    function myFunction() {
        const x = document.getElementById("myLinks");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    const handaleOpenNav = () => {
        myFunction();
        setOpenNav(false)
    };
    const handaleCloseNav = () => {
        myFunction();
        setOpenNav(true)
    };


    // handleSearchProducts
    const handleSearchProducts = e => {

        console.log(e.keyCode);
        if (e.target.value === '') {
            return;
        }
        else if (e.keyCode === 13) {

            e.preventDefault();
            navigate(`/category/${e.target.value}`);
        }
    };


    // logOutBtn
    const logOutBtn = {
        padding: '0 10px',
        fontWeight: 'bold',
        letterSpacing: 2,
        color: "#fff",
        background: '#2574A9',
        border: '1px solid #2574A9',
    };


    return (
        <>
            <Navbar style={{ backgroundColor: "#2574A9", height: 70, }}>

                <section className='d-lg-flex  justify-content-around container-lg'>

                    <article className='d-none d-lg-block'>
                        <img width="110" height="40" src="https://kachabazar-store.vercel.app/_next/image?url=%2Flogo%2Flogo-light.svg&w=128&q=75" alt="" />
                    </article>

                    <article className="form-grou has-search">
                        <input onKeyUp={handleSearchProducts} className='form-control input'
                            placeholder="Search..." />
                    </article>

                    <article className='d-flex text-light align-items-center gap-4'>
                        <h4 className='d-none d-lg-block'>
                            {openNav && <FiMenu type="button" onClick={handaleOpenNav} />}
                            {!openNav && <CgClose type="button"
                                onClick={handaleCloseNav}
                            />}
                        </h4>
                        <h4 type="button" onClick={handleShow} className='d-none d-lg-block'><FiShoppingCart /></h4>

                        {
                            user.email ?
                                <img width="40"
                                    className='rounded-circle d-none d-lg-block'
                                    type="button"
                                    onClick={() => navigate('/dashboard')}
                                    alt={user.displayName}
                                    src={user.photoURL}
                                />
                                :
                                <h4 className='d-none d-lg-block'>
                                    <Link to='/login' className='text-white'>
                                        <MdManageAccounts ype='button' />
                                    </Link></h4>
                        }

                    </article>


                </section>
            </Navbar>


            <article className="topnav  d-none d-lg-block ">

                <article id="myLinks" className='container'>



                    <Link to="/">Home</Link>


                    <NavLink to="/contactus">Contact Us</NavLink>
                    <NavLink to="/aboutus">About Us</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/offer">Offers</NavLink>
                    <NavLink to="/dashboard/myorder">My Orders</NavLink>

                    <NavLink to="/dashboard">Dashboard</NavLink>


                    {user.email && < button style={logOutBtn} onClick={() => handaleLogOut()}>Log Out</button>}

                </article>

            </article>


            {/* 
        <Dropdown className='d-inline'>

                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>

                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>

                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>

                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>

                    </Dropdown.Menu>

        </Dropdown>
*/}

            {/* cart drawer */}
            <CartDrawer
                handleShow={handleShow}
                show={show}
                handleClose={handleClose}
                placement="top"
                name="top"
            />

            {/* bottom nav */}
            <BotttomNav
                handleShow={handleShow}
            />

        </>
    );
};

export default Navigation;