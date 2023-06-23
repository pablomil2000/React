import { useState, useEffect } from "react";

export default function Welcome(props) {

    const [counter, setCounter] = useState(0);
    const [semaforo, setSemaforo] = useState(false);

    const { message, name } = props;


    //Se ejecuta cada vez que se modifica semaforo
    useEffect(() => {
        console.log(semaforo);
    }, [semaforo]);
    //Este es el valor que se tiene que modificar


    const contar = () => {
        // console.log("Entrado en la funcion de contar");
        setCounter(counter + 1);
        setSemaforo(!semaforo);
    }

    return (
        <div>
            <p>Hola {name}</p>
            <h2>Contador react Hooks</h2>
            <h4>El contador es: {counter}</h4>
            <p>El semaforo esta en color {semaforo ? "red" : "green"}</p>
            <button type='submit' onClick={contar}>Sumar contdor</button>
        </div>
    );

}