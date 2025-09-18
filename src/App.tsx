//import { useState } from "react";
import { useEffect, useRef, useState } from "react";
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
import Terminal from "./components/terminal";

import LoadingScreen from "./all-componets/loading-screen";
import anime from "animejs";
//AOS untuk semua yg di ca5rd
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isLoading,setIsloading] = useState<boolean>(true);
  const circleRef = useRef<HTMLDivElement | null>(null);
 const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const {  left , top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Anime.js animasi posisi lingkaran
    anime({
      targets: circleRef.current,
      translateX: x - 28, // offset setengah width (h-14 = 56px)
      translateY: y - 28, // offset setengah height
      duration: 500,
      easing: "easeOutExpo",
    });
  };
  return (
    <>

{isLoading && ( <LoadingScreen  onFinish={() => setIsloading(false)}/>)}
{!isLoading && (
  <main onMouseMove={handleMouseMove}> 

<Header /> 
<Navigasi /> 
   <div
        ref={circleRef}
        className="absolute h-14 w-14 rounded-full  border-4 border-white/30 shadow-xl 
             flex items-center justify-center  font-semibold 
             backdrop-blur-lg opacity-30  duration-300"
      >
        <span className="text-sm drop-shadow-lg">Hello </span>
      </div>

    <Banner />
     <Code /> 
     <PersonalData /> 
     <Terminal /> 
    <Porfofio />
     <Contact /> 
     <Footer /> 
      
  </main>

)}
    </>
  );
}

export default App;
