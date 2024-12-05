import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useSearchParams } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    const query = new URLSearchParams({ name: "John", age: "25" });
    navigate(`/profile?${query.toString()}`);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleNavigation}>Go to Profile with Query Params</button>
    </div>
  );
}

function Profile() {
  const [searchParams] = useSearchParams();

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name: {searchParams.get("name")}</p>
      <p>Age: {searchParams.get("age")}</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
