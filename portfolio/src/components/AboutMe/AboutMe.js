import React from 'react'
import * as S from './AboutMe.styled'
import logoGit from '../../svg/github.svg'
import logoLinkedin from '../../svg/linkedin.svg'
import logoUdemy from '../../svg/udemy.svg'
import logoX from '../../svg/website.svg'

const AboutMe = () => {

    const socialNetworks = [
        {
            name: "Github",
            link: "https://github.com/pablomil2000",
            logo: logoGit,
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/pablo-martin-lopez-17693717a/",
            logo: logoLinkedin,
        },
        {
            name: "Udemy",
            link: "https://www.udemy.com/user/pablo-martin-lopez-4/",
            logo: logoUdemy,
        },
        {
            name: "X",
            link: "https://twitter.com/Pablo_WebDev__",
            logo: logoX,
        },
    ];

    return (
        <S.ContainerAboutMe>
            <S.ContainerFlex>
                <S.ContainerText>
                    <S.Title>
                        <p>👋 Hello, I'm</p>
                        <p>Pablo Martín López</p>
                        <p>Web Developer</p>
                    </S.Title>
                    <S.DescriptionText>
                        loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum
                        loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum
                        loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum
                    </S.DescriptionText>

                    <S.ContainerIcons>
                        {socialNetworks.map((red, index) => (
                            <a key={index} href={red.link} target='_blank' rel='noreferrer'>
                                <img src={red.logo} alt={red.name} />
                            </a>
                        ))}
                    </S.ContainerIcons>

                </S.ContainerText>

            </S.ContainerFlex>
        </S.ContainerAboutMe>
    )
}

export default AboutMe
