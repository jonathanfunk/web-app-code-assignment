import React, { Component } from 'react';
import Main from './Containers/Main';
import './styles/App.css';

class App extends Component {

  state = {
    logged: true,
  };

  handleChange = (event, logged) => {
    this.setState({logged: !this.state.logged});
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <div className="login">
            <label>Login</label>
            <input type="checkbox" value="on" onChange={this.handleChange}/>
          </div>
        </div>
        <section className="content-area">
          {
            this.state.logged ? <p>You must login to manage your account.</p> : <Main/>
          }
        </section>
      </div>
    );
  }
}

export default App;
