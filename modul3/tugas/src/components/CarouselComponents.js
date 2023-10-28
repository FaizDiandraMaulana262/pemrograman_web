import Carousel from "react-bootstrap/Carousel";

function CarouselComponents() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
            <div style={{backgroundColor: "lightblue", padding: "200px", borderRadius: "20px"}}></div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <center><div style={{backgroundColor: "purple", padding: "200px", borderRadius: "20px"}}></div></center>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <center><div style={{backgroundColor: "red", padding: "200px", borderRadius: "20px"}}></div></center>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselComponents;
