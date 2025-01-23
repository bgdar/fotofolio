import { useState } from "react";

interface detail {
  judul: string;
  link: string;
  image: string;
  descripsi?: string;
}

const CardFotofolio: React.FC<detail> = ({
  judul,
  link,
  image,
  descripsi = "my porfolio ",
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const handleData = (isHover: boolean) => {
    setIsHovered(isHover);
  };
  return (
    // margin top untuk memisah card agar tidak berdempet saat di mobile
    <div className="w-full mt-13 lg:mt-1">
      {/* Container utama */}
      <div
        className="bg-white h-full mt-1 flex justify-center items-center rounded-lg overflow-hidden p-5 relative group"
        onMouseEnter={() => handleData(true)}
        onMouseLeave={() => handleData(false)}
      >
        {/* Gambar */}
        <img src={image} alt="" className="w-full h-full object-cover mt-2" />

        {/* Overlay saat hover */}
        <div className="absolute inset-0 p-5 bg-slate-400/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-center text-white transition-all duration-300 group-hover:mt-0 mt-[20px] ">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white  p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Let see
            </a>
            <div className="">
              <p className="text-zinc-700 mt-3  text-sm md:text-base lg:text-lg leading-relaxed tracking-wide font-mono">
                {descripsi}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Keterangan yang muncul dari kanan */}
      <div
        className={` mt-2 transition-all duration-300 ease-in-out ${
          isHovered ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
        }`}
      >
        <p className=" text-gradient font-semibold backdrop-blur-sm rounded-lg shadow-lg p-4 border-[5px] border-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105 transform-origin-center">
          {judul}
        </p>
      </div>
    </div>
  );
};

export default function Porfofio() {
  return (
    <div id="porfolio" className="section transition-all">
      <div className="container mx-auto max-w-[900px] px-3 pt-2 pb-20">
        <div className="text-center flex flex-col lg:flex-row justify-between mb-[60px] ">
          <h4 className="mb-3 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg">
            Projects
          </h4>
          <div className="font-semibold max-w-[700px] mx-auto text-[20px] text-zinc-800 leading-relaxed tracking-wide text-center  bg-transparent -lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            These are some projects that I have worked on, but I am sure there
            are many <span className="text-blue-600 font-bold">mistakes</span>,
            and these <span className="text-blue-600 font-bold">mistakes</span>{" "}
            will make me{" "}
            <span className="text-green-600 font-bold">better</span> in the
            future.
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 text-center ">
          {/* di sini component porfolio */}
          <CardFotofolio
            judul="leaf node"
            link="https://leaf-node.vercel.app/"
            image="porfolio/leaf-node.jpg"
            descripsi="di buat dengan node.js dan  express.js di kombinasikan dengan librry sweetAlert2 "
          />
          <CardFotofolio
            judul="Golang web"
            link="https://bitbucket.org/bgdar/golang-web/src/main/"
            image="porfolio/golang-web.jpg"
            descripsi=" paket golang http/net untuk membuat web server sederhana"
          />
          <CardFotofolio
            judul="Tools CLI"
            link="https://github.com/bgdar/cli-tools"
            image="porfolio/tools-cli.jpg"
            descripsi="Menggunakan nodejs dan Typescript untuk perkembangan project berkelanjutan "
          />
        </div>
      </div>
    </div>
  );
}
