import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <Jumbotron>
        <div className="container text-center py-sm-5">
          <h1 className="display-4">
            We help you to regenerate land and create a sustainable ecosystem
          </h1>
          <p className="lead">
            <em>Unlocking the Sustainable Potential of Land and People</em>
          </p>
          <Link to="/project" className="btn btn-primary mt-2 mb-sm-5">
            Check us out
          </Link>
        </div>
      </Jumbotron>
    );
  }
}

const Jumbotron = styled.div.attrs({
  className: 'd-flex align-items-center py-5'
})`
  background: #eee;
`;
