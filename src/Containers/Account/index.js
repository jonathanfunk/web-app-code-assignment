import React, { Component } from 'react';

class Account extends Component {

  renderAccounts() {
    const subAccounts = this.props.subAccounts.accounts;
    const filter = this.props.currentAccount.id;
    return subAccounts
      .filter(subAccount => subAccount.parentID === filter)
      .map(subAccount => (
        <li>{subAccount.name}</li>
      ));
  }

  render() {
    return (
      <section>
        <h2>Logged in as {this.props.currentAccount.name}</h2>
        <ul>{this.renderAccounts()}</ul>
      </section>
    );
  }
}

export default Account;
