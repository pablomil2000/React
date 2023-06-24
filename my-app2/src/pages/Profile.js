// este import es para poder recuperar los parametros que paso por la url, en principio :name, que es el parametro del al ruta
import { useParams } from 'react-router-dom';

export default function Profile() {
    //Saco el valor de name
    const { name } = useParams();
    console.log(name);


    return (
        <div>
            <h4>Perfil de {name}</h4>
        </div>
    )
}