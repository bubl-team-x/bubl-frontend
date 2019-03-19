import React, { Component } from 'react';
import Student from './Student';

class Students extends Component {
    render() {
        return (
          <div className="Students">
            <h1>Bubls</h1>
            <ul>
              {this.props.students.map(student => {
                return (
                  <Student
                    name={student.name}
                    id={student.id}
                    age={student.age}
                    height={student.height}
                    key={student.id}
                    removeStudent={this.props.removeStudent}
                  />
                );
              })}
            </ul>
          </div>
        );
      }
    }
    Student.defaultProps = {
     students: [],
    };
    export default Students;