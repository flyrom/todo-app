import './App.css';
import {useState} from 'react';
import Todo from './component/Todo'

function App(props) {
  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id)
    setTasks(remainingTasks)
    console.log(id)
  }
  function editTask (id, newName){
    const editedTaskList = tasks.map(task => {
      if (id === task.id){
        return {...task, name:newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }
  const[tasks, setTasks] = useState(props.tasks);
  const taskList = tasks.map(task => (
  <Todo
  id={task.id}
  name={task.name}
  check={task.check}
  deleteTask={deleteTask}
  editTask={editTask}
  />))
  return (
    <>
      <h1 className='App'>Tasks to complete</h1>
    <div className='main App'>
      <h2>A task you want to add : </h2>
      <input type="text" className='center-block' id='12'></input>
      <button className='center_block'>Add task</button>
      <ul>
      {taskList}
      </ul>
    </div>
    </>
  );
}

export default App;