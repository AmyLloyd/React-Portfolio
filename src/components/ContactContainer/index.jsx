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
        icon:  <HiOutlineMail />,
        url: "mailto:amylloyd30@gmail.com",
        name: "amylloyd30@gmail.com"

    },
    {
        id: 2,
        icon: <FiLinkedin />,
        url: "https://www.linkedin.com/in/amy-lloyd-2a1028135/",
        name:"LinkedIn"
    },
    {
        id: 3,
        icon: <FiGithub />,
        url: "https://github.com/AmyLloyd",
        name: "Github"
    },
    // {
    //   id: 4,
    //   icon: <FaStackOverflow />,
    //   url: "https://stackoverflow.com/users/23352670/alloyd"
    // }

  ];

function ContactContainer() {
    return (
        <Container fluid='md' className='min-vh'>
            <Row>
                <h1>Contact</h1>
                <p>Want to work together?</p>
                <p>Get in touch...</p>
            </Row>
            <p><a href="mailto:amylloyd30@gmail.com">Send email</a></p>

            <Row >
                {contactLinks.map((link) => (
                    <Col className='btn contact-card' key={link.id}>
                                <a href={link.url}>
                                    <i className='contact-icon'>{link.icon}</i>
                                    <span className='contact-details'>{link.name}</span> 
                                </a>
                           
                    </Col>
                            
                    

                ))}
            </Row>
        </Container>
    )
}

export default ContactContainer;