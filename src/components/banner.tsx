import { TypeAnimation } from "react-type-animation";

export default function Banner() {
  return (
    <div className="relative">
      {/* bagian banner yg di sebelah kiri */}

      <div className="z-0 absolute border-4 bg-slate-500 h-[80vh] w-[25vw] [clip-path:polygon(0%_0%,_100%_50%,_0%_100%)]"></div>

      {/* bagian content yg di tengah */}
      <div
        id="home"
        className="section relative  container mx-auto max-w-[400px] px-2 items-center z-10"
      >
        <div className="w-full">
          <div className="h-[180px] w-[180px] mx-auto shadow-stone-300  rounded-full border-cyan-100 ">
            <img
              src="./img/my-custom.png"
              alt="hay its me"
              className="border-sky-100 border-4"
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
              wrapper="span" // Defines wrapper element (e.g., span, div, p)
              speed={60} // Typing speed in milliseconds
              deletionSpeed={30} // Speed of deleting characters
              cursor={true} // Display blinking cursor
              repeat={Infinity} // Loop animation infinitely
              style={{
                fontSize: "1.5em", // Text size
                fontWeight: "bold", // Bold text
                color: "#afc6e0", // Primary color
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)", // Text shadow for added style
                display: "inline-block", // Maintain inline styling
              }}
              className="custom-animation" // Optional: Add custom class for further styling
            />
          </div>
          <div className="max-w-[750px] text-center text-gradient">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus culpa nostrum quaerat ab mollitia, similique itaque in
            sit obcaecati, assumenda velit asperiores saepe labore! Tempore
            optio of
          </div>
        </div>
      </div>
      {/* bagian banner berakhir */}

      <div className="z-0 right-4 top-0 absolute w-[20vw] h-[45vh] bg-slate-200  [clip-path:polygon(0%_0%,_100%_0%,_50%_100%)]"></div>
    </div>
  );
}
