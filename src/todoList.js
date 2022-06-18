import {
    useEffect,
    useState
} from 'react'

import {
    changeInputAction,
    resetInputAction,
    addAction,
    delAction,
    getListAction
} from './store/actionCreators'

import store from './store';

import {
    TodoListUI
} from './todoListUl'

import {
    PLACEHOLDER,
} from './common'

export function TodoList(){
const [userStore, setUserStore] = useState(store.getState())
const changeInputValue = (e) => {
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
}
const storeChange = () => {
    setUserStore(store.getState())
}
const resetInputValue = () => {
    const action = resetInputAction(PLACEHOLDER)
    store.dispatch(action)
}
const addSomething = () => {
    const addThing =userStore.inputValue
    const action = addAction(addThing)
    store.dispatch(action)
}
const deleteSomething = index => {
    const action = delAction(index)
    store.dispatch(action)
}
store.subscribe(storeChange)
useEffect(() => {
    const action = getListAction()
    store.dispatch(action)
}, [])
useEffect(() => {
    resetInputValue()
},[userStore.list.length])
    return (
        <TodoListUI
             listData={userStore}
             changeFunc={changeInputValue}
             addFunc={addSomething}
             deleteFunc={deleteSomething}
        />
    )
}