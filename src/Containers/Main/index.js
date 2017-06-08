import React, { Component } from 'react';
import Account from './../Account';
import User from './../User';
import Selected from './../Selected/';
import { usersData } from './../../data/users';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
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
          onChange={this.handleChange}
          currentAccount={this.props.currentAccount}
          subAccounts={this.props.accounts}
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
