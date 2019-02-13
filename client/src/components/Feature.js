import requireAuth from 'components/requireAuth';
import React, { Component } from 'react';

class Feature extends Component {
  render() {
    return (
      <div>
        Feature is cool
      </div>
    );
  }
}

export default requireAuth(Feature);
