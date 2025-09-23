import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AboutUs from "./components/pages/AboutUs";
import Student from "./components/studenttable/student";







 function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/" element={<Student />} />
          {/* 👈 new route */}
      </Routes>
      <Footer/>
    </Router>
  );
};
export default App;