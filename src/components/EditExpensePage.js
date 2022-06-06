import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, startRemoveExpense } from '../actions/expenses'

export const EditExpensePage = (props) => (
    <div>
        <ExpenseForm 
            expense={props.expense}
            onSubmit={(expense) => {
                props.dispatch(editExpense(props.expense.id, expense))
                props.history.push('/')
            }}
        />
        <button onClick={(e) => {
            props.dispatch(startRemoveExpense({ id: props.expense.id }))
            props.history.push('/')
        }}>remove</button>
    </div>
)

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

export default connect(mapStateToProps)(EditExpensePage)