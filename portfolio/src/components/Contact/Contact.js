import React, { useRef, useState } from 'react'
import * as S from './Contact.styles'
import emailjs from '@emailjs/browser'
const Contact = () => {

    const [contactDates, setContactDates] = useState({
        name: "",
        email: "",
        message: "",
        acepted: false,
    })

    const [emptyInputs, setEmptyInputs] = useState(false)
    const [successSendForm, setsuccessSendForm] = useState(false)
    const form = useRef();

    const onSubmit = (e) => {
        setEmptyInputs(false);
        console.log("click submit");
        // No reload
        e.preventDefault();


        // Validate form
        if (contactDates.name === "" ||
            contactDates.email === "" ||
            contactDates.message === "" ||
            contactDates.acepted === false) {
            alert("Por favor, complete todos los campos");
            setEmptyInputs(true);
            return;
        } else {
            // Send form

            emailjs
                .sendForm(
                    process.env.REACT_APP_EMAILJS_SERVICE_ID,
                    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                    form.current,
                    process.env.REACT_APP_EMAILJS_PUBLIC_USER_ID
                )
                .then(
                    (result) => {
                        // console.log("success");
                        setsuccessSendForm(true);
                    },
                    (error) => {
                        // console.log("error");
                        setsuccessSendForm(false);
                    }
                );

        }

    }

    console.log(contactDates);

    return (
        <S.ContainerContact>
            <S.Title>Contatca con migo</S.Title>
            <S.ContainerForm>
                {successSendForm ? (
                    <p>Mensaje enviado con exito!</p>
                ) : (
                    <S.Form onSubmit={onSubmit} ref={form}>
                        <S.InputForm placeholder='Nombre' type='text' name='name' onChange={(e) => setContactDates({ ...contactDates, name: e.target.value })} value={contactDates.name} />
                        <S.InputForm placeholder='Correo' type='email' name='email' onChange={(e) => setContactDates({ ...contactDates, email: e.target.value })} value={contactDates.email} />
                        <S.TextArea placeholder='Mensaje' name='message' onChange={(e) => setContactDates({ ...contactDates, message: e.target.value })} value={contactDates.message} />
                        <S.ContainerConditions>
                            <input type='checkbox' name='checkbox' onClick={(e) => setContactDates({ ...contactDates, acepted: e.target.checked })} />
                            <span>Acepto terminos y condiciones</span>
                        </S.ContainerConditions>
                        <S.Button type='submit'>Enviar</S.Button>
                    </S.Form>

                )}

                {emptyInputs && (
                    <p>Tienes que rellenar todos los inputs</p>
                )}
            </S.ContainerForm>
        </S.ContainerContact>
    )
}

export default Contact
