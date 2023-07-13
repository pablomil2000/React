import { useState } from 'react';
import Container from './components/Container';
import Header from './components/Header';
import Welcome from './components/Welcome';
import CharacterContainer from './components/CharacterContainer';


function App() {
  const [characters, setCharacters] = useState(null);

  //* Peticion a la api
  const reqApi = async () => {
    const api = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=3");

    const frases = await api.json();

    setCharacters(frases);
  };


  return (
    <Container>
      <Header />

      {!characters ?
        (
          <Welcome reqApi={reqApi} />
        ) : (
          <CharacterContainer reqApi={reqApi} characters={characters} />
        )
      }

    </Container>
  );
}

export default App;


