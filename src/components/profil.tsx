import React, { useEffect, useState } from "react";

interface profil {
  alt?: string;
  image: string;
  description: string[];
}
const ProfilSkill: React.FC<profil> = ({
  image,
  description,
  alt = "profil skill",
}) => {
  return (
    <div
      className="bg-white mx-auto justify-center items-center flex rounded-lg relative p-3 group overflow-hidden max-h-[230px] max-w-[230px] shadow-lg shadow-slate-400"
      data-aos="zoom-out-up"
      data-aos-duration="1200"
    >
      <img src={image} alt={alt} className="w-full h-auto" />
      <div className="absolute inset-0 p-3 backdrop-blur-xl bg-slate-400/80 w-full h-full flex items-center opacity-0 scale-95 group-hover:scale-100 group-hover:opacity-100 transition-all ease-linear duration-300">
        <div className="text-center w-full text-white">
          <div className="bg-white rounded-full px-5 py-2 inline-block">
            <h4 className="text-sky-800">CSS</h4>
          </div>
          <div className="text-sm mt-2 space-y-2">
            {description.map((dst, index) => (
              <p
                key={index}
                className="text-zinc-700 leading-relaxed tracking-wide font-light hover:text-zinc-900 transition-colors duration-200"
              >
                {dst}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
//membuat perulangan pada image, descripsi dan alt degan Array yg di ulang
type daftarSkill = {
  image: string;
  description: string[];
  alt: string;
};
// Array untuk mnyimpan descripsi code dan Skill
const dataSkil: daftarSkill[] = [
  {
    image: "./img/css.png",
    description: ["tailwindcss", "booostrap"],
    alt: "my skill css",
  },
  {
    image: "./img/html.png",
    description: ["HTML"],
    alt: "my skill html",
  },

  {
    image: "./img/js.png",
    description: ["Typescript", "React.js", "express.js"],
    alt: "my skill javascript",
  },
];
export default function Profil() {
  const [data, setData] = useState<daftarSkill[]>([]);
  const [isAwal, setIsAwal] = useState(0);

  useEffect(() => {
    if (isAwal < dataSkil.length) {
      const timer = setTimeout(() => {
        // Menambahkan data ke state `data`
        setData((prevData) => [...prevData, dataSkil[isAwal]]);
        // Menambah nilai `isAwal` untuk mengambil data berikutnya
        setIsAwal((prev) => prev + 1);
      }, 3000); // Waktu delay 3 detik

      // Membersihkan timeout saat komponen di-unmount atau sebelum useEffect dijalankan ulang
      return () => clearTimeout(timer);
    }
  }, [isAwal]);

  return (
    <div id="profil" className="section ">
      <div className="mx-auto container max-w-[800px]  p-2 sm:p-2">
        <div className="text-center items-center">
          <h4 className="mb-3 top-0 mt-0 pt-0 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg">
            Code
          </h4>
          <div className="w-full lg:pt-[35px] relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center ">
              {data && data.length > 0 ? (
                data.map((data, index) => {
                  return <ProfilSkill key={index} {...data} />;
                })
              ) : (
                <div className="col-span-full flex items-center justify-center space-x-2">
                  <span className="text-gray-700 text-[50px] font-bold shadow-sm shadow-gray-600">
                    loa
                  </span>
                  <span className="text-gray-500 text-[50px] font-bold shadow-sm shadow-gray-500">
                    ding
                  </span>
                  <div className="w-10 h-10 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-10 h-10 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-10 h-10 bg-gray-300 rounded-full animate-bounce delay-200"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
