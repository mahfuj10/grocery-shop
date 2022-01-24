import React from 'react';
import { BsTruck } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import { FiDollarSign } from 'react-icons/fi';
import { FaExchangeAlt } from 'react-icons/fa';
import { BsShieldSlash } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import '../SingleProduct.css';

const DeliveryDetails = () => {

    return (

        <section className='delivery-details mb-4 mb-lg-0 shadow-sm'>

            <article>
                <h6><BsTruck /></h6>
                <p>Free shipping apply to all orders over shipping $100</p>
            </article>

            <article>
                <h6><AiOutlineHome /></h6>
                <p>Home Delivery within <b>1 Hour</b></p>
            </article>

            <article>
                <h6> <FiDollarSign /></h6>
                <p>Cash on Delivery Available</p>
            </article>

            <article>
                <h6> <FaExchangeAlt /></h6>
                <p>7 Days returns money back guarantee</p>
            </article>

            <article>
                <h6><BsShieldSlash /></h6>
                <p>Warranty not available this item</p>
            </article>

            <article>
                <h6> <FiSun /></h6>
                <p>Guaranteed 100% organic from natural products.</p>
            </article>

            <article>
                <h6> <IoLocationOutline /></h6>
                <p>Delivery from our pick point Cecilia Chapman, 561-4535 Nulla LA, United States 96522.</p>
            </article>

        </section>
    );
};

export default DeliveryDetails;