const { combineReducers } = require("redux");

const initalState = {
    list: [],
    activeId: null
}

const todoReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            const newToDos = [...state.list]
            newToDos.push(action.payload)
            return {
                ...state,
                list: newToDos
            }
        }
        case 'ACTIVE_TODO': {
            const newActiveId = action.payload.id
            return {
                ...state,
                activeId: newActiveId
            }
        }
        case 'DELETE_TODO': {
            const newActiveId = []
            return {
                ...state,
                list: newActiveId
            }
        }

        case 'DELETE_ITEM': {
            const newToDos = [...state.list]
            const newActiveId = action.payload.id

            for (var i = 0; i < newToDos.length; i++) {
                if (newToDos[i].id === newActiveId) {
                    newToDos.splice(i, 1)
                    break;
                }
            }
            return {
                ...state,
                list: newToDos
            }
        }
        default:
            return state
    }

}

const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer