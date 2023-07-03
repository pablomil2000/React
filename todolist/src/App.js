import { useState } from 'react';
import { useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css'
import Container from './components/Container';
import Header from './components/Header';
import TaskContent from './components/TaskContent';
import InputTask from './components/InputTask';

function App() {

  //Pasar tareas a localstorage
  let initialTasks = JSON.parse(localStorage.getItem("tasks"));

  if (!initialTasks) {
    initialTasks = [];
  }

  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    if (initialTasks) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      localStorage.setItem("tasks", JSON.stringify([]));
    }

  }, [initialTasks, tasks]);


  const creatTask = (task) => {
    // console.log(task);
    setTasks([...tasks, task])
  }

  const deleteTask = (id) => {
    // console.log("delete task " + id)
    const currentTasks = tasks.filter((task) => task.idTask !== id)
    // console.log(currentTasks);
    setTasks(currentTasks);
  }

  return (
    <Container>
      <Header />
      <InputTask createTask={creatTask} />
      <TaskContent tasks={tasks} deleteTask={deleteTask} />
    </Container>
  );
}

export default App;
