import React from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import getExpensesTotal from "../selectors/expenses-total"
import selectExpenses from '../selectors/expenses'

const ExpensesSummary = (props) => (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{props.expenses.length}</span> expense{props.expenses.length === 1 ? '' : 's'} totaling <span>{numeral(getExpensesTotal(props.expenses) / 100).format('$0,0.00')}</span></h1>
            <div className="page-header__actions">
                <Link className="button" to="/create">Add Expense</Link>
            </div>
        </div>
    </div>
)


const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
})


export default connect(mapStateToProps)(ExpensesSummary)