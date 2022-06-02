import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpeneses from './selectors/expenses'
import 'normalize.css/normalize.css'  // cross-browser view
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

store.dispatch(addExpense({ description: 'Water bill', amount: 300, createdAt: 123}))
store.dispatch(addExpense({ description: 'Gas bill', amount: 5134, createdAt: 4000}))
store.dispatch(addExpense({ description: 'Rent', amount: 122700, createdAt: 1000}))


const state = store.getState()
console.log(getVisibleExpeneses(state.expenses, state.filters))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'))