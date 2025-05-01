import CodeSkill from "../codeCmpnt/CodeSkill";
import { useState } from "react";
import { TbHandFingerRight } from "react-icons/tb";

type daftarSkill = {
  image: string;
  description: string;
  level: number; //tampilakan menjadi persentase
  source: string;
  title: string;
};

const dataSkil: daftarSkill[] = [
  {
    image: "./img/html.png",
    title: "HTML",
    description:
      "HTML (HyperText Markup Language) adalah bahasa standar untuk membuat halaman web dan aplikasi web. HTML berfungsi untuk mendefinisikan struktur konten web.",
    level: 80,
    source: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    image: "./img/css.png",
    title: "CSS",
    description:
      "CSS (Cascading Style Sheets) digunakan untuk mengatur tata letak dan tampilan elemen yang dibuat dengan HTML, termasuk warna, font, dan posisi.",
    level: 75,
    source: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    image: "./img/js.png",
    title: "JavaScript",
    description:
      "JavaScript adalah bahasa pemrograman dinamis yang digunakan untuk mengembangkan interaktivitas pada halaman web dan aplikasi web.",
    level: 45,
    source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    image: "./img/typescript.png",
    title: "TypeScript",
    description:
      "TypeScript adalah bahasa pemrograman berbasis JavaScript yang menambahkan fitur type system statis dan pengembangan berbasis OOP (Object-Oriented Programming).",
    level: 30,
    source: "https://www.typescriptlang.org/",
  },
  {
    image: "./img/python.png",
    title: "Python",
    description:
      "Python adalah bahasa pemrograman tingkat tinggi yang fokus pada keterbacaan kode dan kemudahan penggunaan, sering digunakan untuk web, data science, dan AI.",
    level: 30,
    source: "https://www.python.org/",
  },
  {
    image: "./img/go.png",
    title: "Golang",
    description:
      "Go (atau Golang) adalah bahasa pemrograman yang dikembangkan oleh Google, dirancang untuk kecepatan eksekusi, efisiensi, dan kemudahan concurrency.",
    level: 20,
    source: "https://go.dev/",
  },
  {
    image: "./img/rust.png",
    title: "Rust",
    description:
      "Rust adalah bahasa pemrograman yang fokus pada kinerja tinggi dan keamanan memori, cocok untuk pengembangan sistem yang membutuhkan reliabilitas tinggi.",
    level: 5,
    source: "https://www.rust-lang.org/",
  },
  {
    image: "./img/zig.png",
    title: "Zig",
    description:
      "Zig adalah bahasa pemrograman modern yang fokus pada kecepatan, keamanan, dan kontrol langsung terhadap sistem seperti C, namun dengan sintaks lebih bersih.",
    level: 3,
    source: "https://ziglang.org/",
  },
  {
    image: "./img/cpp.png",
    title: "C++",
    description:
      "C++ adalah bahasa pemrograman tingkat menengah hingga tinggi yang mendukung paradigma pemrograman prosedural dan berorientasi objek. Cocok untuk pengembangan sistem, game, dan aplikasi performa tinggi.",
    level: 1.5,
    source: "https://isocpp.org/",
  },
];

export default function Code() {
  const [nextItem, setNextItem] = useState<number>(0);
  const [isNextItem, setIsNextItem] = useState<boolean>(false);

  const handleNext = () => {
    setNextItem((next) => next + 1);
    if (nextItem >= dataSkil.length - 1) {
      setNextItem(0);
    }
    setIsNextItem(false);
  };

  const handlePrev = () => {
    setNextItem((prev) => prev - 1);
    if (nextItem <= 0) {
      setNextItem(dataSkil.length - 1);
    }
    setIsNextItem(true);
  };
  return (
    <div id="code" className="section py-10 mb-12 mt-16">
      <div className="container mx-auto max-w-[800px] p-4">
        <div className="text-center">
          <h4 className="mb-5 text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg">
            Code
          </h4>
          <div className=" flex gap-2 justify-center">
            <CodeSkill nextItem={nextItem} dataSkill={dataSkil} />
          </div>
        </div>

        <div className="flex justify-evenly">
          <div
            data-aos="fade-right"
            className="text-center m-4 rounded-lg  p-2 bg-slate-200 shadow-lg shadow-slate-400 w-[100%]"
          >
            <h3>{dataSkil[nextItem].title}</h3>
          </div>

          <div className="flex justify-around p-4 gap-3 transition-all duration-300 ease-in-out">
            <button
              className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition"
              type="button"
              onClick={handlePrev}
            >
              {/* <span className="text-sm">Prev</span> */}
              Prev
            </button>

            <span
              className="transition-all duration-500 ease-in-out text-2xl flex items-center justify-center"
              style={{
                transform: `${
                  isNextItem ? "rotate(180deg)" : "rotate(-360deg)"
                }`,
              }}
            >
              {isNextItem ? (
                <TbHandFingerRight className="text-slate-100" />
              ) : (
                // <TbPlayerTrackPrevFilled />
                <TbHandFingerRight />
              )}
            </span>
            <button
              className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition"
              type="button"
              onClick={handleNext}
            >
              {/* <span className="text-sm">Next</span> */}
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
