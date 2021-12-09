export const addNewToDo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}

export const setActiveToDo = (todo) =>{
    return {
        type: 'ACTIVE_TODO',
        payload: todo
    }
}

export const deleteToDo = () =>{
    return {
        type: 'DELETE_TODO',
    }
}

export const deleteItem = (todo) =>{
    return {
        type: 'DELETE_ITEM',
        payload: todo
    }
}