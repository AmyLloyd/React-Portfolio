import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ControlledCarousel from '../ControlledCarousel';

import { Link } from 'react-router-dom';

const wpProjectList = [
    {
        id:1,
        name: "Dementia Prevention",
        date: "April 2024",
        summary: "This organisation wanted to share blogposts about dementia and grow their following through make contact forms and Mailchimp communication.",
    },
    { 
        id: 2,
        name: "Project Tomorrow",
        date: "June 2024",
        summary: "Project Tomorrow provides training to young people to open up future pathways they may otherwise have missed out on.",
    }
]

const projectTomorrowImageList  = [
    {
        id: 1,
        src: "/assets/project-tomorrow-images/home-desktop.png",
        alt: "Project Tomorrow Homepage",
        caption: "",
        text: ""
    },
    {
        id:2,
        src: "/assets/project-tomorrow-images/get-involved-desktop.png",
        alt: "Project Tomorrow Get Involved Page",
        caption: "",
        text: ""
    },
    {
        id:3,
        src: "/assets/project-tomorrow-images/home-mobile.png",
        alt: "Project Tomorrow homepage (mobile)",
        caption: "",
        text: ""
    }

];

function WordPressContainer() {
    return (
      
        <Container >
            {wpProjectList.map((project, idx) => (
            <Row className='project-row  mb-5'>
                <Row>
                    <Col md={8}>
                        <h2>{project.name}</h2>
                    </Col>
                    <Col md={1}>
                    </Col>
                    <Col md={3}>
                        <p>{project.date}</p>
                    </Col>
                </Row>
                <Row>
                    <p>{project.summary}</p>
                </Row>
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
                <Row>
                    <Col>
                        <h3>Technologies and Skills used</h3>
                        <li>
                            <ul>ReactJS</ul>
                            <ul>MVC structure</ul>
                            <ul>MERN stack</ul>
                        </li>
                    </Col>
                </Row>
                <Row>
                    <h3>Photo Gallery</h3>
                    <ControlledCarousel imageList={projectTomorrowImageList}/>
                </Row>
            </Row>
        ))}
        </Container>
    )
}
export default WordPressContainer;