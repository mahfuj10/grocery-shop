import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { AiOutlineHome } from 'react-icons/ai';
import { BsFillBagPlusFill } from 'react-icons/bs';
import { MdManageAccounts } from 'react-icons/md';
import { BiMenuAltLeft } from 'react-icons/bi';
import '../Navigation/Navigation.css';

const BotttomNav = () => {

    return (

        <Nav className='bottom-nav' style={{ height: "60px", backgroundColor: "#10B981" }}>

            <Container className='d-flex justify-content-between'>

                <button>
                    <BiMenuAltLeft />
                </button>
                <button>
                    <AiOutlineHome />
                </button>
                <button>
                    <BsFillBagPlusFill />
                </button>
                <button>
                    <MdManageAccounts />
                </button>

            </Container>

        </Nav>
    );
};

export default BotttomNav;