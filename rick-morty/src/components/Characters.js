export default function Characters(props) {
    const { characters } = props;
    return (
        <div className="characters">
            <h1>Pesonajes</h1>
            <span className="back-home">Volver al home</span>
            <div className="container-characters"></div>
            {characters.map((characters, index) => (
                <div className="character-container" key={index}>
                    <p>{characters.name}</p>
                </div>
            ))}
        </div>
    )
}
