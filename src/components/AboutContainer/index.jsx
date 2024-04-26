import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';

import './styles.css'

function AboutContainer() {
  return (
    <Container fluid="md" row-col-2>
      <Row className="align-items-center pb-2rem">
        {/* <Col col-sm-6 col-md-6 col-lg-4>
            <img className="css-img mx-auto" src="/assets/headshot-filmstyle.jpg" alt="Headshot of 40 year old woman with brown hair and subtly smiling at the camera" />
        </Col> */}
      
        <Col md={7} className="ps-3 pe-3">
            <div className='mt-2 pt-2 ms-3 ps-3 pe-3'>
            <h1>Hi! I'm Amy</h1>
                <p className='mt-1'> And I'm a junior full-stack developer with fast-growing skills</p>
                <p> <span className="word-emphasis">Creator</span> who enjoys being involved in a project from its inception to completion</p>
                <p> <span className="word-emphasis">Thinker</span> who loves using problem solving and creativity to meet the design needs of clients</p>
                <p> <span className="word-emphasis">Team player</span> who communicates well with colleagues and clients.</p>
            </div>
        </Col> 
        <Col md={4} className='me-2 mt-2 pt-2' >
            <div>
                <div>
                    <img src='./assets/Connection_square.png' alt='a visual showing green and blue connecting lines on a dark grey background' width="200" height="200"/>
                </div>
                <div className='mt-3'>
                    <button className='feature-button'>
                        <Link to="/portfolio">Check out my Portfolio!</Link>
                    </button>
                </div>

            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutContainer;