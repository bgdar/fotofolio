import { TypeAnimation } from "react-type-animation";
import React, { useState } from "react";
import ImgWithLoading from "../all-componets/imgWithLoading";

export default function Banner() {
  //membuat pergerakan pada mouse
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - left,
      y: e.clientY - top,
    });
    //cek jika keluar dari element maka kembalikan ke posisi awal
    if (
      e.clientX < left ||
      e.clientX > left + e.currentTarget.clientWidth ||
      e.clientY < top ||
      e.clientY > top + e.currentTarget.clientHeight
    ) {
      setPos({ x: 0, y: 0 });
    }
  };

  return (
    <div className="relative overflow-hidden" onMouseMove={handleMouseMove}>
      {/* border yg mengikuti banner yg di sebelah kiri */}
      <div
        style={{ top: pos.y, left: pos.x }}
        className="absolute h-14 w-14 rounded-full bg-slate-500/50 border-4 border-white/30 shadow-xl 
             flex items-center justify-center text-white font-semibold 
             backdrop-blur-lg opacity-30  duration-300"
      >
        <span className="text-sm drop-shadow-lg">Hello </span>
      </div>

      {/* border yg mengikuti banner yg di sebelah kiri */}
      {/* persegi di sebelah kanan */}
      <div className="z-0   absolute border-4 border-slate-700 bg-slate-500 opacity-10 h-[80vh] w-[25vw] [clip-path:polygon(0%_0%,_100%_50%,_0%_100%)]"></div>
      {/* bagian content yg di tengah */}
      {/* Lingkaran di Ujung Atas Kanan */}
      <div className="w-[65vw] h-[90vh] opacity-5 bg-neutral-200 absolute top-0 right-0 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div
        id="home"
        className="section relative  container mx-auto max-w-[500px] px-2 items-center z-10"
      >
        {/* Lingkaran di Ujung Atas Kanan */}
        <div className="w-full ">
          <div className="h-[180px] -z-30 w-[180px] mx-auto rounded-full transition ">
            {/* <img
              src="./img/my-custom.png"
              alt="hay its me"
              className="border-sky-100 border-4"
            /> */}
            <ImgWithLoading
              src={"/img/my-custom.png"}
              alt="hay its me"
              addClass="border-sky-100 border-4"
            />
          </div>
          <div className="block text-center from-neutral-700 font-bold ">
            <TypeAnimation
              sequence={[
                "👋 Hello, I am a developer",
                3000,
                "👂 Pay attention!",
                600,
                "✨ Experiment and you'll discover", // Text 3
                500,
                "💡 Once you discover, you'll understand", // Text 4
                500,
                "🚀 Let's move forward!", // Text 5
                350,
              ]}
              wrapper="span"
              speed={60}
              deletionSpeed={30}
              cursor={true} // Display blinking cursor
              repeat={Infinity} // Loop animation infinitely
              style={{
                fontSize: "1.1em", // Text size
                fontWeight: "bold", // Bold text
                color: "#afc6e0", // Primary color
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)", // Text shadow for added style
                display: "inline-block", // Maintain inline styling
              }}
              className="custom-animation" // Optional: Add custom class for further styling
            />
          </div>
          <div className="max-w-[750px] text-center text-gradient ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus culp optio of
          </div>
        </div>
      </div>
    </div>
  );
}
