import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { Link } from 'react-router-dom';

import './styles.css'

function AboutContainer() {
  return (
    <Container className='min-vh mt-5'>
      <Row className="align-items-center">
        <Col sm={12} md={6} xl={8} className="pe-3">
            <div className='white-text align-left'>
            <h1>Hi! I'm Amy</h1>
                <p className="mt-1">I'm a Junior Full Stack Web Developer who loves getting involved in projects from start to finish.</p>
                <p className="mt-1">As a problem solver, I strive to meet clients' design needs with creativity and ingenuity.</p>
                <p className="mt-1">With a Graduate Certificate of Education in Innovation and Change from Torrens University, I'm committed to continuous learning and improvement.</p>
                <p className="mt-1">Collaboration is key to my approach—I thrive in team settings, where collective efforts lead to exceptional results. </p>
                <p>Let's turn great ideas into reality!</p>
            </div>
        </Col> 
        <Col md={6} sm={12} xl={4} className='mt-5 pt-2'>
            <div className='center-content'>
                <img src='./assets/flagship_picture.jpeg' alt='a woman connecting the natural world through her device' className="feature-photo"/>
                    {/* <img src='./assets/amy_github_flip.jpg' alt='a visual showing a woman with a green and blue connecting lines on a dark grey background' className="feature-photo"/> */}
                    <button className='feature-button sticky-button display-block'>
                        <Link to="/portfolio" className="link">
                          {/* <span class="material-symbols-outlined">arrow_right_alt</span> */}
                          My Portfolio
                        </Link>
                    </button>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutContainer;