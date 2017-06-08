import React from 'react';
import PropTypes from 'prop-types';

const Account = ({ subAccounts, currentAccount, onChange }) => (
  <section>
    <h2>Logged in as {currentAccount.name}</h2>
    <h3>Subaccounts:</h3>
    <select onChange={onChange}>
      {subAccounts
        .filter(subAccount => subAccount.parentID === currentAccount.id)
        .map(subAccount => (
          <option
            value={subAccount.id} 
            key={subAccount.id}
          >{subAccount.name}</option>
      ))}
    </select>
  </section>
);

Account.propTypes = {
  subAccounts: PropTypes.array,
  currentAccount: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Account;
