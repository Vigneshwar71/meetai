import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import UploadVideo from "./Pages/UploadVideo";
import MeetingManagement from "./Pages/MeetingManagement";
import MultilingualAI from "./Pages/MultilingualAI";
import QAEngine from "./Pages/QAEngine";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<UploadVideo />} />
            <Route path="/meetings" element={<MeetingManagement />} />
            <Route path="/translate" element={<MultilingualAI />} />
            <Route path="/qa" element={<QAEngine />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
