import anime from "animejs";
import { useRef } from "react";
import { useGlobalState } from "../globalState";

const Description = () => {
  const { theme } = useGlobalState();

  const words = `code kanvasku,
logika warnanya.
Setiap baris yang kutulis
adalah sapuan kuas
menuju karya yang tak pernah selesai—
karena selalu ada yang bisa diciptakan lagi.`.split(" ");

  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    const wordElement = wordRefs.current[index];
    if (!wordElement) return;

    anime({
      targets: wordElement,
      scale: [1, 1.2],
      rotate: [(Math.random() - 0.5) * 15],
      translateX: [(Math.random() - 0.5) * 10],
      translateY: [(Math.random() - 0.5) * 10],
      color:
        theme === "dark"
          ? ["#facc15", "#fde047", "#fef9c3"] // gold gradient untuk dark
          : ["#2563eb", "#3b82f6", "#93c5fd"], // biru soft gradient untuk light
      duration: 600,
      easing: "easeOutElastic(1, .6)",
      complete: () => {
        anime({
          targets: wordElement,
          scale: 1,
          rotate: 0,
          translateX: 0,
          translateY: 0,
          color: theme === "dark" ? "#f9fafb" : "#1f2937", // balik ke default (white/gray-800)
          duration: 800,
          easing: "easeOutQuad",
        });
      },
    });
  };

  return (
    <div
      className={`flex flex-wrap gap-2 p-6 rounded-xl shadow-xl transition-colors duration-500
        ${
          theme === "dark"
            ? "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900"
            : "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300"
        }`}
    >
      {words.map((word, index) => (
        <span
          key={index}
          ref={(el) => (wordRefs.current[index] = el)}
          onMouseEnter={() => handleMouseEnter(index)}
          className={`px-2 py-1 rounded-md cursor-pointer font-medium transition-all 
            ${theme === "dark" ? "text-gray-100" : "text-gray-800"}
          `}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default Description;
