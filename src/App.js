import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Tv from "./components/Tv";
import MovieDetails from "./components/MovieDetails";
import TvDetails from "./components/TvDetails";
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/content">
        <div>
          <Route path="/" component={Home} exact></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/movie/:id" component={MovieDetails}></Route>
          <Route path="/tv" component={Tv}></Route>
          <Route path="/tvs/:id" component={TvDetails}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
