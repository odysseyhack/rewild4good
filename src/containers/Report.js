import React, { Component } from 'react';
import { Table } from 'reactstrap';

export default class Report extends Component {
  render() {
    return (
      <div className="container my-4">
        <h2 className="mb-4">Recipe Report</h2>
        <br />
        <h4>Planting pattern</h4>
        <img src="/img/planting_pattern.png" />
        <Table size="sm" striped>
          <tbody>
            <tr>
              <td>E</td>
              <td>Arenga Pinnata</td>
            </tr>
            <tr>
              <td>V</td>
              <td>Glycindria</td>
            </tr>
            <tr>
              <td>I</td>
              <td>Ficus</td>
            </tr>
            <tr>
              <td>T</td>
              <td>Fern</td>
            </tr>
          </tbody>
        </Table>
        <br />
        <br />
        <br />
        <h4>Budget breakdown</h4>
        <Table size="sm" striped>
          <tbody>
            <tr>
              <td>Workforce</td>
              <td>2.000 USD</td>
            </tr>
            <tr>
              <td>Seedlings</td>
              <td>1.000 USD</td>
            </tr>
            <tr>
              <td>Fertilizer</td>
              <td>500 USD</td>
            </tr>
            <tr>
              <td>Transport</td>
              <td>300 USD</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
