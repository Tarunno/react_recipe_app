import React, {useState, useEffect} from 'react';
import Recipe from './../Card/Recipe';
import './Recipes.css';


function Recipes(props){
	const [details, setDetails] = useState([]);

	useEffect(() => {
		setDetails(props.recipes);
	}, [props]);

	return (
		<div className="recipes-container">
			<div className="gird-box">
				{details.map((item, index) => (
					<Recipe key={index} details={item} />
				))}
			</div>
		</div>
	);
}

export default Recipes;
