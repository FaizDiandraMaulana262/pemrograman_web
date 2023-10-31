import NavbarLandingComponent from "../components/NavbarLandingComponents";
import HeadingComponents from '../components/HeadingComponents';
import Container from "react-bootstrap/Container";

function Contact() {
  return (
    <div>
      <HeadingComponents/>
      <NavbarLandingComponent/>

      <Container><h1>Ini Contact</h1></Container>
    </div>
  );
}

export default Contact;
