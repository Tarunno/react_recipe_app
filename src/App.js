import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import Recipes from './Components/RecipeContainer/Recipes';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';




function App() {
    const API_ID = "bff66545";
    const API_KEY = "09a4c08c57897471067244c49209c61b";
    const API_URL = `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

    const [query, setQuery] = useState("chicken");
    const [search, setSearch] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(6);

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const getRecipe = async () => {
        var url = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&from=${start}&to=${end}`;
        var reponse = await fetch(url);
        var data = await reponse.json();
        console.log(data.hits);
        setRecipes(recipes.concat(data.hits));
    }
    const getSearch = (e) =>{
        e.preventDefault();
        setQuery(search);
        setStart(0);
        setEnd(6);
        setRecipes([]);
    }

    const loadMore = () => {
        setStart(start + 6);
        setEnd(end + 6);
    }

    useEffect(() => {
        if(query == ""){
            setQuery("chicken");
        }
        getRecipe();
    }, [query, end]);

    return (
		<div className="App">
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/about" component={About}/>
                </Switch>
            </Router>
            <form className="search-form" onSubmit={getSearch}>
                <input onChange={handleChange} type="text" value={search}/>
                <button type="submit"> search </button>
            </form>
            <Recipes recipes={recipes}/>
            <h3 className="loadMore" onClick={loadMore}> More </h3>
            <Footer />
        </div>
	);
}

export default App;
