import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
    <div className="App">
	                <h1>Bubls-X</h1>
	                <div>
	                    <Link to={ "/" }>Home</Link>
	                </div>
	                <div>
	                    <Link to={ "/About" } href="">About Me</Link>
	                </div>
	                <div>
	                    <Link to={ "/Contact" }>Contact Schools</Link>
	                </div>
	            </div>
              </div>
  );
};

export default Navigation;