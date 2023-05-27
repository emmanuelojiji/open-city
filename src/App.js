import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Feed from "./Views/Feed";

function App() {
  const defaultVote = localStorage.getItem("votes") || 0;

  const [votes, setVotes] = useState(defaultVote);

  useEffect(() => {
    localStorage.setItem("votes", votes);
    console.log(votes);
  }, [votes]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={<Feed votes={votes} setVotes={setVotes} />}
          />
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
