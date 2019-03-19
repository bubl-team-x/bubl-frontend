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

import React from 'react';
import './App.css';
import TodoList from "./Todo/TodoList";
import TodoForm from "./Todo/TodoForm";

// TO-DO
const todos = [
    {
      task: "Read 5 summer listings",
      id: 1234,
      completed: false
    },
    {
      task: "Create club",
      id: 1233,
      completed: false
    },
    {
      task: "Go to a party",
      id: 1222,
      completed: false
    },
    {
      task: "Join fall sport",
      id: 1256,
      completed: false
    }
  ];
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        todos,
        newTodoText: ""
      };
    }
    handleChanges = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
  
    render() {
      return (
        <div>
          <h2>Lets set GoAls!</h2>
          <TodoList todos={this.state.todos} />
          <TodoForm
            handleChanges={this.handleChanges}
            newTodoText={this.state.newTodoText}
          />
  
        </div>
      );
    }
  }
  
export default App;