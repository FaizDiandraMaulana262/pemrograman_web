import Card from "react-bootstrap/Card";

function CardLandingComponents(props) {
  return (
    <>
      <Card
        style={{
          width: "18rem",
          background: "linear-gradient(to bottom right, #639CD9, #5454C5)",
        }}
      >
        <Card.Body>
          <div className="ps-5 pe-5 pt-5 mb-4">
            <img
              style={{ border: "solid white 2px", borderRadius: "10px" }}
              src={props.image}
              width="100"
            />
          </div>
          <div>
            <h4
              style={{
                color: "white",
                fontFamily: "Poppins",
                fontFamily: "sans-serif",
              }}
            >
              {props.stars} Stars
            </h4>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardLandingComponents;
