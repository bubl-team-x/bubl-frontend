import React, { Component } from 'react';
	import { Link, NavLink } from 'react-router-dom';
	export default class SavedList extends Component {
	  constructor(props) {
	    super(props);
  }
  render() {
    return (
	      <div className="saved-list">
	        <h3>Saved Schools:</h3>
	        {this.props.list.map(school => (
                 <NavLink
                 to={`/schools/${school.id}`}
                 style={{
                   textDecoration: 'none',
                   color: 'black'
                 }}>
                 <span key={school.id} className="saved-school">{school.title}</span>
               </NavLink>
                 ))}
                      <Link to={'/'} >
		          <div className="contact-button">Contact</div>
		        </Link>
	      </div>
	    );
	  }
}