import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('removeExpense action object', () => {
    expect(removeExpense({ id: '12345a' })).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '12345a'
    })
})

test('editExpense', () => {
    expect(editExpense('12345a', { note: 'New note' }))
    .toEqual({
        type: 'EDIT_EXPENSE',
        updates: {
            note: 'New note'
        }
    })
})

test('addExpense', () => {
    const expenseData = {
        description: 'rent',
        amount: 1200,
        createdAt:1000,
        note: 'note'
    }
    expect(addExpense(expenseData)).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('addExpense default', () => {
    expect(addExpense()).toEqual({
        type: 'ADD_EXPENSE',
        id: expect.any(String),
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    })
})