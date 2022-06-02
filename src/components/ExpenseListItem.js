import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseListItem = (props) => (
    <div>
        <Link to={`/edit/${props.id}`}>
            <h3>{props.description}</h3>
        </Link>
        <p>${props.amount / 100} - Date: {props.createdAt}</p>
    </div>
)

export default ExpenseListItem