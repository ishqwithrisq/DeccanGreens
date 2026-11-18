import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/about";
import SolutionConsultancy from "./pages/SolnCunsult";
import ASD from "./pages/ASD";
import ProjectKnowledgehub from "./pages/projectKnowledgehub";
import Contact from "./pages/contact";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToHash from "./components/ScrollToHash";
import PrivacyPolicy from "./pages/privacy";

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<SolutionConsultancy />} />
        <Route path="/ASD" element={<ASD />} />
        <Route path="/projectKnowledgehub" element={<ProjectKnowledgehub />} />
        <Route path="/contact" element={<Contact />} />
        <Route
  path="/privacy-policy"
  element={<PrivacyPolicy />}
/>
      </Routes>
      <WhatsAppFloat />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
