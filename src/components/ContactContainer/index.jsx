import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
    FiGithub,
    FiLinkedin
  } from "react-icons/fi";

import { HiOutlineMail } from "react-icons/hi";

const contactLinks = [
    {
        id: 1,
        icon: <FiLinkedin />,
        url: "https://www.linkedin.com/in/amy-lloyd-2a1028135/",
        name:"LinkedIn"
    },
    {
        id: 2,
        icon: <FiGithub />,
        url: "https://github.com/AmyLloyd",
        name: "Github"
    },
    {
        id: 3,
        icon:  <HiOutlineMail />,
        url: "mailto:amylloyd30@gmail.com",
        name: "Email"
    }
  ];

function ContactContainer() {
    return (
        <Container className='min-vh'>
            <Row>
                <div className='mt-2 pt-2 ps-3 pe-3 mb-5 white-text center-text'>
                    <h1>Contact</h1>
                    <p>Want to work together?</p>
                    <p className='mt-0'>Here's the ways to get in touch.</p>
                </div>
            </Row>
            <Row>
                <Col className="d-none d-lg-block"></Col>
                {contactLinks.map((link) => (
                    <Col key={link.id} className='justify-content-center'>
                        <div className='btn contact-card center-content'>
                            <a href={link.url}>
                                <i className='contact-icon display-block'>{link.icon}</i>
                                <span className='contact-details display-block'>{link.name}</span> 
                            </a>

                        </div>

                    </Col>
                ))}
                <Col className="d-none d-lg-block"></Col>
            </Row>
        </Container>
    )
}

export default ContactContainer;