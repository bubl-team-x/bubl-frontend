import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class StudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      school:'',
      hobbies:''
    };
  }
  addStudent = () => {
    axios
    .post('http://localhost:3000/student', this.state);

    this.setState({
      name: '',
      age: '',
      height: '',
      school:''
    });
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="StudentForm">
        <form onSubmit={this.addStudent}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            type="number"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            type="number"
          /> 
          <input
          onChange={this.handleInputChange}
          placeholder="school"
          value={this.state.school}
          name="school"
        />
          <input
          onChange={this.handleInputChange}
          placeholder="#hobbies"
          value={this.state.hobbies}
          name="hobbies"
        />
          <button type="submit">Add profile</button>
        </form>
      </div>
    );
  }
}

StudentForm.propTypes = {
  newStudent: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    height: PropTypes.string,
    school: PropTypes.string,
    hobbies: PropTypes.string
  }),
  addStudent: PropTypes.func,
  handleInputChange: PropTypes.func
}



export default StudentForm;