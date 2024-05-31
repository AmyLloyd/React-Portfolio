import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';

import './styles.css';

function RedirectContainer() {
  return (
    <Container fluid="md" row-col-2 className='min-vh'>
      <Row className="align-items-center pb-2rem">
        <Col md={7} className="ps-3 pe-3">
            <div className='mt-2 pt-2 ps-3 pe-3'>
                <h1>Thanks...</h1>
                <p>...for checking out my projects!</p> 
            </div>
            <div className='mt-4 pt-2 ps-3 pe-3'>
                <p className="mt-1">Sorry there's no access to a GitHub respository for this project. </p>
                <p className="mt-1">This app was the result of a collaborative team effort at one of the <span><a href='https://48in48.org/' target='_blank' rel="noopener noreferrer">48in48</a></span> volunteer build events.
                    So there's no GitHub repository available.
                </p>
               
            </div>
        </Col> 
        <Col md={4} className='mt-2 pt-2' >
            <div>
                  <button className='feature-button sticky-button display-block'>
                        <Link to="/portfolio">Check out other projects</Link>
                  </button>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default RedirectContainer;