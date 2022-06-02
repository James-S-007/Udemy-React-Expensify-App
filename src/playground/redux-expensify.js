import { createStore, combineReducers } from 'redux'
import { v4 as uuid } from 'uuid'

// ----------Actions---------- \\
// ADD_EXPENSE
const addExpense = (
    { description='',
      note='',
      amount=0,
      createdAt=0 }) => (
    {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
})


// REMOVE_EXPENSE
const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// SET_TEXT_FILTER
const setTextFilter = (text='') => ({
    type: 'SET_TEXT_FILTER',
    text: text.toLowerCase()
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
})

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
})

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

// ----------Reducers---------- \\
// Expenses Reducer
const expensesReducerDefaultState = []
const expensesReducer = (state=expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        default:
            return state
    }
}

// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state=filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return { ...state, text: action.text }
        case 'SORT_BY_AMOUNT':
        case 'SORT_BY_DATE':
            return { ...state, sortBy: action.sortBy }
        case 'SET_START_DATE':
            return { ...state, startDate: action.startDate}
        case 'SET_END_DATE':
            return { ...state, endDate: action.endDate}
        default:
            return state
    }
}

// Get Visible Expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof(startDate) !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof(endDate) !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text)

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }

        return 0
    })
}

// Store Creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})


// ----------Tests---------- \\
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 10000, createdAt: 100 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Food', amount: 2000 , createdAt: 200 }))
// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 321 }))
store.dispatch(setTextFilter(''))
// store.dispatch(setTextFilter())
// store.dispatch(sortByAmount())
store.dispatch(sortByDate())
// store.dispatch(setStartDate(99))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(126))
// store.dispatch(setEndDate())


// ----------Demo Object---------- \\
/* 
const demoState = {
    expenses: [{
        id: 'fasefea;kj',
        description: 'This is a description',
        note: 'This is a lil blurb about it',
        amount: 54500,  // in cents
        createdAt: 0  // timestamp
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',  // date or amount
        startDate: undefined,
        endDate: undefined
    }
}
*/

