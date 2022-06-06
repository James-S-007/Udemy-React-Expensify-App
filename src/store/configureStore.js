import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import authReducer from '../reducers/auth'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose

const configureStore = () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        applyMiddleware(thunk)
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store
}

export default configureStore
