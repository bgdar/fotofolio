import CardFotofolio from "../porfolioCmpnt/CardPorfolio";
import { RiProjectorLine } from "react-icons/ri";

export default function Porfofio() {
  return (
    <div
      id="porfolio"
      className="section relative animate-fade-in opacity- transition-all mb-14 mt-60"
    >
      <div className="container relative  mx-auto max-w-[800px] px-3 pt-6 pb-20 bg-transparent border-slate-200 border-2 ">
        <h4 className="mb-3 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg">
          Projects
        </h4>

        {/* object tambahan start */}
        <div className=" absolute top-0 right-0 bg-slate-200 rounded-full border-x-slate-500 border-8 p-2 lg:translate-x-9 lg:translate-y-[-2.5em] w-20 h-20 flex justify-center items-center">
          <RiProjectorLine title="Project" className="w-[80%] h-[80%]" />
        </div>

        <div className="container absolute top-[50vh] left-0 border-slate-600 border-4 p-2 rounded-lg lg:translate-x-[-3.5em] lg:translate-y-7 w-20 h-40"></div>

        <div className=" absolute top-[70vh] right-0  border-slate-200 border-4 p-2 rounded-lg lg:translate-x-7 lg:translate-y-7 w-16 h-52"></div>
        {/*onject tambahan end  */}

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 text-center mt-4 ">
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
          <CardFotofolio
            judul="Text Base RPG Game "
            link="https://bitbucket.org/bgdar/text-base-rpg-game/src/main/"
            image="porfolio/text-base-rpg-game.png"
            descripsi="di Buat dengan bahasa pembrograman Golang dengan tema story fantacy game"
          />
        </div>
      </div>
    </div>
  );
}
