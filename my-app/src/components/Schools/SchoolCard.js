import React from 'react';
	
	const SchoolCard = props => {
        
	  return(
		    <div className="school-card">
		      <h2>{props.name}</h2>
		      <div className="school-princeple">
		        Princeple: <em>{props.princeple}</em>
		      </div>
		      <div className="school-metascore">
		        Metascore: <strong>{props.metascore}</strong>
		      </div>
		      <h3>Teachers</h3>
	
		      {props.grade.map(grade => (
		        <div key={grade} className="school-grade">
		          {grade}
		        </div>
		      ))}
		    </div>
		  )
	};
	
	export default SchoolCard;