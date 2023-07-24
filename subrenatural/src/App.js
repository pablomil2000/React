import { useState } from 'react';
import Container from './components/Container';
import Header from './components/Header';
import Welcome from './components/Welcome';
import CharacterContainer from './components/CharacterContainer';


function App() {
  const [quote, setQuotes] = useState(null);
  const [character, setCharacters] = useState(null);
  const [episode, setEpisode] = useState(null);

  //* Peticion a la api
  const reqApi = async () => {
    const api = await fetch("https://supernatural-quotes-api.cyclic.app/quotes/random");
    const quotes = await api.json();

    const api2 = await fetch("https://supernatural-quotes-api.cyclic.app/characters/" + quotes.line_0.character.id);
    const personaje = await api2.json();

    const api3 = await fetch("https://supernatural-quotes-api.cyclic.app//episodes/" + quotes.episodeId);
    const episode = await api3.json();

    setQuotes(quotes);
    setCharacters(personaje);
    setEpisode(episode);
  };


  return (
    <Container>
      <Header />

      {!quote ?
        (
          <Welcome reqApi={reqApi} />
        ) : (
          <CharacterContainer reqApi={reqApi} quotes={quote} character={character} episode={episode} />
        )
      }

    </Container>
  );
}

export default App;


