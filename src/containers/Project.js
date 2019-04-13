import React, {Component} from 'react';
import {Button, Table, Form, FormGroup, Label, Input} from 'reactstrap';
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
            jobs: 30,
            housing: 80,
            industry: 'biogas',
            budget: '10000 USD',
            timeframe: '5 years'
        },

        mockup: {
            environment: {
                climate: {default: 'tropical', formName: 'frmEnvClimate', label: 'Climate Type'},
                rainfall: {default: '6 ml', formName: 'frmEnvRainfall', label: 'Rainfall amount'},
                altitude: {default: '2675 m', formName: 'frmEnvAltitude', label: 'Altitude'},
                soil: {default: 'clay', formName: 'frmEnvSoil', label: 'Soil Type'},
                slope: {default: '15%', formName: 'frmEnvSlope', label: 'Slope'},
                temperature: {default: '25 °C', formName: 'frmEnvTemp', label: 'Temperature average'},
                plant_species: {default: 'Baduy, Inka', formName: 'frmEnvSpecies', label: 'Plant species present'},
                tribes: {default: 'Chestnut, Olive', formName: 'frmEnvTribes', label: 'Tribes present'},
            },
            goals: {
                jobs: {default: '40', formName: 'frmGoalJobs', label: 'Jobs for # people'},
                housing: {default: '120', formName: 'frmGoalHousing', label: 'Housing for # people'},
                industry: {default: 'biogas', formName: 'frmGoalIndustry', label: 'Climate Type'},
                budget: {default: '10.000 USD', formName: 'frmGoalBudget', label: 'Climate Type'},
                timeframe: {default: '5 years', formName: 'frmGoalTimeframe', label: 'Climate Type'},
            },
        },

        current: {}
    };


    render() {

        return (
            <>
                <div id="map"/>
                <div>
                    <div className="row" id="panel">
                        <div className="col-xs-12">
                            <div id="color-palette"/>
                            <div>
                                <Button color="info" size="sm" id="delete-button">
                                    Delete Selected Area
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">{this.renderEnvironment(this.state.environment)}</div>
                        <div className="col-md-6">{this.renderGoals(this.state.goals)}</div>
                    </div>
                </div>
            </>
        );
    }

    renderTextInput(mockup, value) {
        return (
            <FormGroup>
                <Label for={mockup.formName}>{mockup.label}</Label>
                <Input
                    type="text"
                    name={mockup.formName}
                    id={mockup.formName}
                    placeholder={mockup.default}
                    value={value}
                />
            </FormGroup>
        );
    }

    renderEnvironment(env) {
        return (
            <Form>
                {this.renderTextInput(this.state.mockup.environment.altitude, env.altitude)}
                {this.renderTextInput(this.state.mockup.environment.slope, env.slope)}
                {this.renderTextInput(this.state.mockup.environment.climate, env.climate)}
                {this.renderTextInput(this.state.mockup.environment.temperature, env.temperature)}
                {this.renderTextInput(this.state.mockup.environment.rainfall, env.rainfall)}
                {this.renderTextInput(this.state.mockup.environment.soil, env.soil)}

                {this.renderTextInput(this.state.mockup.environment.tribes, env.tribes)}
                {this.renderTextInput(this.state.mockup.environment.plant_species, env.plant_species)}
            </Form>
        );
    }

    renderGoals(goals) {
        return (
            <Form>
                {this.renderTextInput(this.state.mockup.goals.jobs, goals.jobs)}
                {this.renderTextInput(this.state.mockup.goals.housing, goals.housing)}
                <FormGroup>
                    <Label for="frmGoalIndustry">Desired industry</Label>
                    <Input type="select" name="frmGoalIndustry" id="frmGoalIndustry" value={goals.industry}>
                        <option>Biofuel</option>
                        <option>CO2</option>
                        <option>Food security</option>
                        <option>Flood protection</option>
                        <option>Biodiversity</option>
                        <option>Products to markets</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="frmGoalBudget">Budget</Label>
                    <Input
                        type="text"
                        name="frmGoalBudget"
                        id="frmGoalBudget"
                        placeholder="10.000 USD"
                        value={goals.budget}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="frmGoalTimeframe">Timeframe</Label>
                    <Input
                        type="text"
                        name="frmGoalTimeframe"
                        id="frmGoalTimeframe"
                        placeholder="5 years"
                        value={goals.timeframe}
                    />
                </FormGroup>
            </Form>
        );
    }
}
