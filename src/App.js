import React, { Component } from 'react';
import Header from './containers/Header';
import Main from './containers/Main';
import { accountsData } from './data/accounts';
import './styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentAccount: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const account = accountsData.accounts.filter(
      singleAccount => singleAccount.id === event.target.value,
    );
    this.setState({ currentAccount: account[0] });
  }

  render() {
    return (
      <div className="App">
        <Header onChange={this.handleChange} accounts={accountsData.accounts} />
        <section className="content-area">
          {
            !this.state.currentAccount ?
              <p>You must login to manage your account.</p> :
              <Main accounts={accountsData.accounts} currentAccount={this.state.currentAccount} />
          }
        </section>
      </div>
    );
  }
}

export default App;
