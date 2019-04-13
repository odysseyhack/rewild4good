import React, { Component } from 'react';
import { NEO4J_CONNECTION } from '../constants';

export default class Play extends Component {
  componentDidMount() {
    const cx = window.js2neo.open(NEO4J_CONNECTION);
    cx.run('match (n) return n', {}, { onRecord: console.log });
  }
  render() {
    return <div>Play</div>;
  }
}
