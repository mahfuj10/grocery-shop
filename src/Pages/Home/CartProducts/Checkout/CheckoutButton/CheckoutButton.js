import React from 'react';
import { AiOutlineRollback } from 'react-icons/ai';
import { GrNext } from 'react-icons/gr';

const CheckoutButton = () => {
    return (

        <article className="nav d-flex gap-3 align-items-center h-100 nav-tabs" id="nav-tab" role="tablist">

            <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false" style={{ padding: '5px 20px', border: '1px solid #fff', background: '#10B981', fontWeight: 'bold', color: '#fff' }}><GrNext /> CHECKOUT</button>

        </article>

    );
};

export default CheckoutButton;