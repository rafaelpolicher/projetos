import {useState, useEffect} from 'react'
import {BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from 'react-icons/bs'
import '../styles/List.sass';

function List(){
    const API = "http://localhost:5000"
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(false)

    const handleEdit = async (todo) =>{
        todo.done = !todo.done
    
        const data = await fetch(`${API}/todos/${todo.id}`,{
          method: 'PUT',
          body: JSON.stringify(todo),
          headers:{
            'Content-Type': 'application/json',
          }
        })
        setTodos((prevState) => prevState.map((t) => (t.id === data.id ? (t = data) : t)))
      }

      const handleDelete = async (id) =>{
        await fetch(`${API}/todos/${id}`,{
        method: 'DELETE',
    })
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
    }

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
        
        if(loading){
            return <p>Loading...</p>
          }
    return(
        <div className='list'>
        <h2>Todo list</h2>
        {todos.length === 0 && <p>there are no tasks</p>}
        {todos.map((todo) =>(
          <div className='todo' key={todo.id}>
            <h3 className={todo.done ? 'todo-done' : 'todo-not'}>{todo.title}</h3>

            <p>Time: {todo.time} Hours</p>

            <div className="actions">
              <span onClick={()=> handleEdit(todo)} >
                {!todo.done ? <BsBookmarkCheck/> : <BsBookmarkCheckFill/>}
              </span>
              <BsTrash onClick={() => handleDelete(todo.id)}/>
            </div>
          </div>
        ))}
      </div>
    )
}
export default List