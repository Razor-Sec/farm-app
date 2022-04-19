import React, { useState, useEffect} from 'react';
import './App.css';
import TodoView from './components/TodoListView';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css'; 


function App() {

  const [todoList, setTodoList] = useState([{}])
  const [title, setTitle] = useState('') 
  const [desc, setDesc] = useState('')
  
    

  // Read all todos
  useEffect(() => {
    axios.get(`/api/todo`)
      .then(res => {
        setTodoList(res.data)
      })
  });

  // Post a todo
  const addTodoHandler = () => {
    axios.post(`/api/todo`, { 'title': title, 'description': desc })
      .then(res => console.log(res))
};

  return (
    <div className="App list-group-item  justify-content-center align-items-center mx-auto" style={{"width":"65%", "backgroundColor":"white", "marginTop":"100px"}} >
      <h1 className="card text-white bg-dark mb-1"> COBA TODO LIST</h1>
      <h6 className="card text-white bg-secondary mb-3"> FARM : FASTAPI - React - MongoDB</h6>
     <div className="card-body">
      <span className="card-text"> 
        <input className="mb-2 form-control titleIn" onChange={event => setTitle(event.target.value)} placeholder='Judul'/> 
        <input className="mb-2 form-control desIn" onChange={event => setDesc(event.target.value)}   placeholder='Deskripsi'/>
      <button className="btn btn-outline-primary mx-2 mb-3" style={{'borderRadius':'50px',"font-weight":"bold"}}  onClick={addTodoHandler}>Add Task</button>
      </span>
      <h5 className="card text-white bg-dark mb-3">My List</h5>
      <div >
      <TodoView todoList={todoList} />
      </div>
      </div>
    </div>
  );
}

export default App;
