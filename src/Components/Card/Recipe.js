import React, {useState, useEffect} from 'react';
import './Recipe.css';

function Recipe(props){
	const [recipe, setRecipe] = useState({});
	const [label, setLabel] = useState([]);

	useEffect(() => {
		setRecipe(props.details.recipe);
		setLabel(props.details.recipe.healthLabels);
	}, [props]);

	return (
		<a href={recipe.url} target="_blank" rel="noreferrer">
			<div className="card">
				<div className="card-img">
					<img src={recipe.image} />
				</div>
				<div className="card-text">
					<h1> {recipe.label} </h1>
					<h3> {recipe.source} </h3>
					<h2> Cal: {parseFloat(recipe.calories).toFixed(2)} kcal </h2>
					{label.map((item, index) => (
						<h4 className="tag" key={index}> {item} </h4>
					))}
				</div>
			</div>
		</a>
	);
}

export default Recipe;
