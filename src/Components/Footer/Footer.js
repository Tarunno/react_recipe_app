import React, {useState, useEffect} from "react";
import './Footer.css';

function NavBar(){
	return (
		<div className="footer">
			<div className="footer-grid">
				<div className="section">
					<h4>Tutorials</h4>
					<p>Backend Dev</p>
					<p>Frontend Dev</p>
					<p>Workflow</p>
					<p>Testing</p>
					<p>Design</p>
					<p>Marketing</p>
				</div>
				<div className="section">
					<h4>Inspiration</h4>
					<p>Apps</p>
					<p>Brand</p>
					<p>Marketing</p>
					<p>Web</p>
					<p>Management</p>
				</div>
				<div className="section">
					<h4>Resources</h4>
					<p>Coding</p>
					<p>Graphics</p>
				</div>
				<div className="section">
					<h4>Studio</h4>
					<p>Music</p>
					<p>Videos</p>
					<p> GIF </p>
				</div>
			</div>
			<div className="footer-bottom">
				<h2> React Recipe App, Mahadi hasan tarunno &copy; 2020 </h2>
			</div>
		</div>
	);
}

export default NavBar;
