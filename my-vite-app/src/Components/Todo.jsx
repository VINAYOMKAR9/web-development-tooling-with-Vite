import React, { useState } from 'react'

const TodoList=({todo,handleToggle,handleDelete})=>{
    return (<div style={{margin:'auto', width:'50%',display:'flex',justifyContent:'row',gap:'10px'}}>      
        {
            todo.map((el)=>{
                return(
                <div key={el.id}  style={{
                    display:'flex',flexDirection:'column',
                    backgroundColor:el.status?'green':'orange', 
                    padding:'3px', 
                    margin: 'auto',
                    borderRadius:'5px',
                    textAlign:'center'
            
                    }}>
                    <h4>{el.title}</h4>
                    <b >{el.status?'completed':'un-complete'}</b>
                    <div style={{margin:'25px' ,display:'flex',justifyContent:'space-between'}}>
                    <button onClick={()=>handleToggle(el.id)}> Status</button>
                    <button onClick={()=>handleDelete(el.id)}> Delete</button>
                    </div>

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
