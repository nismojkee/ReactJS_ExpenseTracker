import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import Transaction from './Transaction'

const Transactions = () => {
	const { transactions } = useContext(GlobalContext)

	return (
		<>
			<h3>History</h3>
			{
				transactions.length === 0 ? 
				<p>Your History is empty</p>:
				<ul className="transaction-list">
					{transactions.map(transaction => (
						<Transaction key={transaction.id} transaction={transaction} />
					))}
				</ul>
			}
		</>
	)
}

export default Transactions