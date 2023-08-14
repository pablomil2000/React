import React, { useState } from 'react'
import * as S from './Contact.styles'
const Contact = () => {

    const [contactDates, setContactDates] = useState({
        name: "",
        email: "",
        message: "",
    })

    return (
        <S.ContainerContact>
            <S.Title>Contatca con migo</S.Title>
            <S.ContainerForm>
                <S.Form>
                    <S.InputForm placeholder='Nombre' type='text' name='name' onChange={(e) => setContactDates({ ...contactDates, name: e.target.value })} value={contactDates.name} />
                    <S.InputForm placeholder='Correo' type='email' name='email' onChange={(e) => setContactDates({ ...contactDates, email: e.target.value })} value={contactDates.email} />
                    <S.TextArea placeholder='Mensaje' name='message' onChange={(e) => setContactDates({ ...contactDates, message: e.target.value })} value={contactDates.message} />
                    <S.ContainerConditions>
                        <input type='checkbox' name='checkbox' />
                        <span>Acepto terminos y condiciones</span>
                    </S.ContainerConditions>
                    <S.Button type='submit'>Enviar</S.Button>

                </S.Form>
            </S.ContainerForm>
        </S.ContainerContact>
    )
}

export default Contact
