import './App.css';
import Container from './components/Container';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <AboutMe />
        <Projects />
      </Container>
    </>
  );
}

export default App;
