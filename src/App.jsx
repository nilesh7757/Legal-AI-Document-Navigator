import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Chatbot from "./pages/Chatbot";
import Summary from "./pages/Summary";
import Lawyers from "./pages/Lawyers";

function App() {
  return (
    <Router>
      {/* Navbar at the top always */}
      <Navbar />
      
      {/* Page routes */}
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/summary" element={<Summary />} />
      <Route path="/lawyers" element={<Lawyers />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      </Routes>

    </Router>
  );
}

export default App;
