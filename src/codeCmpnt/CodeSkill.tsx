import React, { useState, useEffect } from "react";

type daftarSkill = {
  image: string;
  description: string[];
  alt: string;
};

interface ProfilSkillProps {
  item: daftarSkill;
  isLoaded: boolean;
}

const Profil: React.FC<ProfilSkillProps> = ({ item, isLoaded }) => {
  return (
    <div
      className={`bg-slate-200 mx-auto flex flex-col items-center rounded-lg p-3 group overflow-hidden shadow-lg shadow-slate-400 transition-all duration-300 w-[220px] h-[260px] relative ${
        !isLoaded ? "border-2 border-blue-500" : ""
      }`}
      data-aos="zoom-out-up"
      data-aos-duration="1200"
    >
      {isLoaded ? (
        <>
          <img
            src={item.image}
            alt={item.alt}
            className="w-[180px] h-[180px] object-contain"
          />
          <div className="absolute inset-0 p-3 backdrop-blur-lg bg-slate-500/80 flex items-center justify-center opacity-0 scale-95 group-hover:scale-100 group-hover:opacity-100 transition-all ease-linear duration-300">
            <div className="text-center w-full text-white">
              <div className="bg-white rounded-full px-5 py-2 inline-block">
                <h4 className="text-sky-800 font-semibold">{item.alt}</h4>
              </div>
              <div className="text-sm mt-2 space-y-2">
                {item.description.map((desc, idx) => (
                  <p key={idx} className="text-sky-100">
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

const dataSkil: daftarSkill[] = [
  {
    image: "./img/css.png",
    description: ["Tailwind CSS", "Bootstrap"],
    alt: "CSS",
  },
  {
    image: "./img/html.png",
    description: ["HTML"],
    alt: "HTML",
  },
  {
    image: "./img/js.png",
    description: ["TypeScript", "React.js", "Express.js"],
    alt: "JavaScript",
  },
  {
    image: "./img/go.png",
    description: ["golang"],
    alt: "golang",
  },
  {
    image: "./img/rust.png",
    description: ["Artix", "tokio"],
    alt: "Rust",
  },
  {
    image: "./img/python.png",
    description: ["flask", "Django", "Kivy", "OpenCV", "pygame"],
    alt: "python",
  },
];
const CodeSkill = () => {
  const [loadedIndices, setLoadedIndices] = useState<number[]>([]);
  useEffect(() => {
    const timers = dataSkil.map(
      (_, index) =>
        setTimeout(() => {
          setLoadedIndices((prev) => [...prev, index]);
        }, 2000 * (index + 1)) // Percepat animasi loading menjadi 1 detik per card
    );
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);
  return (
    <>
      {dataSkil.map((item, index) => (
        <Profil
          key={index}
          item={item}
          isLoaded={loadedIndices.includes(index)}
        />
      ))}
    </>
  );
};

export default CodeSkill;
