import * as actions from 'actions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';

class Signup extends Component {
  onSubmit = (formProps) => {
    this.props.signup(formProps);
  };

  render() {
    const { handleSubmit } = this.props; // comes from redux-form
    return (
      <form onSubmit={ handleSubmit(this.onSubmit) }>
        <fieldset>
          <label>Email</label>
          <Field name="email" type="email" component="input" autoComplete='off' />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field name="password" type="password" component="input" autoComplete='off' />
        </fieldset>
        <div>
          { this.props.errorMessage }
        </div>
        <button>Sign up</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup' })
)(Signup);
