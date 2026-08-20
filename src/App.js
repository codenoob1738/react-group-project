import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ApiData from "./components/ApiData";
import UserInput from "./components/UserInput";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Star Wars Movie App</h1>

        <nav>
          <Link to="/">Movies</Link>
          {" | "}
          <Link to="/fan">Fan Information</Link>
        </nav>

        <Routes>
          <Route path="/" element={<ApiData />} />
          <Route path="/fan" element={<UserInput />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;