import { TypeAnimation } from "react-type-animation";

export default function Banner() {
  return (
    <div
      id="home"
      className="section container mx-auto max-w-[400px] px-2 items-center"
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
              "hy I am developers",
              3000,
              "listen!",
              600,
              "if you try then you know",
              500,
              "when you know then you think",
              500,
              "Rooooooow 🥴",
              500,
            ]}
            wrapper="span"
            speed={30}
            style={{ fontSize: "1.6em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
        <div className="max-w-[750px] text-center text-gradient">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          culpa nostrum quaerat ab mollitia, similique itaque in sit obcaecati,
          assumenda velit asperiores saepe labore! Tempore optio of
        </div>
      </div>
    </div>
  );
}
