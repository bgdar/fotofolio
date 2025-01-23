//import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import stylesheet AOS
import Header from "./components/Header";
import Navigasi from "./components/navigasi";
import Banner from "./components/banner";
import Profil from "./components/profil";
import Porfofio from "./components/porfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";
// import "./App.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Navigasi />
      <Banner />
      <Profil />
      <Porfofio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
