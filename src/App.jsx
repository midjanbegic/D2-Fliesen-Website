import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Projects } from "./pages/Projects/Projects.jsx";
import { MainContent } from "./components/MainContent/MainContent.jsx";
import CookieConsent from "./components/Cookies/CookieConsent.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
      <CookieConsent />
    </Router>
  );
}

export default App;
