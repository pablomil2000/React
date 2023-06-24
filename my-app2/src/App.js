import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* Estructura necesaria para usar React-router-dom */}

        <Router>
          <div>
            <ul>
              <li>
                {/* Enlaces a una "page" */}
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/welcome">Welcome</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
              <li>
                <Link to="/about">About me</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </div>
          {/* Esto renderiza la page segun la url */}
          <Routes>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/welcome" element={<Welcome />}></Route>
            <Route path="/about" element={<AboutMe />}></Route>

            {/* Si delcaro el path con :name, esto seria un parametro, que despues puedo rellenar yo como quiera */}
            <Route path="/profile/:name" element={<Profile />}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
