import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RandomRecipe from "./Random.js";


const GetTags = () => {
    const [tag, setTag] = useState("");
    const [recipes, setRecipes] = useState([]);
    const user = sessionStorage.getItem("user");

    function handleClick(tag) {
        setTag(tag);
        console.log("Tag", tag);
        // sortRecipes();
    }

    useEffect(() =>{
        if (tag !== "") {
        fetch(`/search/${user}/${tag}`)
        .then((res) => res.json())
        .then((data) => {
            setRecipes(data.data);
            console.log("useEffect", data.data);
            })}
    }, [tag])
    console.log("User", user);
    
    return (

        <div className = "grid" >
          <div className = "main-content" >
            <h2>What are you looking to make?</h2>  
            <p> click tag find recipes </p> 
              <div className = "categories-container" >
                
                <button onClick = {
                    () => handleClick("Beef")}
                className = "categories" >
                beef </button> 
                
                <button onClick = {
                    () => handleClick("Chicken")
                }
                className = "categories" >
                chicken </button> 
                
                <button onClick = {
                    () => handleClick("Pork")
                }
                className = "categories" >
                pork 
                </button> 
                
                <button onClick = {
                    () => handleClick("Seafood")
                }
                className = "categories" >
                seafood 
                </button> 
                
                <button onClick = {
                    () => handleClick("Vegan")
                }
                className = "categories" >
                vegan 
                </button> 
                
                <button onClick = {
                    () => handleClick("Under 30 mins")
                }
                className = "categories" >
                Under 30 mins 
                </button> 
                
                
                <RandomRecipe user={user} />
                
            </div> 
            <div> 
                
                {!recipes.length ? ( ""
                ) : !recipes.length ? ( <p> no recipes found </p>
                ) : ( 
                    <div>
                    <ul className = "tags" > {
                        recipes.map((recipe) => ( 
                            <Link to = { `/users/recipes/${user}/${recipe.id}` }
                            className = "recipe-link"
                            key = { recipe.id } >

                            <li className = "tag-recipe-name" > { recipe.name } </li> </Link>
                        ))
                    } 
                    
                    </ul>
                    
                    </div>
                )
            } 
            </div> 
        </div> 
    </div>
    );
};

export default GetTags;