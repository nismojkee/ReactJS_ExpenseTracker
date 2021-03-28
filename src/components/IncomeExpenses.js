import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpenses = () => {
	const { transactions } = useContext(GlobalContext)
	const amounts = transactions.map(transaction => transaction.amount)
	const incomeTransaction = amounts.filter(item => item > 0).reduce( (acc, item) => (acc += item), 0 ).toFixed(2)
	const expenseTransaction = (amounts.filter(item => item < 0).reduce( (acc, item) => (acc += item), 0) * -1).toFixed(2)

	return (
		<div className="income-expense-container">
			<div className="income-display">
				<h4>Income</h4>
				<p className="money plus">${incomeTransaction}</p>
			</div>
			<div className="expense-display">
				<h4>Expense</h4>
				<p className="money minus">${expenseTransaction}</p>
			</div>
		</div>
	)
}

export default IncomeExpenses
