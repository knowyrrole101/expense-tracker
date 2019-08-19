import React from 'react';

const Header = () => (
    <header>
        <h2>Expensify</h2>
        <NavLink to='/' activeClassName='is-active' exact={true}>Dashboard</NavLink>
        <NavLink to='/create' activeClassName='is-active'>Create Expense</NavLink>
        <NavLink to='/edit' activeClassName='is-active'>Edit Expense</NavLink>
        <NavLink to='/help' activeClassName='is-active'>Help?</NavLink>
    </header>
)

export default Header;