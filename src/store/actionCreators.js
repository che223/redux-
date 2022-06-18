import {
    CHANGE_INPUT,
    RESET_INPUT,
    ADD_LIST,
    DELETE_LIST,
    SET_LIST,
} from './actionTypes'

import axios from 'axios'
import {
    BASEURL
} from '../common/index'

export const changeInputAction = value => ({
    type: CHANGE_INPUT,
    value
})
export const resetInputAction = value => ({
    type: RESET_INPUT,
    value
})
export const addListAction = value => ({
    type: ADD_LIST,
    value
})
export const deleteListAction = value => ({
    type: DELETE_LIST,
    value
})
export const setListAction = value => ({
    type: SET_LIST,
    value
})
export const getListAction = () => {
    return (dispatch) => {
        axios.get(`${BASEURL}/getTodoList`).then(res => {
            const action = setListAction(res.data.data)
            dispatch(action)
        })
    }
}

export const delAction = index => {
    return (dispatch) => {
        axios.post(`${BASEURL}/delList`,{
            index
        }).then(res => {
            if(res.status === 200){
                const action = deleteListAction(index)
                dispatch(action)
            }
        })
    }
}

export const addAction = value => {
    return (dispatch) => {
        axios.post(`${BASEURL}/addList`,{
            value
        }).then(res => {
            if(res.status === 200){
                const action = addListAction(value)
                dispatch(action)
            }
        })
    }
}