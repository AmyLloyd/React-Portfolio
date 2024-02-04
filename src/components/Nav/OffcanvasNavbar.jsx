  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
  import Offcanvas from 'react-bootstrap/Offcanvas';

  import './styles.css';
  
  export default function OffcanvasNavbar({ links }) {
    const targetBreakpoint = 'md';

    return (
      <>
        {targetBreakpoint && (
          <Navbar expand={targetBreakpoint} className="bg-body-tertiary mb-3 navbar-bg">
            <Container fluid>
              <Navbar.Brand href="#"></Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${targetBreakpoint}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${targetBreakpoint}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${targetBreakpoint}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${targetBreakpoint}`}>
                    Portfolio
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                      {links.map((link) => link)}  
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        )}
      </>
    );
  }

 