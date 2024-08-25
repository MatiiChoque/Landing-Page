import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Community from "./components/Community/Community";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      <Community />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
