import React, { Component } from 'react';
import { Button, Table, Form, FormGroup, Label, Input } from 'reactstrap';
import './project.css';
import DynamicForm from '../components/DynamicForm';

export default class Project extends Component {
  componentDidMount() {
    // const cx = window.js2neo.open(NEO4J_CONNECTION);
    // cx.run('match (n) return n', {}, { onRecord: console.log });

    //key=AIzaSyB85oBP31CAKBghlIAqRP2JnDbirYWzy7Y&
    var google_maps = document.createElement('script');
    google_maps.src =
      '//maps.googleapis.com/maps/api/js?key=AIzaSyB85oBP31CAKBghlIAqRP2JnDbirYWzy7Y&v=3.exp&libraries=geometry&libraries=drawing';
    document.body.appendChild(google_maps);

    var custom_script = document.createElement('script');
    custom_script.src = 'js/project.js';
    document.body.appendChild(custom_script);
  }

  state = {
    data: [
      {
        id: 1,
        species: 'tree',
        name: 'fancy tree',
        soil_requirement: ['clay', 'sand']
      },
      {
        id: 2,
        species: 'flower',
        name: 'fancy flower',
        soil_requirement: ['tar', 'dust']
      }
    ],

    environment: { climate: 'tropical', rainfall: '6 mm', altitude: '550m' },
    goals: { jobs: 30, industry: 'biogas' },

    current: {}
  };

  onEdit = id => {
    let record = this.state.data.find(d => {
      return d.id === id;
    });

    this.setState({
      current: record
    });
  };

  onSubmit = model => {
    let data = [];
    if (model.id) {
      data = this.state.data.filter(d => {
        return d.id !== model.id;
      });
    } else {
      model.id = +new Date();
      data = this.state.data.slice();
    }

    this.setState({
      data: [model, ...data]
    });
  };

  render() {
    // var style_absolute = {
    //     position: 'absolute'
    // }

    let table = this.state.data.map(d => {
      return (
        <tr key={d.id}>
          <td>{d.species}</td>
          <td>{d.name}</td>
          <td>{d.soil_requirement.join(',')}</td>
          <td>
            <Button
              color="info"
              size="sm"
              onClick={() => {
                this.onEdit(d.id);
              }}>
              edit
            </Button>
          </td>
        </tr>
      );
    });

    return (
      <>
        <div id="map" />
        <div id="panel">
          <div id="color-palette" />
          <div>
            <Button color="info" size="sm" id="delete-button">
              Delete Selected Area
            </Button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">{this.renderEnvironment()}</div>
          <div className="col-md-6">{this.renderGoals()}</div>
        </div>

        {/*<DynamicForm className="form"*/}
        {/*             title="Environment"*/}
        {/*             defaultValues={this.state.current}*/}
        {/*             model={[*/}
        {/*                 {key: "species", label: "Species", props: {required: true}},*/}
        {/*                 {key: "name", label: "Name"},*/}
        {/*                 {*/}
        {/*                     key: "soil_requirements", label: "Soil  requirements", type: "checkbox", options: [*/}
        {/*                         {key: "clay", label: "clay", value: "clay"},*/}
        {/*                         {key: "sand", label: "sand", value: "sand"},*/}
        {/*                         {key: "tar", label: "tar", value: "tar"},*/}
        {/*                         {key: "dust", label: "dust", value: "dust"},*/}
        {/*                     ]*/}
        {/*                 },*/}

        {/*             ]}*/}
        {/*             onSubmit={(model) => {*/}
        {/*                 this.onSubmit(model)*/}
        {/*             }}*/}
        {/*/>*/}

        <Table striped size="sm">
          <tbody>{table}</tbody>
        </Table>
      </>
    );
  }

  renderEnvironment() {
    return (
      <Form>
        <FormGroup>
          <Label for="frmEnvAlt">Altitude</Label>
          <Input
            type="text"
            name="frmEnvAlt"
            id="frmEnvAlt"
            placeholder="2674m"
            value={this.state.environment.altitude}
          />
        </FormGroup>
        <FormGroup>
          <Label for="frmEnvClimate">Climate</Label>
          <Input
            type="text"
            name="frmEnvAlt"
            id="frmEnvAlt"
            placeholder="2674m"
            value={this.state.environment.climate}
          />
        </FormGroup>
        <FormGroup>
          <Label for="frmEnvAlt">Rainfall</Label>
          <Input
            type="text"
            name="frmEnvAlt"
            id="frmEnvAlt"
            placeholder="2674m"
            value={this.state.environment.rainfall}
          />
        </FormGroup>
      </Form>
    );
  }
  renderGoals() {
    return (
      <Form>
        <FormGroup>
          <Label for="frmEnvAlt">Industry</Label>
          <Input
            type="text"
            name="frmEnvAlt"
            id="frmEnvAlt"
            placeholder="coal"
            value={this.state.goals.industry}
          />
        </FormGroup>
        <FormGroup>
          <Label for="frmEnvClimate">Jobs</Label>
          <Input
            type="text"
            name="frmEnvAlt"
            id="frmEnvAlt"
            placeholder="50"
            value={this.state.goals.jobs}
          />
        </FormGroup>
      </Form>
    );
  }
}
