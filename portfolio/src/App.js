import './App.css';
import Container from './components/Container';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <AboutMe />
        <Projects />
        <Contact />
      </Container>
    </>
  );
}

export default App;
