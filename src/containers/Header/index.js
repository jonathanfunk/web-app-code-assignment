import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ accounts, onChange }) => (

  <div className="App-header">
    <h2>Web App Code Assignment</h2>
    <div className="login">
      <label>Login</label>
      <select onChange={onChange}>
        {accounts
          .map(account => (
            <option value={account.id} key={account.id}>{account.name}</option>
        ))}
      </select>
    </div>
  </div>
);

Header.propTypes = {
  accounts: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Header;
