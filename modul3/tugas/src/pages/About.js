import NavbarComponents from '../components/NavbarComponents';
import HeadingComponents from '../components/HeadingComponents';
import Container from "react-bootstrap/Container";

function About() {
  return (
    <div>
      <HeadingComponents/>
      <NavbarComponents/>

      
      <Container><h1>Ini About</h1></Container>
    </div>
  );
}

export default About;
