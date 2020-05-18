import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { Home } from "./components/Home";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { About } from "./components/about";
import { Post } from "./components/post";

function App() {
  return (
    <div className="App">
      <Router>
        <Header title="josefo" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/work" component={Post} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
