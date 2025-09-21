import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Chatbot from "./pages/Chatbot";
import Summary from "./pages/Summary";
import Lawyers from "./pages/Lawyers";
import DocumentAnalyzer from "./pages/DocumentAnalyzer";
import DocumentCreation from "./pages/DocumentCreation";
import LawyerConnect from "./pages/LawyerConnect";
import MyDocuments from "./pages/MyDocuments";

function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/signup'];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
      <>
        {/* Conditionally render navbar */}
        {shouldShowNavbar && <Navbar />}
        
        {/* Page routes with conditional top padding for fixed navbar */}
        <main className={shouldShowNavbar ? "pt-20 bg-gray-50" : "bg-gray-50"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/document-analyser" element={<DocumentAnalyzer />} />
          <Route path="/document-creation" element={<DocumentCreation />} />
          <Route path="/lawyer-connect" element={<LawyerConnect />} />
          <Route path="/my-documents" element={<MyDocuments />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/lawyers" element={<Lawyers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
