import { useState } from "react";

export default function Welcome(props) {

    const [counter, setCounter] = useState(0);

    const { message, name } = props;


    return (
        <div>
            <p>Hola {name}</p>
            <h2>Contador react Hooks</h2>
            <h4>El contador es: {counter}</h4>
            <button type='submit' onClick={() => setCounter(counter + 1)}>Sumar contdor</button>
        </div>
    );

}