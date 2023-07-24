import styled from "styled-components";
export default function Character(props) {

    const { dataCharacter, quote, episode } = props;
    const { name, img } = dataCharacter;

    console.log(episode);

    return (
        <ContentCharacters>
            <Title>{name}</Title>
            <ContainerImage><Image src={img} alt={name} /></ContainerImage>
            <Quote>{quote}</Quote>
            <Episode>{episode.title} {episode.season}x{episode.ep}</Episode>
        </ContentCharacters>
    );
}

const ContentCharacters = styled.div`
pading: 20px;
border: 1px solid #ffd700;
border-radius:20px;
width:300px;
text-align:center;
margin:10px;
overflow: auto;
&:hover{
    filter:brightness(6 0%);
}
`;

const Title = styled.h2`
color: #c0c0c0;
height:40px;
justify-content: center;
align-items: center;
display: flex;
`;

const ContainerImage = styled.div`
// height:250px;
display:flex;
aling-item:center;
justify-content:center;
`;

const Image = styled.img`
width:130px;
height:auto;
marghin-right:20px;
`;

const Quote = styled.h4`
color: #c0c0c0;
// height:100px;
`

const Episode = styled.h4`
color: #c0c0c0;
`