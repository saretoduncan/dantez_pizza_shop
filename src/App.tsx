import React from "react";
import "./App.css";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { NavbarComponent } from "./components/Navbar/NavbarComponent";
function App() {
  return (
    <div className='container-fluid'>
      <NavbarComponent />
      <LandingPage />
    </div>
  );
}

export default App;
