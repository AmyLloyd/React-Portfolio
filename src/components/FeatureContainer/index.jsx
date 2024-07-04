import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FeatureContainer() {
  return (
    <Container row-col-2>
        <Row>
            <h3>Features</h3>
            <Row>
                <Col>
                    <div >
                        <img src="/assets/input_24dp_FILL0_wght400_GRAD0_opsz24.png" className="feature-icon" alt="input logo"/>
                    </div>
                    <p className="feature-label">Sign-up and contact forms</p>
                </Col>
                <Col>
                    <img src="/assets\menu_24dp_FILL0_wght400_GRAD0_opsz24.png" alt="hamburger menu logo"/>
                    <p className="feature-label">Hamburger menu</p>
                </Col>
                <Col>
                    <img src="assets\responsive_layout_24dp_FILL0_wght400_GRAD0_opsz24 (1).png" alt="responsive layout logo" />
                    <p className="feature-label">Responsive layout</p>
                </Col>
            </Row>
        </Row>

    </Container>
    );
}

export default FeatureContainer;

