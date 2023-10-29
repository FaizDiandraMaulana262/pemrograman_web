import "../components/HeadingComponents";
import Container from "react-bootstrap/Container";
import NavbarLandingComponent from "../components/NavbarLandingComponents";
import CardLandingComponents from "../components/CardLandingComponents";
import CarouselComponents from "../components/CarouselComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

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
        <Container>
          <Row>
            <Col>
              <div className="ms-5 mt-5">
                <h1
                  className="mb-3"
                  style={{
                    fontFamily: "Poppins",
                    fontFamily: "sans-serif",
                    color: "white",
                  }}
                >
                  <b>Why Choose our Website</b>
                </h1>
                <h2
                  style={{
                    fontFamily: "Poppins",
                    fontFamily: "sans-serif",
                    color: "white",
                  }}
                >
                  WaifuBapakmu provides a gacha character service with a high
                  rating so you can vent your trash of gacha.
                </h2>
              </div>
            </Col>
            <Col>
              <center>
                <img
                  src="https://raw.githubusercontent.com/FaizDiandraMaulana262/pemrograman_web/master/modul3/tugas/public/image/holo.png"
                  width="150"
                />
              </center>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="p-5" style={{ background: "#639CD9" }}>
        <Container>
          <center>
            <h1
              style={{
                color: "white",
                fontFamily: "Poppins",
                fontFamily: "sans-serif",
              }}
              className="mb-5"
            >
              <b>Example Result</b>
            </h1>
            <Row>
              <Col>
                <CardLandingComponents
                  image="https://raw.githubusercontent.com/FaizDiandraMaulana262/pemrograman_web/master/modul3/tugas/public/image/assets/pngwing%201.png"
                  stars="5"
                />
              </Col>
              <Col className="my-5">
                <CardLandingComponents
                  image="https://raw.githubusercontent.com/FaizDiandraMaulana262/pemrograman_web/master/modul3/tugas/public/image/assets/pngwing%202.png"
                  stars="4"
                />
              </Col>
              <Col>
                <CardLandingComponents
                  image="https://raw.githubusercontent.com/FaizDiandraMaulana262/pemrograman_web/master/modul3/tugas/public/image/assets/pngwing%203.png"
                  stars="4"
                />
              </Col>
              <Col className="my-5">
                <CardLandingComponents
                  image="https://raw.githubusercontent.com/FaizDiandraMaulana262/pemrograman_web/master/modul3/tugas/public/image/assets/pngwing%204.png"
                  stars="5"
                />
              </Col>
            </Row>
          </center>
        </Container>
      </div>
      <div className="p-5" style={{ background: "#2E4E8B" }}>
        <Container>
          <center>
            <img
              src="https://github.com/FaizDiandraMaulana262/pemrograman_web/blob/master/modul3/tugas/public/image/002.png?raw=true"
              width="350"
            />
            <div className="py-1 mb-2" style={{ background: "white" }}></div>
            <h3
              style={{
                color: "white",
                fontFamily: "Poppins",
                fontFamily: "sans-serif",
              }}
            >
              Leave your trash gacha game and gacha with your father. Salty
              Salty Salty, no need for rituals.
            </h3>
          </center>
        </Container>
      </div>
      <div className="p-5" style={{ background: "#639CD9" }}>
        <Container>
          <center>
            <Button variant="primary" className="mb-5">
              <h3
                className="px-3 py-1"
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  fontFamily: "sans-serif",
                }}
              >
                Get Api Key &#8594;
              </h3>
            </Button>

            <div>
              
            </div>
          </center>
        </Container>
      </div>
    </>
  );
}

export default Landing;
