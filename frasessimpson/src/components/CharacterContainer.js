import styled from "styled-components";
import Character from "./Character";

export default function CharacterContainer(props) {

    const { characters, reqApi } = props;
    // console.log(characters);

    return (
        <>
            <ContainerCharacter>
                {characters.map((character, index) => (
                    <Character dataCharacter={character} key={index} />
                ))}

            </ContainerCharacter>
            <button onClick={reqApi}>Cambiar personajes</button>
        </>
    )


}

const ContainerCharacter = styled.div`
display: flex;
`