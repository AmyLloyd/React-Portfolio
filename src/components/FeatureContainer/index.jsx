import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FeatureContainer() {
  return (
    <Container row-col-2 >
        <Row className="mb-5 white-text">
            <Row>
                <Col></Col>
                <Col>
                    <div>
                        <img src="/assets/input_24dp_FILL0_wght400_GRAD0_opsz24.png" className="feature-icon" alt="input logo"/>
                    </div>
                    <p className="feature-label">Sign-up and contact forms</p>
                </Col>
                <Col>
                    <div>
                    <img src="/assets\menu_24dp_FILL0_wght400_GRAD0_opsz24.png" className="feature-icon" alt="hamburger menu logo"/>
                    </div>
                    <p className="feature-label">Hamburger menu</p>
                </Col>
                <Col>
                    <div>
                       <img src="assets\responsive_layout_24dp_FILL0_wght400_GRAD0_opsz24 (1).png" className="feature-icon" alt="responsive layout logo" />
                    </div>
                    <p className="feature-label">Responsive layout</p>
                </Col>
                <Col></Col>
            </Row>
        </Row>

    </Container>
    );
}

export default FeatureContainer;

