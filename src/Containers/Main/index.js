import React, { Component } from 'react';
import Account from './../Account';
import User from './../User';
import Selected from './../Selected/';
import { accountsData } from './../../data/accounts';

class Main extends Component {

  constructor() {
    super();
    this.state = {
      currentAccount: accountsData.accounts[0],
      selectedAccount: null,
    }
  }

  render() {

    return (
      <section>
        <Account
          currentAccount={this.state.currentAccount}
          subAccounts={accountsData}
         />
        <User />
        <Selected />
      </section>
    );
  }
}

export default Main;
