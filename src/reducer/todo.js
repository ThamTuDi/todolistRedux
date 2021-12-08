const { combineReducers } = require("redux");

const initalState = {
    list:[],
    activeId:null
}

const todoReducer = (state = initalState, action) =>{
    switch (action.type){
        case 'ADD_TODO':{
            const newToDos = [...state.list]
            newToDos.push(action.payload)
            return {
                ...state,
                list: newToDos
            }
        }
        case 'ACTIVE_TODO':{
            return state
        }
        default:
            return state
    }

}

const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer