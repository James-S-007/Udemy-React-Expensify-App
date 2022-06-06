import React from 'react'
import { Router, Switch, Route, NavLink } from "react-router-dom"
import { createBrowserHistory } from 'history'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import LoginPage from '../components/LoginPage'
import NotFoundPage from '../components/NotFoundPage'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <PublicRoute path='/' component={LoginPage} exact={true} />
            <PrivateRoute path='/dashboard' component={ExpenseDashboardPage} />
            <PrivateRoute path='/create' component={AddExpensePage} />
            <PrivateRoute path='/edit/:id' component={EditExpensePage} />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
)

export default AppRouter