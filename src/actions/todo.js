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