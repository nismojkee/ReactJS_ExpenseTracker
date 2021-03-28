import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const NewTransaction = () => {
	const [text, setText] = useState('')
	const [amount, setAmount] = useState(0)

	const {addTransaction} = useContext(GlobalContext)

	const onSubmit = e => {
		e.preventDefault()
		const newTransation = {
			id: Math.floor(Math.random() * 10000000),
			text,
			amount: +amount,
		}

		addTransaction(newTransation)
		setText('')
		setAmount(0)
	}

	return (
		<>
			<h5 className="form-legend">Add new transaction</h5>
			<form onSubmit={onSubmit}>
				<div className="form-control">
					<label htmlFor="text">Text</label>
					<input type="text" value={text} onChange={(e) => setText(e.target.value)} required placeholder="Enter text.." />
				</div>
				<div className="form-control">
					<label htmlFor="amount">
						Amount <br/>
						(negative - expense, positive - income)
					</label>
					<input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required placeholder="Enter amount.." />
				</div>
				<button type="submit" className="new-transaction-add">Add transaction</button>
			</form>
		</>
	)
}

export default NewTransaction
