import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import Content from "./components/content/Content";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";
import Do from "./components/do/Do";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { Parallax } from "react-parallax";
import logo69 from "./components/assets/logo3.jpg";
const App = () => {
  return (
    <div className="App">
      <Helmet>
        <title>Sangharsh Portfolio</title>
      </Helmet>
      <Navbar />
      <Parallax strength={500} bgImage={logo69} >
        <Content />
      </Parallax>
      <Do />

      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
