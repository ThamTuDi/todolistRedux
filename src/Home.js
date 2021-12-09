import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addNewToDo, deleteItem, deleteToDo, setActiveToDo } from './actions/todo'
import TodoList from './TodoList';

var randomstring = require('randomstring');

function Home() {
    const [todo, setTodo] = useState('')
    const activeId = useSelector(state => state.todo.activeId)
    const todoList = useSelector(state => state.todo.list)

    const dispatch = useDispatch()

    const handleClick = () => {

      
        const newToDo = {
            id: randomstring.generate(),
            name: todo
        }
        setTodo('')
        dispatch(addNewToDo(newToDo))

    }


    const handleTodoClick = (todo) => {
        dispatch(setActiveToDo(todo))
    }

    const handleItemClick = (todo) => {
        dispatch(deleteItem(todo))
    }

    const handleClear = () => {
        dispatch(deleteToDo())
    }

    return (
        <div className='container d-flex justify-content-center '>
            <h2>Danh sách công việc </h2>
            <div style={{ display: 'flex', flexDirection: 'row', margin: 50 }}>
                <input type='text'
                    style={{ width: 700 }}
                    className='form-control'
                    onChange={(e) => setTodo(e.target.value)} value={todo} />
                <button type='button'
                    className='btn btn-primary'
                    onClick={handleClick}>Thêm </button>
                <button type='button'
                    className='btn btn-danger'
                    onClick={handleClear}>Xóa </button>

            </div>
            <TodoList
                todolist={todoList}
                activeId={activeId}
                onTodoClick={handleTodoClick}
                onItemClick={handleItemClick}
                 />
        </div>
    )
}

export default Home