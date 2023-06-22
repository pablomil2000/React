export default function Welcome(props) {
    console.log(props);

    const { message } = props;

    return (
        <div>
            <p>Hola {props.name} desde welcome</p>
            <p>{message}</p>
        </div>
    );

}