import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";

function NavbarLandingComponent() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">
          <img
              src=""
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarLandingComponent;
