import anime from "animejs";
import React, { useRef } from "react";

const Description = () => {
  const words =
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil atque
  magnam veritatis molestias dignissimos, doloribus, nobis quibusdam
  mollitia nemo impedit laudantium fuga doloremque`.split(" "); // Pisahkan berdasarkan spasi

  const wordRefs = useRef<(HTMLParagraphElement | null)[]>([]); // Array untuk referensi setiap kata
  const handleMouseEnter = (index: number, event: React.MouseEvent) => {
    const wordElement = wordRefs.current[index];
    if (!wordElement) return;

    const { clientX, clientY } = event; // Dapatkan posisi mouse
    anime({
      targets: wordElement,
      borderColor: ["#22c55e", "#4ade80", "#16a34a"], // Warna border berubah
      backgroundColor: ["#16a34a", "#4ade80", "#22c55e"], // Efek warna box
      translateX: [0, (clientX % 10) - 5], // Pergerakan horizontal berdasarkan mouse
      translateY: [0, (clientY % 10) - 5], // Pergerakan vertikal berdasarkan mouse
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  return (
    <div className="flex flex-wrap gap-2 p-5 bg-gray-600 border rounded-lg">
      {words.map((word, index) => (
        <p
          key={index}
          ref={(elm) => (wordRefs.current[index] = elm)} // Simpan referensi elemen
          onMouseEnter={(e) => handleMouseEnter(index, e)}
          className="border border-green-500 bg-green-700 text-white px-2 py-1 rounded-lg transition-transform duration-300 cursor-pointer"
        >
          {word}
        </p>
      ))}
    </div>
  );
};

export default Description;
