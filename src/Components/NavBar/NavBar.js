import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar(){
	const [navOpen, setNavOpen] = useState("");

	useEffect(() => {
		document.querySelector('.showcase-text').addEventListener('animationend', function(){
			document.querySelector('.showcase-p').style.visibility = "visible";
		});
		return () => {
			document.querySelector('.showcase-text').removeEventListener('animationend', function(){
				document.querySelector('.showcase-p').style.visibility = "visible";
			});
		}
	}, []);

	return (
		<div className="header">
			<div className="showcase">
				<div className="showcase-img">
				</div>
				<div className="showcase-text">
					<h1> React Recipe book For You </h1>
					<p className="showcase-p"> Search and find out more</p>
				</div>
			</div>
			<div className="nav">
				<cite> <h1> Recipe Book </h1> </cite>
				<ul className={"nav-list " + navOpen}>
					<li onClick={() => setNavOpen("")}><Link to="/"> Home </Link></li>
					<li onClick={() => setNavOpen("")}><Link to="/about"> About </Link></li>
					<li onClick={() => setNavOpen("")}><Link to="/about"> Contact </Link></li>
				</ul>
				<div className="hamburger" onClick={() => navOpen=="toggle"?setNavOpen(""):setNavOpen("toggle")}>
					<div className="line"> </div>
					<div className="line"> </div>
					<div className="line"> </div>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
