import React, { Component } from 'react';
	import axios from 'axios';
	import { Link } from 'react-router-dom'
	import SchoolCard from './SchoolCard';
	export default class SchoolList extends Component {
	  constructor(props) {
	    super(props);
    this.state = {
      schools: []
    };
	  }
	
	  componentDidMount() {
	    console.log(this.state.schools.map(school => school))
	    axios
	      .get('http://localhost:5000/api/schools')
	      .then(response => {
        this.setState(() => ({ schools: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }
  render() {
    return (
      <div className="school-list">
        {this.state.schools.map(school => (
          <SchoolDetails key={school.id} school={school} />
        ))}
      </div>
    );
  }
}
	function SchoolDetails({ school }) {
	  const { name, princeple, metascore, grade } = school;
	  return (
        <Link to={`/schools/${school.id}`}>
        <SchoolCard name={name} princeple={princeple} metascore={metascore} grade={grade}/>
      </Link>
);
}