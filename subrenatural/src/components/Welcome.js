import styled from 'styled-components';
import Logo from '../supernatural.png';

export default function Welcome(props) {

    const { reqApi } = props


    return (
        <ContentLogo>
            <WelcomeText>Frases de sobrenatural (contiene spoilers), toca la imagen para continuar</WelcomeText>
            <ImageLogo
                src={Logo}
                alt='supernatural logo'
                onClick={reqApi} />
        </ContentLogo>
    );


}


const WelcomeText = styled.p`
    
    color: #ff0000;
    text-align:center;
    font-weight:900;
    pading:50px 0 10px; 0
    font-size:25px;`

const ContentLogo = styled.div`
    width:100%;
    text-align:center;
    `;

const ImageLogo = styled.img`
    width:450px;
    height:auto;

    &:hover{
        cursor: pointer;
    }
    `;