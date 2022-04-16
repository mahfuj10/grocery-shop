import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { AiOutlineHome } from 'react-icons/ai';
import { BsFillBagPlusFill } from 'react-icons/bs';
import { MdManageAccounts } from 'react-icons/md';
import { BiMenuAltLeft } from 'react-icons/bi';
import useFirebase from '../../../Login/Hooks/useFirebase';
import { Link } from 'react-router-dom';



const BotttomNav = ({ handleShow }) => {

    const { user } = useFirebase();

    return (

        <Nav className='bottom-nav d-lg-none posiion-absolute fixed-bottom'
            style={{
                height: "60px",
                backgroundColor: "#2574A9",
                width: '100%'
            }}>

            <Container className='d-flex justify-content-between'>

                <button>
                    <Link to='/' style={{ color: "#fff" }}>  <BiMenuAltLeft /></Link>
                </button>

                <button>
                    <Link to='/' style={{ color: "#fff" }}>  <AiOutlineHome /></Link>
                </button>

                <button>
                    <BsFillBagPlusFill onClick={handleShow} />
                </button>

                <button>

                    {
                        !user.email
                            ?
                            <MdManageAccounts />
                            :
                            <Link to='/dashboard'> <img width="40" className='rounded-circle' src={user.photoURL} alt={user.displayName} /></Link>
                    }

                </button>

            </Container>

        </Nav>
    );
};

export default BotttomNav;