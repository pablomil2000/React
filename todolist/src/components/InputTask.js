import { Select, Input, Button, Grid, Header, Icon } from 'semantic-ui-react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const options = [
    { key: "deporte", text: "Deporte", value: "Deporte" },
    { key: "Casa", text: "Casa", value: "Casa" },
    { key: "Oficina", text: "Oficina", value: "Oficina" },
    { key: "Otra", text: "Otra", value: "Otra" },
]

export default function InputTask(props) {

    const [task, setTask] = useState({
        idTask: "",
        taskName: "",
        categoryTask: "",
    });

    const [error, setError] = useState(false);

    const { createTask } = props;

    const onChnageTask = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        });
        setError(false);
        console.log(e.target.value);
    }


    const onChnageCategoryTask = (e, data) => {
        setTask(({
            ...task,
            [data.name]: data.value,
        }));

        console.log(task);
    }


    const onSubmitTask = (e) => {
        // console.log("enviado");

        // que no recarge
        e.preventDefault();

        // Validacion
        if (task.taskName.trim() === '') {
            setError(true);
            return;
        }


        // Eliminar mensaje previo
        setError(false);

        // asignar id rand
        task.idTask = uuidv4();
        // console.log(task);

        // Crear tarea
        createTask(task);

        // Limpiar input
        setTask({
            idTask: "",
            taskName: "",
            categoryTask: "",
            // catagoryName: "",
        });

    };


    return (

        <>
            <Grid centered columns={2}>
                <Input type="text" action>
                    <Input
                        size="small"
                        icon="add"
                        placeholder="Escribe tu tarea..."
                        iconPosition="left"
                        name="taskName"
                        value={task.taskName}
                        onChange={onChnageTask}
                    />
                    <Select
                        compact
                        options={options}
                        className="select-from-task"
                        name="categoryTask"
                        placeholder="Categoria"
                        value={task.catagoryName}
                        onChange={onChnageCategoryTask} />

                    <Button type="submit" color="violet" onClick={onSubmitTask}>Añadir tarea</Button>
                </Input>


            </Grid>
            {error && (
                <Grid centered>
                    <Header as="h4" color="red" className="alert-error-from">
                        <Icon name="close" />
                        <Header.Content>La tarea es obligatoria</Header.Content>
                        <Icon name="close" />
                    </Header>
                </Grid>
            )}
        </>

    );
}