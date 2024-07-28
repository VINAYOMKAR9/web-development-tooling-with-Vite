import React, { useState } from 'react'

const TodoList=({todo,handleToggle,handleDelete})=>{
    return (<div>      
        {
            todo.map((el)=>{
                return(
                <div key={el.id}  style={{
                    backgroundColor:el.status?'green':'orange', 
                    padding:'3px', 
                    margin: '4px'}}>
                    <h2>{el.id}</h2>
                    <h4>{el.title}</h4>
                    <b>{el.status?'completed':'un-complete'}</b>
                    <button onClick={()=>handleToggle(el.id)}> ToogleStatus</button>
                    <button onClick={()=>handleDelete(el.id)}> ToogleDelete</button>


                </div>
                )
            })
        }
        
        </div>
)
}
    
const Todo = () => {
    // let fObj= {id:1,title:'Todo 1',status:false}
const [text,setText]=useState('')
const [todo,setTodo]=useState([{id:1,title:'Todo 1',status:false},])

    // console.log(todo)
    const handleChange=(event)=>{
        let val = event.target.value
        setText(val)
    }
    const handleClick=()=>{
        let obj={
            id:todo.length + 1,
            title:text,
            status:false
        }
        setTodo([...todo,obj])
        setText('')
    }

    const handleToggle=(id)=>{
        let toggleData = todo.map((el)=>el.id == id?{...el,status:!el.status}:el)
        setTodo(toggleData)
        

    }


    const handleDelete=(id)=>{
        let filteredData= todo.filter((el)=>el.id != id)
        setTodo(filteredData)

    }


  return (<div>
   <h1>Todo</h1>
   <input type='text' placeholder='enter task' value={text} onChange={handleChange}/>
   <button onClick={handleClick}>Add</button>

   <div>
    <TodoList todo={todo} handleToggle={handleToggle} handleDelete={handleDelete} />
   </div>

    </div>
  )
}

export default Todo
