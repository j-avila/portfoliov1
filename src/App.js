import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <Home logo={logo} />
    </div>
  );
}

export default App;
