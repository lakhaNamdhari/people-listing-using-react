import React, { Component } from 'react'; 

class Person extends Component {
  render() {
    return (
      <div className="person">
        <img src={this.props.data.picture.large} alt={`${this.props.data.name.first} ${this.props.data.name.last}`} />
        <table>
          <tbody> 
            <tr>
              <th>Name</th>
              <td>{`${this.props.data.name.title} ${this.props.data.name.first} ${this.props.data.name.last}`}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{this.props.data.gender}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td><a href={`mailto:${this.props.data.email}`}>{this.props.data.email}</a></td>
            </tr>
            <tr>
              <th>Phone</th>
              <td><a href={`tel:${this.props.data.phone}`} >{this.props.data.phone}</a></td>
            </tr>
            <tr>
              <th>Location</th>
              <td>
                <p>{`${this.props.data.location.street} ${this.props.data.location.city}`}</p> 
                <p>{`${this.props.data.location.state} ${this.props.data.location.postcode}`}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Person;
