import "./App.css";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./containers/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HomePage />
      </div>
    </BrowserRouter>
  );
}

export default App;
