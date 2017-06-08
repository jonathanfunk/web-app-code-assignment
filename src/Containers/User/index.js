import React from 'react';
import PropTypes from 'prop-types';

const User = ({ users, selectedAccountID }) => (
  <section>
    <h3>Users:</h3>
    <ul>
      {users
        .filter(user => user.accountID === selectedAccountID)
        .map((user, i) => (
          <li key={i}>{user.firstName} {user.lastName} - {user.phone}</li>
      ))}
    </ul>
  </section>
);

User.propTypes = {
  users: PropTypes.array,
  selectedAccountID: PropTypes.string.isRequired,
};

export default User;
