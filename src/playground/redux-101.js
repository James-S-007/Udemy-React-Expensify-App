import { createStore } from 'redux'


// Action Generators
const incrementCount = ({ amount=1 }) => ({
    type: 'INCREMENT',
    amount
})

const decrementCount = ({ amount=1 }) => ({
    type: 'DECREMENT',
    amount
})

const set = ({ count }) => ({
    type: 'SET',
    count
})

const reset = () => ({
    type: 'RESET'
})

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.amount }
        case 'DECREMENT':
            return { count: state.count - action.amount }
        case 'SET':
            return { count: action.count }
        case 'RESET':
            return { count: 0 }
        default:
            return state
    }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount({ amount: 5}))
store.dispatch(incrementCount({}))
store.dispatch(reset())
store.dispatch(decrementCount({ amount: 100}))
store.dispatch(set({ count: -42}))
