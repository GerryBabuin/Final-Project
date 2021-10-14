import "./main.css";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./Homepage";
import Footer from "./components/Footer";
import SignUp from "./user-comps/SignUp.js";
import Login from "./user-comps/Login.js";
import Recipes from "./recipe-comps/Recipes";
import Tags from "./recipe-comps/Tags";
import Search from "./recipe-comps/Search";
import Import from "./recipe-comps/ImportUrl";
import NewRecipe from "./recipe-comps/NewRecipe";
import DetailsRecipe from "./recipe-comps/DetailsRecipe";
import EditRecipe from "./recipe-comps/EditRecipe";
import RandomRecipe from "./recipe-comps/Random";
import Confirmation from "./recipe-comps/Confirmation";

function App() {
  const user = sessionStorage.getItem("user");
  const [signedInUser, setSignedInUser] = useState(null);

  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/recipes/:id">
          <Recipes user={user} />
        </Route>
        <Route path="confirmation">
          <Confirmation />
        </Route>
        <Route path="/recipes/:userId/:recipeId">
          <DetailsRecipe />
        </Route>
        <Route path="/edit/recipe/:userId/:recipeId">
          <EditRecipe />
        </Route>
        <Route path="/addnew">
          <Import />
        </Route>
        <Route path="/newrecipe">
          <NewRecipe user={user} />
        </Route>
        <Route path="/search">
          <Search signedInUser={signedInUser} />
        </Route>
        <Route path="/tags">
          <Tags signedInUser={signedInUser} />
        </Route>
        <Route path="/random">
          <RandomRecipe signedInUser={signedInUser} />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          <Login setSignedInUser={setSignedInUser} />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
