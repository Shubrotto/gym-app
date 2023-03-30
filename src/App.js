import React from "react";
import Feature from "./components/Feature/Feature";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Feature />
      <Offer />
      <About />
      <Contact />
    </div>
  );
}

export default App;
