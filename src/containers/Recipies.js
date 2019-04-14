import React, { Component } from 'react';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from 'reactstrap';

const data = [
  {
    name: 'Reforestation x',
    verified: true,
    increase_jobs: '24%',
    duration: 293
  },
  {
    name: 'Reforestation y',
    verified: true,
    increase_jobs: '34%',
    duration: 222
  },
  {
    name: 'Reforestation z',
    verified: false,
    increase_jobs: '12%',
    duration: 994
  }
];

export default class Recipies extends Component {
  render() {
    return (
      <div className="container my-4">
        <h2 className="mb-4">Recipies</h2>
        <ListGroup>
          {data.map((item, index) => (
            <ListGroupItem key={index}>
              <ListGroupItemHeading>{item.name}</ListGroupItemHeading>
              <ListGroupItemText>{item.description}</ListGroupItemText>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
