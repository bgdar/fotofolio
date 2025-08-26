import CardFotofolio from "../porfolioCmpnt/CardPorfolio";
import { RiNextjsFill, RiProjectorLine } from "react-icons/ri";
import {
  FaArrowCircleRight,
  FaArrowAltCircleLeft,
  FaNodeJs,
  FaLaravel,
} from "react-icons/fa";
import { useState } from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { SiGodotengine, SiPython, SiTypescript } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";

/**
 * Cukup ganti di sini karena saya sudah menghandle semuanya 😊
 */
interface typeDataCardFortofolio {
  id: number;
  language: JSX.Element;
  judul: string;
  linkRepo: string;
  linkDemo: string;
  image: string;
  descripsi: string;
}
const DataCardForfolio: typeDataCardFortofolio[] = [
  {
    id: 1,
    language: (
      <IoLogoJavascript className="w-full h-full bg-gradient-to-tr from-yellow-300 to-yellow-500 text-black rounded" />
    ),
    judul: "leaf node",
    linkRepo: "https://github.com/bgdar/leaf-node",
    linkDemo: "https://leaf-node.vercel.app/",
    image: "porfolio/leaf-node.jpg",
    descripsi:
      "web sederhana yang di buat dengan node.js dan  express.js di kombinasikan dengan librry sweetAlert2 ",
  },
  {
    id: 2,
    language: (
      <SiPython className="w-full h-full bg-gradient-to-tr from-blue-500 to-yellow-400 text-white rounded" />
    ),
    judul: "p-share",
    linkRepo: "https://github.com/bgdar/P-share",
    linkDemo: "",
    image: "porfolio/p-share.png",
    descripsi:
      "share file kamu tampa mengguankan internet hanya perlu IP saja ",
  },
  {
    id: 3,
    language: (
      <SiTypescript className="w-full h-full bg-gradient-to-tr from-blue-400 to-blue-600 text-white rounded" />
    ),
    judul: "dasboard-monitoring",
    linkRepo: "https://github.com/bgdar/dashboard-monitor",
    linkDemo: "",
    image: "/porfolio/dasboard-monitoring.jpg",
    descripsi:
      "Akses  lewat browser untuk lihat status sistem kamu seperti Task Manager ",
  },
  {
    id: 4,
    language: (
      <RiNextjsFill className="w-full h-full bg-gradient-to-tr from-gray-800 to-black text-white rounded" />
    ),
    judul: "daros",
    linkRepo: "https://github.com/bgdar/daros",
    linkDemo: "https://daros-xi.vercel.app/",
    image: "porfolio/daros.jpg",
    descripsi: " Ini  Sistem Operasi ? , Ini Website ",
  },
  {
    id: 5,
    language: (
      <FaGolang className="w-full h-full bg-gradient-to-tr from-cyan-400 to-blue-400 text-white rounded" />
    ),
    judul: "Golang web",
    linkRepo: "https://bitbucket.org/bgdar/golang-web/src/main/",
    linkDemo: "",
    image: "porfolio/golang-web.jpg",
    descripsi: "web cloning Instagram  ",
  },
  {
    id: 6,
    language: (
      <SiGodotengine className="w-full h-full bg-gradient-to-tr from-blue-500 to-indigo-700 text-white rounded" />
    ),
    judul: "moster plant",
    linkRepo: "https://github.com/bgdar/monster-plant",
    linkDemo: "",
    image: "porfolio/monster-plant.png",
    descripsi: "makan aja semua sampek pohon juga kalau bisa ",
  },
  {
    id: 7,
    language: (
      <SiPython className="w-full h-full bg-gradient-to-tr from-blue-500 to-yellow-400 text-white rounded" />
    ),
    judul: "Fyl Bird",
    linkRepo: "https://github.com/bgdar/flying-bird",
    linkDemo: "",
    image: "porfolio/fly-bird.jpg",
    descripsi: " Burung? Lembek? Coba Aja sendiri! ",
  },
  {
    id: 8,
    language: (
      <FaGolang className="w-full h-full bg-gradient-to-tr from-cyan-400 to-blue-400 text-white rounded" />
    ),
    judul: "Text Base RPG Game ",
    linkRepo: "https://bitbucket.org/bgdar/text-base-rpg-game/src/main/",
    linkDemo: "",
    image: "porfolio/text-base-rpg-game.png",
    descripsi:
      " Dikembangkan dengan Golang  |  Sebuah game Petualangan Fantasy yang Epik! Menggunakan CLI 🎮 ",
  },
  {
    id: 9,
    language: (
      <FaNodeJs className="w-full h-full bg-gradient-to-tr from-green-400 to-green-600 text-white rounded" />
    ),
    judul: "Tools CLI",
    linkRepo: "https://github.com/bgdar/cli-tools",
    linkDemo: "",
    image: "porfolio/tools-cli.png",
    descripsi:
      "beberapa Tools Dibangun dengan Node.js + TypeScript   dalam networking serta berbagai kebutuhan lainnya! ",
  },
  {
    id: 10,
    language: (
      <FaLaravel className="w-full h-full bg-gradient-to-tr from-red-500 to-pink-600 text-white rounded" />
    ),
    judul: "Kede kupi",
    linkRepo: "https://github.com/bgdar/kede-kupi",
    linkDemo: "",
    image: "porfolio/kede-kupi.png",
    descripsi: "web kedai kopi yang di bangun dengan PHP ! ",
  },
];

export default function Porfofio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // 2 kolom x 2 baris = 4 item
  const totalItems = DataCardForfolio.length;

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
    <div id="porfolio" className=" mb-14  mt-60">
      <div className="container relative  mx-auto max-w-[800px] px-3 pt-6 pb-20 bg-transparent md:border-4 border-slate-200">
        <h4 className="mb-3 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg">
          Projects
        </h4>

        <div className="absolute top-0 right-0 bg-slate-500 rounded-full border-8 border-slate-800 p-2 lg:translate-x-9 lg:translate-y-[-2.5em] w-20 h-20 flex justify-center items-center">
          <RiProjectorLine title="Project" className="w-[80%] h-[80%]" />
        </div>

        {/* Grid data porfolio yang  2 kolom x 2 baris */}
        <div className="  grid grid-cols-2 grid-rows-2 gap-4  mt-4 transition-transform duration-500 ease-in-out">
          {DataCardForfolio.slice(
            currentIndex,
            currentIndex + itemsPerPage
          ).map((data, index) => (
            <CardFotofolio key={index} index={index} {...data} />
          ))}
        </div>

        {/* Tombol Navigasi */}
        <div className="flex gap-14 justify-center mt-16">
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
        <div className="relative w-[20%]  mx-auto  h-[50px] p-4 mt-4 rounded-2xl flex justify-center ">
          {/* Ikon Panah yang Bergerak */}
          <div
            className={`transition-transform shadow-md duration-300 ease-in-out px-4 ${
              currentIndex + itemsPerPage >= totalItems
                ? " translate-x-6 rotate-180"
                : " -translate-x-2 -rotate-180"
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
