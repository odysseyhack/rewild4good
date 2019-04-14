import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './project.css';

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
    environment: {
      climate: '',
      rainfall: '',
      altitude: '',
      soil: '',
      slope: '',
      temperature: '',
      plant_species: '',
      tribes: ''
    },
    goals: {
      jobs: '',
      housing: '',
      industry: 'biogas',
      budget: '',
      timeframe: ''
    },

    mockup: {
      environment: {
        climate: {
          default: 'tropical',
          formName: 'frmEnvClimate',
          label: 'Climate Type'
        },
        rainfall: {
          default: '0 - 2106 ml',
          formName: 'frmEnvRainfall',
          label: 'Rainfall amount'
        },
        altitude: {
          default: '70 m',
          formName: 'frmEnvAltitude',
          label: 'Altitude'
        },
        soil: {
          default: 'Entisols, Inceptisols, Ultisols',
          formName: 'frmEnvSoil',
          label: 'Soil Type'
        },
        slope: {
          default: 'agregar mean slope',
          formName: 'frmEnvSlope',
          label: 'Slope'
        },
        temperature: {
          default: '25.5 - 26.7 °C',
          formName: 'frmEnvTemp',
          label: 'Temperature average'
        },
        plant_species: {
          default: 'Arenga Pinnata, Glycindria, Ficus',
          formName: 'frmEnvSpecies',
          label: 'Native plant species'
        },
        tribes: {
          default: 'Melayu',
          formName: 'frmEnvTribes',
          label: 'Tribes present'
        }
      },
      goals: {
        industry: {
          default: 'biogas',
          formName: 'frmGoalIndustry',
          label: 'Restoration Goal'
        },
        jobs: {
          default: '40',
          formName: 'frmGoalJobs',
          label: 'Jobs for # people'
        },
        housing: {
          default: '120',
          formName: 'frmGoalHousing',
          label: 'Housing for # people'
        },

        budget: {
          default: '10.000 USD',
          formName: 'frmGoalBudget',
          label: 'Budget'
        },
        timeframe: {
          default: '5 years',
          formName: 'frmGoalTimeframe',
          label: 'Timeframe'
        }
      }
    },

    current: {}
  };

  onChange = e => {
    this.setState({ [`form_${e.target.name}`]: e.target.value });
  };

  render() {
    return (
      <>
        <div id="map" />
        <div className="container-fluid">
          <div className="row" id="panel">
            <div className="col-xs-12">
              <div id="color-palette" />
              <div>
                <Button color="info" size="sm" id="delete-button">
                  Delete Selected Area
                </Button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <h4>Environmental conditions</h4>
              <p>Fields are populated automatically</p>
              <br />
              {this.renderEnvironment(this.state.environment)}
            </div>
            <div className="col-md-6">
              <h4>Desired restoration project outcome</h4>
              <p>Fields are optional</p>
              <br />
              {this.renderGoals(this.state.goals)}
            </div>
          </div>
          <div className="text-center my-5">
            <Route
              render={({ history }) => (
                <Button
                  color="primary"
                  size="lg"
                  onClick={() => history.push('/recipies')}>
                  Find suitable recipies
                </Button>
              )}
            />
          </div>
        </div>
      </>
    );
  }

  renderTextInput(mockup, value, className) {
    return (
      <FormGroup>
        <Label for={mockup.formName}>{mockup.label}</Label>
        <Input
          className={className}
          type="text"
          name={mockup.formName}
          id={mockup.formName}
          placeholder={mockup.default}
        />
      </FormGroup>
    );
  }

  renderEnvironment(env) {
    return (
      <Form>
        {this.renderTextInput(
          this.state.mockup.environment.climate,
          env.climate,
          'polycolored'
        )}
        {this.renderTextInput(
          this.state.mockup.environment.soil,
          env.soil,
          'polycolored'
        )}
        {this.renderTextInput(
          this.state.mockup.environment.altitude,
          env.altitude,
          'polycolored'
        )}
        {this.renderTextInput(
          this.state.mockup.environment.slope,
          env.slope,
          'polycolored'
        )}

        {this.renderTextInput(
          this.state.mockup.environment.temperature,
          env.temperature,
          'polycolored'
        )}
        {this.renderTextInput(
          this.state.mockup.environment.rainfall,
          env.rainfall,
          'polycolored'
        )}

        {this.renderTextInput(
          this.state.mockup.environment.tribes,
          env.tribes,
          'polycolored'
        )}
        {this.renderTextInput(
          this.state.mockup.environment.plant_species,
          env.plant_species,
          'polycolored'
        )}
      </Form>
    );
  }

  renderGoals(goals) {
    return (
      <Form>
        <FormGroup>
          <Label for="frmGoalIndustry">Restoration Goal</Label>
          <Input type="select" name="frmGoalIndustry" id="frmGoalIndustry">
            <option>Biofuel</option>
            <option>CO2 sequestration</option>
            <option>Food security</option>
            <option>Flood protection</option>
            <option>Biodiversity</option>
            <option>Products to markets</option>
          </Input>
        </FormGroup>
        {this.renderTextInput(this.state.mockup.goals.budget, goals.budget)}
        {this.renderTextInput(
          this.state.mockup.goals.timeframe,
          goals.timeframe
        )}
        {this.renderTextInput(this.state.mockup.goals.jobs, goals.jobs)}
        {this.renderTextInput(this.state.mockup.goals.housing, goals.housing)}
      </Form>
    );
  }
}
