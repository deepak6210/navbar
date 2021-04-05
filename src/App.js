import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import User from './User';
import Error from './Error';
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/user/:fname/:lname" component={User} />
        <Route component= {Error} />
      </Switch>
    </>
  );
};
export default App;