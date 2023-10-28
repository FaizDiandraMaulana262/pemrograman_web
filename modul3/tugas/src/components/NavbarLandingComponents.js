import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';

function NavbarLandingComponent() {
  return (
    <>
      <Navbar style={{background: "#342056"}}>
        <Container>
          <Navbar.Brand href="#">
          <img
              src="https://raw.githubusercontent.com/FaizDiandraMaulana262/pemrograman_web/master/modul3/tugas/public/image/dad1.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="<React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><b style={{color: "white"}}>Home</b></Nav.Link>
            <Nav.Link href="#features"><b style={{color: "white"}}>Features</b></Nav.Link>
            <Nav.Link href="#pricing"><b style={{color: "white"}}>Pricing</b></Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#home"><Button variant="success">Log In</Button></Nav.Link>
            <Nav.Link href="#features"><Button variant="outline-info">Start Gacha</Button></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarLandingComponent;
