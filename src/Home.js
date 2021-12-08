import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addNewToDo } from './actions/todo'

var randomstring = require("randomstring");

 function Home() {
     const [todo, setTodo] = useState('')
     const todoList = useSelector(state => state.todo.list)
     console.log(todoList)
     const dispatch = useDispatch()

     const handleClick = () =>{
        const newToDo = {
            id: randomstring.generate(),
            name: todo
        }
        dispatch(addNewToDo(newToDo))
       
     }

    return (
        <div>
            <h2>Danh sách công việc </h2>
            <div >
              <input type='text'
                 name='' id=''  placeholder='' onChange = {(e) => setTodo(e.target.value)}/>
              <button type="button" onClick = {handleClick} >Thêm</button>
            </div>
            {todoList.map((todo, index) =>
                    <li key={index}>{todo.name}</li>)}
        </div>
    )
}

export default Home