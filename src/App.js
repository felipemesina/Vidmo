import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Customers from "./components/customers";
import Movies from "./components/movies";
import MovieDetails from "./components/movieDetails";
import Navbar from "./components/common/navbar";
import NotFound from "./components/notFound";
import Rentals from "./components/rentals";
import LoginForm from "./components/loginForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/movies" component={Movies} />
          <Route path="/login" component={LoginForm} />
          <Redirect exact from="/" to="/movies" />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/" exact component={this.App} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
