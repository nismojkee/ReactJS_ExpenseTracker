import React from 'react'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import NewTransaction from './components/NewTransaction'
import Transactions from './components/Transactions'
import {GlobalProvider} from './context/GlobalState'

const App = () => {
    return (
        <GlobalProvider>
            <h2>Expense Tracker</h2>
            <div className="container">
                <Balance />
                <IncomeExpenses />
                <Transactions />
                <NewTransaction />
            </div>
        </GlobalProvider>
    )
}

export default App
