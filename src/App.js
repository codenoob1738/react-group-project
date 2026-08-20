import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ApiData from "./components/ApiData";
import UserInput from "./components/UserInput";
import GroupMembers from "./GroupMembers";
import Countries from "./Countries";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <h1>Star Wars Movie App</h1>

          <nav>
            <Link to="/">Movies</Link>
            <Link to="/fan">Fan Information</Link>
            <Link to="/group">Group Members</Link>
            <Link to="/countries">Countries</Link>
          </nav>
        </header>

        <main className="page">
          <Routes>
            <Route path="/" element={<ApiData />} />
            <Route path="/fan" element={<UserInput />} />
            <Route path="/group" element={<GroupMembers />} />
            <Route path="/countries" element={<Countries />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;