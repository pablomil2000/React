import React from 'react'
import * as S from './Container.style'
const Contianer = ({ children }) => {
    return (
        <S.ContainerContent>
            {children}
        </S.ContainerContent>
    )
}

export default Contianer
