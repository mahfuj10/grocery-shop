import React from 'react';
import Navigation from '../Home/Shared/Navigation/Navigation';
import Footer from '../Home/Shared/Footer/Footer';
import aboutBanner from '../../images/aboutBanner.webp';
import webBanner from '../../images/about-us.webp';
import aboutBanner3 from '../../images/about-banner3.webp';
import { Col, Container, Row } from 'react-bootstrap';

const AboutUs = () => {

    return (

        <>
            <Navigation />

            <article
                style={{
                    height: 530,
                    backgroundImage: `linear-gradient(270deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${aboutBanner})`,
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundAttachment: 'fixed',
                    alignItems: "center",

                }} >

                <h2 className='text-center text-white'>About US</h2>

            </article>

            <Container className="mb-5">

                <Row style={{ marginTop: 100 }}>

                    <Col lg={6}>
                        <h3 className='mb-3'>Welcome to our KachaBazar</h3>
                        <p className='text-secondary'>Holisticly seize parallel metrics and functional ROI. Seamlessly revolutionize error-free internal or "organic" sources before effective scenarios. Progressively incentivize state of the art applications for efficient intellectual capital. Credibly leverage existing distinctive mindshare through cutting-edge schemas. Proactively procrastinate team building paradigms coordinate client-centric total transparent internal.</p>
                        <p className='text-secondary'>Dynamically embrace diverse customer service and installed base paradigms. Credibly seize enterprise-wide experiences for end-to-end data. Professionally brand flexible alignments and cost effective architectures. Enthusiastically incentivize seamless communities with seamlessly facilitate revolutionary metrics with strategic theme areas.</p>

                        <article className='d-flex justify-content-between mt-4  flex-wrap flex-md-nowrap'>

                            <span style={{ backgroundColor: "#EEF2FF", padding: 20, width: 300, borderRadius: 10 }}>
                                <h2 className='fw-bolder'>10K</h2>
                                <h4>Listed Products</h4>
                                <h6 className='text-secondary'>Dynamically morph team driven partnerships after vertical.</h6>
                            </span>

                            <span className='mt-3 mt-md-0 mb-3 mb-md-0' style={{ backgroundColor: "#EEF2FF", padding: 20, width: 300, borderRadius: 10 }}>
                                <h2 className='fw-bolder'>10K</h2>
                                <h4>Listed Products</h4>
                                <h6 className='text-secondary'>Dynamically morph team driven partnerships after vertical.</h6>
                            </span>

                        </article>

                    </Col>

                    <Col lg={6}>
                        <img src={webBanner} className='img-fluid' alt="aboutbanner" />
                    </Col>

                </Row>

                <p className='mt-3 text-secondary text-justify'>Holisticly seize parallel metrics and functional ROI. Seamlessly revolutionize error-free internal or "organic" sources before effective scenarios. Progressively incentivize state of the art applications for efficient intellectual capital. Credibly leverage existing distinctive mindshare through cutting-edge schemas. Proactively procrastinate team building paradigms coordinate client-centric total transparent internal. Energistically reconceptualize global leadership for high-quality networks. Credibly restore an expanded array of systems rather than accurate results. Collaboratively synergize backend bandwidth without 24/7 functionalities. Credibly utilize proactive ideas whereas cross-media core competencies. Uniquely maximize professional best practices through resource maximizing services. Conveniently architect cross-unit web services for e-business imperatives.</p>
                <p className='text-secondary'>Appropriately visualize market-driven data before one-to-one scenarios. Collaboratively productize multifunctional ROI through intuitive supply chains. Enthusiastically seize revolutionary value and process-centric services. Competently harness intuitive information after interoperable markets. Interactively revolutionize future-proof value before granular sources. Dynamically embrace diverse customer service and installed base paradigms. Credibly seize enterprise-wide experiences for end-to-end data. Professionally brand flexible alignments and cost effective architectures. Enthusiastically incentivize seamless communities with seamlessly facilitate revolutionary metrics with strategic theme areas.
                </p>

                <img className='img-fluid rounded-3 mt-2' src={aboutBanner3} alt="aboutbanner" />



            </Container>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default AboutUs;