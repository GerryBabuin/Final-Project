// import logo from "./logo.svg";
import "./main.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./Homepage";
import Footer from "./components/Footer";
import SignUp from "./user-comps/SignUp.js";
import Login from "./user-comps/Login.js";
import Recipes from "./recipe-comps/Recipes";
import Tags from "./recipe-comps/Tags";
import Search from "./recipe-comps/Search";
import ImportUrl from "./recipe-comps/ImportUrl";

function App() {
  const [user, setUser] = useState();

  const getUserData = () => {
    return fetch("/user/:id")
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setUser(data.data);
          console.log(data.data, "user");
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <BrowserRouter>
      <Header user={user} setUser={setUser} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/recipes">
          <Recipes />
        </Route>
        <Route path="/addnew">
          <ImportUrl />
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
          <Login getUserData={getUserData} />
        </Route>
        {/* <Route exact path="/account">
          <Account user={user} setUser={setUser} />
        </Route> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
