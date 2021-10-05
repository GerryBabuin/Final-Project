// import logo from "./logo.svg";
import "./main.css";
import React from "react";
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

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/recipes">
          <Recipes />
        </Route>
        <Route path="/addnew">
          <Import />
        </Route>
        <Route path="/newrecipe">
          <NewRecipe />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/tags">
          <Tags />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
