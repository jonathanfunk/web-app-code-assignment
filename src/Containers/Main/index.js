import React, { Component } from 'react';
import Account from './../Account';
import User from './../User';
import Selected from './../Selected/';
import { accountsData } from './../../data/accounts';
import { usersData } from './../../data/users';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentAccount: accountsData.accounts[0],
      selectedAccountID: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ selectedAccountID: event.target.value });
  }

  render() {

    return (
      <section>
        <Account
          value={this.state.selectedAccountID}
          onChange={this.handleChange}
          currentAccount={this.state.currentAccount}
          subAccounts={accountsData.accounts}
        />
        {this.state.selectedAccountID &&
        <User
          selectedAccountID={this.state.selectedAccountID}
          users={usersData.users}
        />
        }
        <Selected />
      </section>
    );
  }
}

export default Main;
