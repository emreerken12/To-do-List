import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);


  const createTask = async(title, taskDesc) => {


  const response = await axios.post('http://localhost:3001/tasks', {
      title,
      taskDesc,
    })
 
    console.log(response)

    const createdTask =[...tasks,
      response.data
    ];
    setTasks([...tasks, createdTask]);
  };

const fetchTasks = async ()=>{
  const response = await axios.get('http://localhost:3001/tasks')
  
  setTasks(response.data)
}

useEffect(()=>{
  fetchTasks();
});


  const onDelete =async (id) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);

    const afterDeletingTasks = tasks.filter((task) => task.id !== id);
    setTasks(afterDeletingTasks);
  };

  const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3001/tasks/${id}`,{
      title: updatedTitle,
      taskDesc: updatedTaskDesc,
    });
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title: updatedTitle, taskDesc: updatedTaskDesc } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={onDelete} onUpdate={editTaskById} />
    </div>
  );
}


export default App;
