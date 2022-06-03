import React from 'react'
import { connect } from "react-redux"
import numeral from 'numeral'
import getExpensesTotal from "../selectors/expenses-total"
import selectExpenses from '../selectors/expenses'

const ExpensesSummary = (props) => (
    <div>
        <h3>Viewing {props.expenses.length} expense{props.expenses.length === 1 ? '' : 's'} totaling {numeral(getExpensesTotal(props.expenses) / 100).format('$0,0.00')}</h3>
    </div>
)


const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
})


export default connect(mapStateToProps)(ExpensesSummary)