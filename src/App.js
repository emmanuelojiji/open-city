import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Feed from "./Views/Feed";

function App() {
 

 
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={<Feed />}
          />
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
