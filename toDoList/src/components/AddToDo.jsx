import React, { useState } from 'react'

const AddToDo = () => {
    const [todo, setTodo]= useState("")
    const [todos, setTodos] = useState([])

    const handleChange =(e)=>{
        setTodo(e.target.value)
    }

    const handleAddTodo= ()=>{
        setTodos([...todos,{todo,isCompleted:false}])
        setTodo("")
        console.log("Todo added:", todo);
    }
    const handleEditTodo= ()=>{


    }
    const handleDeleteTodo= ()=>{


    }

    return (
        <>
            <div className='my-5'>
                <h2 className='text-lg font-bold'>Add a ToDo</h2>
                <input onChange={handleChange} value={todo} type="text" className='w-[60%] border-1' />
                <button onClick={handleAddTodo} className='bg-violet-700 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6'>Add</button>
            </div>

            <h2 className='text-lg font-bold'>Your Todos:</h2>
            <div className='todos'>{todos.map(item=>{
                <div className="todo flex">
                    <div className="text w-[60%]">{item.todo}</div>
                    <div className="buttons w-[40%]">
                        <button onClick={handleEditTodo} className='bg-violet-700 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md m-1'>Edit</button>
                        <button onClick={handleDeleteTodo} className='bg-violet-700 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md m-1'>Delete</button>
                    </div>

                </div>
})}

            </div>

        </>
    )
}

export default AddToDo
