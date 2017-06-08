import React, { Component } from 'react';
import Account from './../Account';
import User from './../User';
import Selected from './../Selected/';

class Main extends Component {

  render() {
    return (
      <section>
        <Account />
        <User />
        <Selected />
      </section>
    );
  }
}

export default Main;
