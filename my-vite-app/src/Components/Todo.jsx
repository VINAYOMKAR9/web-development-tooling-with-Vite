import React, { useState } from 'react'

const Todo = () => {
    let fObj= {id:1,title:'Todo 1',status:false}
const [text,setText]=useState('')
const [todo,setTodo]=useState([fObj,])

    console.log(todo)
    const handleChange=(event)=>{
        let val = event.target.value
        setText(val)
    }
    const handleClick=()=>{
        let obj={
            id:Todo.length+1,
            title:text,
            status:false
        }
        setTodo([...todo,obj])
        setText('')
    }


  return (<div>
   <h1>Todo</h1>
   <input type='text' placeholder='enter task' value={text} onChange={handleChange}/>
   <button onClick={handleClick}>Add</button>

    </div>
  )
}

export default Todo
