import React, { Component } from 'react';

class User extends Component {

  render() {
    const users = this.props.users;
    const filter = this.props.selectedAccountID;
    return (
      <section>
        <h3>Users:</h3>
        <ul>
          {users
            .filter(user => user.accountID === filter)
            .map((user, i) => (
              <li key={i}>{user.firstName} {user.lastName} - {user.phone}</li>
          ))}
        </ul>
      </section>
    );
  }
}

export default User;
