import {
    CHANGE_INPUT,
    RESET_INPUT,
    ADD_LIST,
    DELETE_LIST,
    SET_LIST
} from './actionTypes'

const defaultState = {
    inputValue: 'Write Something',
    list: []
}

//reducer必须是一个纯函数，也就是说不能有副作用
export const reducer =  (state = defaultState, action) => {
    //Redux里只能接收state，不能改变state
    let newState = {...state}
    switch (action.type){
        case CHANGE_INPUT :
            newState.inputValue = action.value
            break;
        case ADD_LIST :
            newState.list.push(action.value)
            break;
        case RESET_INPUT :
            newState.inputValue = action.value
            break;
        case DELETE_LIST :
            newState.list.splice(action.value, 1)
            break;
        case SET_LIST :
            newState.list = action.value
            break;
    }
    if(action){
        return newState
    }
    return state
}

