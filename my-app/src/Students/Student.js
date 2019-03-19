import React from 'react';

const Smurf = props => {
    return(
      <div className="Student">
       
            <h3>{props.name},</h3>
            <p>{props.height}in. tall</p>
            <p>{props.age} years old</p>
            <strong>{props.school},</strong>
            <button
        onClick={() => {
          props.removeStudent(props.id);
        }}
      >
        Delete {props.name}
      </button>
          </div>

);
};



Student.defaultProps = {
name: '',
height: '',
age: '',
school:''
};

export default Student;