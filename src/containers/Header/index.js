import React, { Component } from 'react';

class Header extends Component {

  render() {
    const accounts = this.props.accounts;
    const onChange = this.props.onChange;
    const value = this.props.value;
    return (
      <div className="App-header">
        <h2>Welcome to React</h2>
        <div className="login">
          <label>Login</label>
          <select onChange={onChange} value={value}>
            {accounts
              .map(account => (
                <option value={account.id} key={account.id}>{account.name}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default Header;
