//import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import stylesheet AOS
import Header from "./components/Header";
import Navigasi from "./components/navigasi";
import Banner from "./components/banner";
import Code from "./components/code";
import PersonalData from "./components/personalData";
import Porfofio from "./components/porfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";

//AOS untuk semua yg di ca5rd
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <Navigasi />
      <Banner />
      <Code />
      <PersonalData />
      <Porfofio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
