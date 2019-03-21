import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import StudentForm from './components/Students/StudentForm';
import Students from './components/Students/Student';
import {Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Bubbles from './components/bubbles/bubbles';
import Home from './components/auth/Home';
import SchoolCard from './components/Schools/SchoolCard';
import SchoolList from './components/Schools/SchoolList';




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
         {/* <Bubbles/> */}
        <Route
         path="/student-form"
        component={StudentForm}
        />
        <Route exact path="/student-form"
         render={props => (
          <Students
          {...props}
          students={this.state.students}
          removeStudent={this.removeStudent}
        />
        )}/>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/bubbles' component={Bubbles} />
        <Route exact path='/' component={Home} />
        <Route path='/school-card' component={SchoolCard} />

      </div>
    );
  }
}
export default App;