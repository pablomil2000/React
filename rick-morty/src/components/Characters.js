export default function Characters(props) {
    const { characters, setCharacters } = props;


    const resetCharacters = () => {
        setCharacters(null);
    }

    return (
        <div className="characters">
            <h1>Pesonajes</h1>
            <span onClick={resetCharacters} className="back-home">Volver al home</span>
            <div className="container-characters"></div>
            {characters.map((character, index) => (
                <div className="character-container" key={index}>
                    <div>
                        <img src={character.image} alt={characters.name} />
                    </div>
                    <div>
                        <h3>{character.name}</h3>
                        <h6>
                            {character.status === "Alive" ?
                                (
                                    <>
                                        <span className="alive">
                                            Alive
                                        </span>
                                    </>
                                ) :
                                (
                                    <>
                                        <span className="dead">
                                            Dead
                                        </span>
                                    </>
                                )}
                        </h6>
                        <p>
                            <span className="text-grey">Episodios:</span>
                            <span>{character.episode.length}</span>
                        </p>
                        <p className="text-grey">Especie</p>
                        <span>{character.species}</span>
                    </div>
                    span
                </div>
            ))}
            <span onClick={resetCharacters} className="back-home">Volver al home</span>
        </div>
    )
}
