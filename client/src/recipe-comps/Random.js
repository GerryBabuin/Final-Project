import React, {useState} from "react";
import { useParams, Link } from "react-router-dom";

export const RandomRecipe = () => {
    const [random, setRandom] = useState(null);
    const [loading, setLoading] = useState(true);
    const [foundRecipe, setFoundRecipe] = useState(false);
    const user = sessionStorage.getItem("user");
    const params = useParams();
    const userId = params.id;

    // generate random recipe
    function handleClick(e) {
        console.log("User Random", user)
        fetch(`/random/${user}`)
        .then((res) => res.json())
        .then((data) => {
            if (data.data) {
                setFoundRecipe(true);
            }
            setRandom(data.data);
            setLoading(false);
            console.log("Random Comp", data.data)
            });
    }
    
    console.log("Loading", loading);
    return (
        
        <div>

        <button onClick = {handleClick}
        className = "categories" >
        Suprise Me </button>

{loading ? ( ""
    ) : ( 
    
        <div>
        <ul className = "tags" > {
            
                <Link to = { `/users/recipes/${user}/${random.id}` }
                className = "recipe-link"
                key = { random.id } >

                <li className = "tag-recipe-name" > { random.name } </li> </Link>
            
        } 
        </ul>
        </div>
        
    )
} 
</div>
    );
};

export default RandomRecipe;