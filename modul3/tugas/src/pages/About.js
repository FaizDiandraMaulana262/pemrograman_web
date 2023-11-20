import NavbarLandingComponent from "../components/NavbarLandingComponents";
import HeadingComponents from '../components/HeadingComponents';
import Container from "react-bootstrap/Container";

function About() {
  return (
    <div>
      <HeadingComponents/>
      <NavbarLandingComponent/>

      <Container><h1>Ini About</h1></Container>
    </div>
  );
}

export default About;
