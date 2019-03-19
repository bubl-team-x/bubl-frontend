// import React from 'react';
// import './App.css';
// import { Route } from "react-router-dom";
// import { Home, About, Contact, Navigation } from './NavBar/components';

// // Nav-Bar
// const App = () => (
//   <div>
//     <Navigation />
//     <Route path={ "/" } exact component={ Home } />
// 	  <Route path={ "/about" } component={ About } />
// 	  <Route path={ "/contact" } component={ Contact } />
//   </div>
// );

// import React from 'react';
// import './App.css';
// import TodoList from "./Todo/TodoList";
// import TodoForm from "./Todo/TodoForm";

// // TO-DO
// const todos = [
//     {
//       task: "Read 5 summer listings",
//       id: 1234,
//       completed: false
//     },
//     {
//       task: "Create club",
//       id: 1233,
//       completed: false
//     },
//     {
//       task: "Go to a party",
//       id: 1222,
//       completed: false
//     },
//     {
//       task: "Join fall sport",
//       id: 1256,
//       completed: false
//     }
//   ];
//   class App extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         todos,
//         newTodoText: ""
//       };
//     }
//     handleChanges = event => {
//       this.setState({ [event.target.name]: event.target.value });
//     };
  
//     render() {
//       return (
//         <div>
//           <h2>Lets set GoAls!</h2>
//           <TodoList todos={this.state.todos} />
//           <TodoForm
//             handleChanges={this.handleChanges}
//             newTodoText={this.state.newTodoText}
//           />
  
//         </div>
//       );
//     }
//   }
  

// import React, { Component } from 'react';
// 	import { Route } from 'react-router-dom';
// 	import SavedList from './Schools/SavedList';
// 	import SchoolList from './Schools/SchoolList';
// 	import School from './Schools/School';
// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       savedList: []
//     };
//   }
//   addToSavedList = school => {
//     const savedList = this.state.savedList;
//     savedList.push(school);
//     this.setState({ savedList });
//   };
//   render() {
// 	    return (
// 	      <div>
// 	        <SavedList list={this.state.savedList} />
// 	        <div>Replace this Div with your Routes</div>
// 	        <Route exact path="/" component={SchoolList}/>
// 		        <Route 
// 		          path="/schools/:id" 
// 		          render={props => (
// 		            <School {...props} addToSavedList={this.addToSavedList} />
// 		          )}
// 		        />
// 	      </div>
// 	    );
// 	  }
// }


//Student Profiles

import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './StudentForm';
import Smurfs from './Students';
import {Route, NavLink} from 'react-router-dom';

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
               <div className='Nav'>
          <NavLink exact to="/" activeClassName="activeNavButton">
            Home
          </NavLink>
          <NavLink to="/student-form" activeClassName="activeNavButton">
            Add New
          </NavLink>
        </div>
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