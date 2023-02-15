import {useState, useEffect} from 'react'
import '../styles/Form.sass';



function Form(){
    const API = "http://localhost:5000"
    const [title, setTitle] = useState('')
    const [time, setTime] = useState('')
    const [todos, setTodos] = useState([])


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
    
        setTodos((prevState) => [...prevState, todo])
    
      setTitle('')
      setTime('')
    
        console.log("enviou")
      }
    return(
        <div className='form'>
        <h2>Insert your next task</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor="title">What you gonna do?</label>
            <input className='write'
            type="text" 
            name='title' 
            placeholder='Task title' 
            onChange={(e)=> setTitle(e.target.value)}
            value={title || ""}
            required/>
          </div>

          <div className='form-control'>
            <label htmlFor="time">How much hours do you need?</label>
            <input className='write'
            type="text" 
            name='time' 
            placeholder='Task time' 
            onChange={(e)=> setTime(e.target.value)}
            value={time || ""}
            required/>
          </div>

          <input type="submit" value="Add task" className='btn'/>
        </form>
      </div>
    )
}
export default Form