import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ControlledCarousel from '../ControlledCarousel';

const wpProjectList = [
    { 
        id: 1,
        name: "Project Tomorrow",
        date: "June 2024",
        summary: "Project Tomorrow provides training to young people to open up future pathways they may otherwise have missed out on. The website was developed with a team as a part of the 48in48 Social Justice Event 2024.",
        imageList: [
            {
                id: 1,
                src: "/assets/project-tomorrow-images/home-desktop.png",
                alt: "Project Tomorrow Homepage",
            },
            {
                id:2,
                src: "/assets/project-tomorrow-images/get-involved-desktop.png",
                alt: "Project Tomorrow Get Involved Page",
            },
            {
                id:3,
                src: "/assets/project-tomorrow-images/home-mobile.png",
                alt: "Project Tomorrow homepage (mobile)",
            }
        ]
    }, 
    {
        id: 2,
        name: "All In Together",
        date: "October 2023",
        summary: "All In Together provides a physical space and activities in order to build community togetherness.",
        imageList: [
            {
                id: 1,
                src: "/assets/Homepage_top.PNG",
                alt: "All In Together Homepage",
            },
            {
                id:2,
                src: "/assets/Homepage_mid_2.PNG",
                alt: "All In Together Homepage Middle Section",
            },
            {
                id:3,
                src: "/assets/Programs_top.PNG",
                alt: "Programs page top section",
            },
            {
                id:4,
                src: "/assets/Programs_mid_1.PNG",
                alt: "Programs page middle section",
            },
            {
                id:5,
                src: "/assets/Programs_bottom.PNG",
                alt: "Programs page bottom section",
            },
            {
                id:6,
                src: "/assets/Contact_top.PNG",
                alt: "Contact page top section"
            }
        ]
    }
]

function WordPressContainer() {
    return (
      
        <Container >
            {wpProjectList.map((project, idx) => (
            <Row className='mb-5'>
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
                <Row mt-3>
                    <h3>Photo Gallery</h3>
                    <ControlledCarousel imageList={project.imageList}/>
                  
                </Row>
            </Row>
        ))}
        </Container>
    )
}
export default WordPressContainer;