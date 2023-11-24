import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import Content from "./components/content/Content";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";
import Do from "./components/do/Do";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <title>Sangharsh Portfolio</title>
      </Helmet>
      <Navbar />
      <Content />
      <Do />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
