import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
	return(
		<div className= 'mt0 ma4' >
			<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
		        <div className="Tilt-inner pa3">
		        <img style = {{paddingTop: '20px'}} alt='Logo' src={brain} />
		        </div>
	        </Tilt>
		</div>
	);

}

export default Logo;