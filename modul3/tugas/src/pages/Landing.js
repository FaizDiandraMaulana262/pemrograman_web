import "../components/HeadingComponents";
import Container from "react-bootstrap/Container";
import NavbarLandingComponent from "../components/NavbarLandingComponents";
import HeadingComponents from "../components/HeadingComponents";
import CardLandingComponents from "../components/CardLandingComponents";
import CarouselComponents from "../components/CarouselComponents";
import FooterLandingComponents from "../components/FooterLandingComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Landing() {
  return (
    <>
      <HeadingComponents />
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
            <a href="response">
              <Button variant="primary" className="mb-5">
                <h3
                  className="px-3 py-1"
                  style={{
                    color: "white",
                    fontFamily: "Poppins",
                    fontFamily: "sans-serif",
                  }}
                >
                  Get Response &#8594;
                </h3>
              </Button>
            </a>
            <div
              style={{
                width: "756px",
                height: "60px",
                background: "#5454C5",
                borderTopLeftRadius: "30px",
                borderTopRightRadius: "30px",
              }}
            >
              <p
                className="py-2 text-white"
                style={{
                  width: "350px",
                  background: "#BCBCBC",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                https://api.waifuBapakMu.com/charachter
              </p>
            </div>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%257B%250A%2520%2520%2522error%2522%253A%2520false%252C%250A%2520%2520%2522message%2522%253A%2520%2522Success%2520Fetching%2520Waifu%2520Bapakmu%2522%252C%250A%2520%2520%2522data%2522%253A%2520%257B%250A%2520%2520%2520%2520%2522id%2522%253A%2520%25221eoins-032daa%2522%252C%250A%2520%2520%2520%2520%2522name%2522%253A%2520%2522Arthoria%2520Pendragon%2522%252C%250A%2520%2520%2520%2520%2522anime%2522%253A%2520%2522Fate%2520Series%2522%252C%250A%2520%2520%2520%2520%2522description%2522%253A%2520%2522One%2520and%2520only%2520waifu%2520salman.%2522%252C%2520%250A%2520%2520%2520%2520%2522stars%2522%253A%25205%252C%2520%250A%2520%2520%2520%2520%2522image%2522%253A%2520%2522https%253A%252F%252Fcdn.myanimelist.net%252Fimages%252Fcharacters%252F16%252F319960.jpg%2522%250A%2520%2520%257D%2520%250A%257D"
              style={{
                width: "773px",
                height: "409px",
                border: "0",
                transform: "scale(1)",
                overflow: "hidden",
              }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </center>
        </Container>
      </div>

      <FooterLandingComponents />
    </>
  );
}

export default Landing;
