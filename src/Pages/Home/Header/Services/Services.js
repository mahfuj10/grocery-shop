import React from 'react';
import { GrDeliver } from 'react-icons/gr';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { ImGift } from 'react-icons/im';
import { Container } from 'react-bootstrap';


const Services = () => {

    const services = [
        {
            "icon": "fas fa-truck",
            "name": "Free Shipping",
            "desc": "From $20.00",
            "color": "#FEE2E2"
        },
        {
            "icon": "fas fa-phone-volume",
            "name": "Support 24/7",
            "desc": "At Anytime",
            "color": "#E0E7FF"
        },
        {
            "icon": "far fa-credit-card",
            "name": "Secure Payment",
            "desc": "Totally Safe",
            "color": "#FDF2C6"
        },
        {
            "icon": "fas fa-gift",
            "name": "Latest Offer",
            "desc": "Upto 20% Off",
            "color": "#D1FAE5"
        }
    ];




    return (
        <Container>

            <section className='d-flex flex-wrap justify-content-center gap-2'>
                {
                    services.map(service => <article
                        style={{
                            width: 318, backgroundColor: service.color, padding: 18, borderRadius: 10
                        }}
                        className='d-flex align-items-center gap-3'>
                        <h6 style={{ color: "#10B981", fontSize: 20 }}>
                            <i className={service.icon}></i>
                        </h6>
                        <article>
                            <h6 className='mb-0'>{service.name}</h6>
                            <small>{service.desc}</small>
                        </article>

                    </article>
                    )
                }
            </section>

        </Container>
    );
};

export default Services;