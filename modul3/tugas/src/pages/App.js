import NavbarComponents from '../components/NavbarComponents';
import HeadingComponents from '../components/HeadingComponents';
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div>
      <HeadingComponents/>
      <NavbarComponents/>

      <Container><h1>Ini Home</h1></Container>
    </div>
  );
}

export default App;
