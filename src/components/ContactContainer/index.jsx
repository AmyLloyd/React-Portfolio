import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
    FiGithub,
    FiLinkedin
  } from "react-icons/fi";

import { HiOutlineMail } from "react-icons/hi";

function ContactContainer() {
    return (
        <Container fluid='md' row-col-2>
            <Row className='pb-2rem'>
                <Col med={7} className='ps-3 pe-3'>
                    <h1>Contact</h1>
                    <p>Want to work together?
                    </p>
                    <p>Get in touch...</p>
                    <ul >
                        <div>
                            <HiOutlineMail />
                            <a href='mailto:amylloyd30@gmail.com'> amylloyd30@gmail.com</a>
                        </div>
                        <div>
                            <FiLinkedin />
                            <a href='https://www.linkedin.com/in/amy-lloyd30/'>LinkedIn</a>
                        </div>
                        <div>
                            <FiGithub />
                            <a href='https://github.com/AmyLloyd'>/AmyLloyd</a>  
                        </div>
                    </ul>
                  

                </Col>
            </Row>
        </Container>
    )
}

export default ContactContainer;