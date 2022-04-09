import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { AiOutlineHome } from 'react-icons/ai';
import { BsFillBagPlusFill } from 'react-icons/bs';
import { MdManageAccounts } from 'react-icons/md';
import { BiMenuAltLeft } from 'react-icons/bi';

const BotttomNav = () => {

    return (

        <Nav className='bottom-nav d-lg-none posiion-absolute' style={{ height: "60px", backgroundColor: "#10B981", width: '100%' }}>

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