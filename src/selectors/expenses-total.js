const getExpensesTotal = (expenses) => {
    return expenses.reduce((prev, currExpense) => prev + currExpense.amount, 0)
}

export default getExpensesTotal