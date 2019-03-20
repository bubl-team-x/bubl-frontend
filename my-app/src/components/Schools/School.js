import React, { Component } from 'react';
	import axios from 'axios';
	import SchoolCard from './SchoolCard.js';
	
	export default class School extends Component {
	  constructor(props) {
    super(props);
    this.state = {
      school: null
    };
  }
	
	  componentDidMount() {
        console.log(this.props.match.params.id);
	    const id = this.props.match.params.id;
	    this.fetchSchool(id);
	  }
	
  fetchSchool = id => {
    axios
      .get(`http://localhost:3000/${id}`)
      .then(response => {
        this.setState(() => ({ school: response.data }));
      })
      .catch(error => {
        console.error(error);
	      });
      };
      componentWillReceiveProps(newProps){
	    if(this.props.match.params.id !== newProps.match.params.id){
	      this.fetchSchool(newProps.match.params.id);
	   }
       }
       saveSchool = () => {
        const addToSavedList = this.props.addToSavedList;
       addToSavedList(this.state.school)
     }
   
     render() {
       if (!this.state.school) {
     return <div>Loading school information...</div>;
   }
       const { name, princeple, metascore, grade } = this.state.school;
       return (
         <div className="save-wrapper">
                <SchoolCard name={name} princeple={princeple} metascore={metascore} grade={grade}/>
		        <div onClick={() => this.saveSchool()}className="save-button">Save</div>
	      </div>
	    );
	  }
}