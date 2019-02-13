import * as actions from 'actions';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Signout extends Component {

  componentDidMount() {
    this.props.signout();
  }

  render() {
    return (
      <div>
        Sorry to see you are leaving!
      </div>
    );
  }
}

export default connect(null, actions)(Signout);
