import './App.css';
import {useState, useEffect} from 'react'
import {BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from 'react-icons/bs'

const API = "http://localhost:5000"

function App() {
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("enviou")
  }

  return (
    <div className="App">
      <div className='todo-header'>
        <h1>React Todo</h1>
      </div>
      <div className='todo-form'>
        <h2>Insert your next task</h2>
        <form onSubmit={handleSubmit}>
          <input type="submit" value="Add task" />
        </form>
      </div>
      <div className='todo-list'>
        <h2>Todo list</h2>
        {todos.length === 0 && <p>there are no tasks</p>}
      </div>
    </div>
  );
}

export default App;
