import React, { Component } from 'react';
import Person from '../person/Person';
import '../person/person.css';

class People extends Component {
  constructor() {
    super();

    this.serviceURI = 'https://randomuser.me/api/?results=12';
    this.state = {
      data: []
    };
    this.fetchState();
  }

  fetchState(){
    fetch(this.serviceURI).then((response) => {
      response.json().then((jsonResponse) => {
        this.setState({
          data: jsonResponse.results || []
        });
      })
    });
  }

  render() {
    return (
      <div className="people">
        { this.state.data.map((person, i) => <Person data={person} key={i} />) }
      </div>
    );
  }
}

export default People;
