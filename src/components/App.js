import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar"

function App() {
  return (
    <div className="app">
      <Header />
      <NavBar />
    </div>
  );
}

export default App;
