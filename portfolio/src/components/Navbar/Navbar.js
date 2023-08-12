import React, { useState } from 'react'
import * as S from './Navbar.styles'
const Navbar = () => {
    const [showMenuBurguer, setShowMenuBurguer] = useState(false);
    console.log(showMenuBurguer);
    return (
        <S.ContainerNavbar>
            <S.ContainerLogo>
                <S.ImageLogo src='/img/logo.jpg' alt='Logo Pablo Martín López' />
                <div>
                    <h1>Pablo Martín López</h1>
                    <h2>Web Developer</h2>
                </div>
            </S.ContainerLogo>
            <S.ContainerBurguer onClick={() => setShowMenuBurguer(!showMenuBurguer)}>
                <S.BurguerMenu />
                <S.BurguerMenu />
                <S.BurguerMenu />
            </S.ContainerBurguer>
            <S.ContainerItems showMenuBurguer={showMenuBurguer}>
                <p>About me</p>
                <p>Proects</p>
                <S.Button>Contact me</S.Button>
            </S.ContainerItems>
        </S.ContainerNavbar>
    )
}

export default Navbar
