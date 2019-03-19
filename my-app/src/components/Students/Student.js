import React from 'react';

const Student = props => {
    return(
      <div className="Student">
       
            <h3>{props.name},</h3>
            <p>{props.height}in. tall</p>
            <p>{props.age} years old</p>
            <strong>{props.school}High</strong>
            <p>{props.hobbies} ...& this is a bit on what I like</p>
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
school:'',
hobbies:''
};

export default Student;