import "../components/HeadingComponents";
import Container from "react-bootstrap/Container";
import NavbarLandingComponent from "../components/NavbarLandingComponents";
import CarouselComponents from "../components/CarouselComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Landing() {
  return (
    <>
      <NavbarLandingComponent />
      <div style={{ background: "#639CD9" }}>
        <Container>
          <div className="py-5">
            <CarouselComponents />
          </div>
        </Container>
      </div>
      <div className="p-5" style={{ background: "#2E4E8B" }}>
        <Row>
          <Col>
            Why Choose our Website
            <p>
              WaifuBapakmu provides a gacha character service with a high rating
              so you can vent your trash of gacha
            </p>
          </Col>
          <Col>
            {/* <img src="../../public/image/holo.png"/> */}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Landing;
