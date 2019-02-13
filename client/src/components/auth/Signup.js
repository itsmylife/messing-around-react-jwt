import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return (
      <div>
        <form onSubmit={ this.onSubmit }>
          <fieldset>
            <label>Email</label>
          </fieldset>
          <fieldset>
            <label>Password</label>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Signup;
