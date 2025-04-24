import CardFotofolio from "../porfolioCmpnt/CardPorfolio";
import { RiProjectorLine } from "react-icons/ri";
import { FaArrowCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useState } from "react";
const dataCardForfolio = [
  {
    judul: "leaf node",
    link: "https://leaf-node.vercel.app/",
    image: "porfolio/leaf-node.jpg",
    descripsi:
      "web sederhana yang di buat dengan node.js dan  express.js di kombinasikan dengan librry sweetAlert2 ",
  },
  {
    judul: "Fyl Bird",
    link: "https://github.com/bgdar/flying-bird",
    image: "porfolio/fly-bird.jpg",
    descripsi: "🔥🦜 Burung? Lembek? Coba Aja sendiri! 🚀💥",
  },
  {
    judul: "daros",
    link: "https://github.com/bgdar/daros",
    image: "porfolio/daros.jpg",
    descripsi: "🖥️ Ini  Sistem Operasi ❌🌐 Ini Website ✅",
  },

  {
    judul: "Golang web",
    link: "https://bitbucket.org/bgdar/golang-web/src/main/",
    image: "porfolio/golang-web.jpg",
    descripsi: "ini Web Mirip Instagram 📷, tapi isinya Kok beda! ",
  },
  {
    judul: "Text Base RPG Game ",
    link: "https://bitbucket.org/bgdar/text-base-rpg-game/src/main/",
    image: "porfolio/text-base-rpg-game.png",
    descripsi:
      "🖥️ Dikembangkan dengan Golang 🚀 | 🎮 Sebuah game Petualangan Fantasy yang Epik! Menggunakan CLI 🔮",
  },
  {
    judul: "Tools CLI",
    link: "https://github.com/bgdar/cli-tools",
    image: "porfolio/tools-cli.jpg",
    descripsi:
      "⚡ Dibangun dengan Node.js + TypeScript untuk pengalaman cepat, efisien, dan powerfull dalam networking serta berbagai kebutuhan lainnya! 🌐💻",
  },
];

export default function Porfofio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // 2 kolom x 2 baris = 4 item
  const totalItems = dataCardForfolio.length;

  const handleNext = () => {
    if (currentIndex + itemsPerPage < totalItems) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePreviously = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <div id="porfolio" className="relative mb-14 mt-60">
      <div className="container relative mx-auto max-w-[800px] px-3 pt-6 pb-20 bg-transparent border-4 border-slate-200">
        <h4 className="mb-3 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg">
          Projects
        </h4>

        <div className="absolute top-0 right-0 bg-slate-200 rounded-full border-8 border-slate-500 p-2 lg:translate-x-9 lg:translate-y-[-2.5em] w-20 h-20 flex justify-center items-center">
          <RiProjectorLine title="Project" className="w-[80%] h-[80%]" />
        </div>

        {/* Grid data porfolio yang  2 kolom x 2 baris */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-4 transition-transform duration-500 ease-in-out">
          {dataCardForfolio
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((data, index) => (
              <CardFotofolio key={index} {...data} />
            ))}
        </div>

        {/* Tombol Navigasi */}
        <div className="flex gap-14 justify-center mt-6">
          <button
            className={`p-2 bg-gray-700 text-white rounded-lg hover:bg-gray-900 ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handlePreviously}
            disabled={currentIndex === 0}
          >
            Previous
          </button>
          <button
            className={`p-2 bg-white/25 text-gray-700 rounded-lg hover:bg-white ${
              currentIndex + itemsPerPage >= totalItems
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={handleNext}
            disabled={currentIndex + itemsPerPage >= totalItems}
          >
            Next
          </button>
        </div>

        {/* Komponen yang Bergeser */}
        <div className="relative w-[18%] mx-auto  h-[50px p-4 mt-4 rounded-2xl flex ">
          {/* Ikon Panah yang Bergerak */}
          <div
            className={`transition-transform duration-300 ease-in-out px-4 ${
              currentIndex + itemsPerPage >= totalItems
                ? "translate-x-5"
                : "-translate-x-5"
            }`}
          >
            {/* konpponet yang bergeser  */}

            {currentIndex === 0 ? (
              <FaArrowCircleRight size={25} />
            ) : (
              <FaArrowAltCircleLeft size={25} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
