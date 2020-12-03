import React, {useState, useEffect} from "react";

function About(){
	return (
		<div>
			<h1 style={style}> This page is under development </h1>
		</div>
	);
}
const style = {
	textAlign: 'center',
	padding: '20px',
	position: 'fixed',
	top: '60px',
	right: '40px',
	background: 'red',
	color: 'white',
	fontSize: '15px'
}
export default About;
