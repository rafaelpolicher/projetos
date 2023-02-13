import './App.css';
import {useState, useEffect} from 'react'
import {BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from 'react-icons/bs'

const API = "http://localhost:5000"

function App() {
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  // load todos on page load

  useEffect(()=>{
  const loadData = async (e) =>{
    setLoading(true)

    const res = await fetch(`${API}/todos`)
    .then((res) => res.json())
    .then((data)=> data)
    .catch((err) => console.log(err))

    setLoading(false)

    setTodos(res)
  }
  loadData()
  },[])

  const handleSubmit = async (e) =>{
    e.preventDefault()

    const todo = {
    id: Math.random(),
    title,
    time,
    done: false,
    }

    await fetch(`${API}/todos`,{
      method: 'POST',
      body: JSON.stringify(todo),
      headers:{
        'Content-Type': 'application/json',
      }
    })

  setTitle('')
  setTime('')

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
          <div className='form-control'>
            <label htmlFor="title">What you gonna do?</label>
            <input type="text" 
            name='title' 
            placeholder='Task title' 
            onChange={(e)=> setTitle(e.target.value)}
            value={title || ""}
            required/>
          </div>

          <div className='form-control'>
            <label htmlFor="time">How much hours do you need?</label>
            <input type="text" 
            name='time' 
            placeholder='Task time' 
            onChange={(e)=> setTime(e.target.value)}
            value={time || ""}
            required/>
          </div>

          <input type="submit" value="Add task" />
        </form>
      </div>
      <div className='todo-list'>
        <h2>Todo list</h2>
        {todos.length === 0 && <p>there are no tasks</p>}
        {todos.map((todo) =>(
          <div className='todo' key={todo.id}>
            <p>{todo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
