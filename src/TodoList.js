import React from 'react'
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todolist: PropTypes.array,
    activeId: PropTypes.string,
    onTodoClick: PropTypes.func,
    onItemClick: PropTypes.func,
}

TodoList.defaultProps = {
    todolist: [],
    activeId: null,
    onTodoClick: null,
    onItemClick: null,
}

export default function TodoList(props) {
    const { todolist, activeId, onTodoClick, onItemClick } = props


    const handleClick = (todo) => {
        if (onTodoClick) {
            onTodoClick(todo)
        }
    }

    const handleItemClick = (todo) => {
        if (onItemClick) {
            onItemClick(todo)
        }
    }
 

    return (
        <ul>
            {todolist.map((todo, index) =>
                <li key={index}
                    className='todoo'
                >
                    <strong>  {index}</strong>
                    <strong onClick={() => handleClick(todo)} style={todo.id === activeId ? { textDecorationLine: 'line-through' } : {}}>  {todo.name}</strong>
                    <button type='button'
                        className='btn btn-danger dichChuyen'
                        onClick={() => handleItemClick(todo)}>Xóa </button>
                </li>)}
        </ul>

    )
}
