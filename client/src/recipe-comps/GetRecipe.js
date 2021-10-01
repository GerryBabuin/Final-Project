import React, {useState} from "react";
import recipeDataScraper from  'recipe-data-scraper';

const GetRecipe = () => {};

const [recipeData, setRecipeData] = useState([]);

async function (getRecipeData) {
  try {
    // pass a full url to a page that contains a recipe
    const url = "https://www.thekitchn.com/coconut-milk-braised-chicken-22977551";
    const recipe = await recipeDataScraper(url);
    res.json({ recipe });
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
}
getRecipeData();

export default GetRecipe;
