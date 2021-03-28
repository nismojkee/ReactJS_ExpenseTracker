import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transaction = ({ transaction}) => {
	const { deleteTransaction } = useContext(GlobalContext)
	const sign = transaction.amount < 0 ? '-' : '+'

	return (
		<li className={transaction.amount < 0 ? `transaction-item transaction-expense` : `transaction-item transaction-income`} key={transaction.id}>
			{transaction.text}
			<span>
				{sign}${Math.abs(transaction.amount)}
			</span>
			<button onClick={ () => deleteTransaction(transaction.id)} className="transaction-item-delete">
				&times;
			</button>
		</li>
	)
}

export default Transaction
