import React, { Component } from 'react';
import qs from 'qs';
import classnames from 'classnames';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from 'reactstrap';

const data = [
  {
    name: 'Reforestation x',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled...',
    verified: true,
    increase_jobs: '24%',
    decreases_flooding: '10%',
    duration: '165d'
  },
  {
    name: 'Reforestation y',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled...',
    verified: true,
    increase_jobs: '34%',
    decreases_flooding: '23%',
    duration: '302d',
    optimal: true
  },
  {
    name: 'Reforestation z',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled...',
    verified: false,
    increase_jobs: '12%',
    decreases_flooding: '-2%',
    duration: '160d'
  }
];

export default class Recipies extends Component {
  state = {
    tooltips: {}
  };

  toggle = e => {
    this.setState({
      tooltips: {
        [e.target.id]: !this.state.tooltips[e.target.id],
        ...this.state.tooltips
      }
    });
  };

  render() {
    const query = qs.parse(window.location.search.slice(1));
    const entered = Object.keys(query)
      .map(k => `${k} ${query[k]}`)
      .join(' ');
    return (
      <div className="container my-4">
        <h2 className="mb-4">Recipies</h2>
        <div className="small mb-3">
          <em>{entered}</em>
        </div>
        <ListGroup>
          {data.map((item, index) => (
            <ListGroupItem key={index} color={item.optimal && 'success'}>
              <ListGroupItemHeading>{item.name}</ListGroupItemHeading>
              <ListGroupItemText>{item.description}</ListGroupItemText>
              <div className="text-muted">
                Jobs{' '}
                <span
                  className={classnames({
                    'text-danger': item.increase_jobs.includes('-'),
                    'text-success': !item.increase_jobs.includes('-')
                  })}>
                  {item.increase_jobs}
                </span>
                &nbsp;&nbsp; Duration {item.duration}
                &nbsp;&nbsp; Flooding{' '}
                <span
                  className={classnames({
                    'text-danger': item.decreases_flooding.includes('-'),
                    'text-success': !item.decreases_flooding.includes('-')
                  })}>
                  {item.decreases_flooding}
                </span>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
