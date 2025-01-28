import { FaGithub, FaBitbucket } from "react-icons/fa";

export default function Header() {
  return (
    <div
      className="container mx-auto my-2 max-w-[1000px] px-3 relative  left-0 right-0"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="flex justify-between py-2 items-center">
        <div className="flex items-center space-x-3 ">
          <a
            href="https://github.com/bgdar"
            className="group relative"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-[32px] fill-current text-slate-950 hover:text-slate-600 transition-colors duration-300" />
            <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm text-slate-600 transition-opacity duration-300">
              GitHub
            </span>
          </a>
          <a
            href="https://bitbucket.org/bgdar/workspace/overview/"
            className="group relative"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBitbucket className="text-[32px] fill-current text-slate-950 hover:text-slate-600 transition-colors duration-300" />
            <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm text-slate-600 transition-opacity duration-300">
              Bitbucket
            </span>
          </a>
        </div>
        <div className="text-gradient text-center group  ">
          <h2 className="text-[18px] leading-none font-bold font-primary ">
            Muhammad
          </h2>
          <h3 className="text-[18px] leading-none font-bold font-primary">
            Nadhar
          </h3>
        </div>
      </div>
    </div>
  );
}
