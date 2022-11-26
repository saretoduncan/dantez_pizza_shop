import React from "react";
import { Navbar } from "./components/NavigationComponent/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./components/LandingPageComponent/LandingPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <LandingPage/>
      </Router>
      
    </>
  );
}

export default App;
