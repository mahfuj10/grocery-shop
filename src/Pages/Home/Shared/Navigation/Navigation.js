import React, { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { CgClose } from 'react-icons/cg';
import { MdManageAccounts } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { FiMenu } from 'react-icons/fi';
import '../Navigation/Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {

    const [openNav, setOpenNav] = useState(false);

    function myFunction() {
        var x = document.getElementById("myLinks");
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

    return (
        <>
            <Navbar style={{ backgroundColor: "#10B981", height: 70 }}>
                <section className='d-lg-flex justify-content-around container-lg'>

                    <article className='d-none d-lg-block'>
                        <img width="110" height="40" src="https://kachabazar-store.vercel.app/_next/image?url=%2Flogo%2Flogo-light.svg&w=128&q=75" alt="" />
                    </article>

                    <article>
                        <div className="form-grou has-search ">
                            {/* <span className="fa fa-search form-control-feedback"></span> */}
                            <input className="form-control" id="search-input"
                                style={{ width: '900px' }} placeholder="Search..." />
                        </div>
                    </article>

                    <article className='d-flex text-light align-items-center gap-4'>
                        <h4 type="button " className='d-none d-lg-block'>
                            {openNav && <FiMenu onClick={handaleOpenNav} />}
                            {!openNav && <CgClose
                                onClick={handaleCloseNav}
                            />}
                        </h4>
                        <h4 className='d-none d-lg-block'><FiShoppingCart /></h4>
                        <h4 className='d-none d-lg-block'><MdManageAccounts /></h4>
                    </article>


                </section>
            </Navbar>


            <div className="topnav d-none d-lg-block">
                <div id="myLinks" className='container'>
                    <Link to="/">Home</Link>
                    <a href="#news">Category</a>
                    <a href="#contact">About Us</a>
                    <a href="#contact">Contact Us</a>
                    <Link to="/login">Login</Link>
                    <Link to="/offer">Offers</Link>
                </div>
            </div>
        </>
    );
};

export default Navigation;