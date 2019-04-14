import React, { Component } from 'react';
import { APP_NAME } from '../constants';

export default class Contact extends Component {
  render() {
    return (
      <div className="container py-3">
        <h4>Contact</h4>
        Team {APP_NAME}
      </div>
    );
  }
}
