import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import StudentForm from './components/Students/StudentForm';
import Students from './components/Students/Student';
import {Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }
  
  componentDidMount(){
    axios
    .get(`http://localhost:3000/`)
    .then( res => {
      this.setState({
        students: res.data
      })
    })
    .catch(err => console.log(err))
  }

  removeStudent = id => {
    axios
      .delete(`http://localhost:3000/${id}`)
      .then(res => {
        this.setState({students: res.data});
      })
      .catch(error => {
        console.error('NO!', error);
      });
  };


  render() {
    return (
      <div className="App">
         <NavBar/>
        <Route
        exact path="/student-form"
        component={StudentForm}
        />
        <Route path="/"
         render={props => (
          <Students
          {...props}
          students={this.state.students}
          removeStudent={this.removeStudent}
        />
        )}/>
      </div>
    );
  }
}
export default App;