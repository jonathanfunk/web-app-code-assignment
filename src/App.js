import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {

  state = {
    logged: true,
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
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
        <section className="content">
          {
            this.state.logged ? <p>You are logged out.</p> : <p>You are logged in.</p>
          }
        </section>
      </div>
    );
  }
}

export default App;
