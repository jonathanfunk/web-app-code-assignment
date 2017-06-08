import React, { Component } from 'react';

class Account extends Component {

  render() {
    const subAccounts = this.props.subAccounts.accounts;
    const filter = this.props.currentAccount.id;
    const onChange = this.props.onChange;
    const value = this.props.value;

    return (
      <section>
        <h2>Logged in as {this.props.currentAccount.name}</h2>
        <select onChange={onChange} value={value}>
          {subAccounts
            .filter(subAccount => subAccount.parentID === filter)
            .map(subAccount => (
              <option value={subAccount.id} key={subAccount.id}>{subAccount.name}</option>
          ))}
        </select>
      </section>
    );
  }
}

export default Account;
