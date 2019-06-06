import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Skills from "./components/Skills/Skills.js";
import Hobbies from "./components/Hobbies/Hobbies.js";
import Footer from "./components/Footer/Footer.js";
import Subheader from "./components/Subheader/Subheader.js";

function App() {
  return (
    <div>
	  <Header />
	  <div className="sub">
	  <Subheader />
	  </div>
      <Hobbies />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
