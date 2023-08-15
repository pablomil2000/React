import React, { useState } from 'react'
import * as S from './Navbar.styles'
const Navbar = () => {
    const [showMenuBurguer, setShowMenuBurguer] = useState(false);

    const clickItemNav = (item) => {
        // console.log(item);
        document.getElementById(item).scrollIntoView({ behavior: "smooth" });
    };

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
                <p onClick={() => clickItemNav("about-me")}>Sobre mi</p>
                <p onClick={() => clickItemNav("projects")}>Proyectos</p>
                <S.Button onClick={() => clickItemNav("contact")}>
                    Contactame
                </S.Button>
            </S.ContainerItems>
        </S.ContainerNavbar>
    )
}

export default Navbar
