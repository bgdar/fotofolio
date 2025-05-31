import { Link } from "react-scroll";
import { FaRegFileCode, FaUserTie, FaLaptopCode } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoTerminal } from "react-icons/io5";

import { CgProfile } from "react-icons/cg";
export default function Navigasi() {
  return (
    <div
      id="navigasi"
      className=" fixed nav-center bottom-11 text-center z-40 lg:translate-y-[20%] lg:top-[20%] lg:left-auto lg:right-5 "
    >
      <div className="flex justify-between bg-slate-600 lg:bg-transparent mx-auto bg-transparent text-gray-100 p-3 rounded-full shadow-md  md:border-slate-500  border-solid border-[1px] max-w-[200px] lg:flex-col">
        <Link
          to="home"
          className=" text-center flex w-[30px] h-[30px] justify-center cursor-pointer"
          activeClass="active"
          offset={-100}
          smooth={true}
          spy={true}
        >
          <FaUserTie />
        </Link>

        <Link
          to="code"
          className="flex w-[30px] h-[30px] justify-center cursor-pointer"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          activeClass="active"
        >
          <FaRegFileCode />
        </Link>
        <Link
          to="profil"
          className="flex w-[30px] h-[30px] justify-center cursor-pointer"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          activeClass="active"
        >
          <CgProfile />
        </Link>
        <Link
          to="terminal"
          className=" flex w-[30px] h-[30px] justify-center cursor-pointer"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          activeClass="active"
        >
          <IoTerminal />
        </Link>

        <Link
          to="porfolio"
          className="flex w-[30px] h-[30px] justify-center cursor-pointer"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          activeClass="active"
        >
          <FaLaptopCode />
        </Link>
        <Link
          to="contact"
          className="flex w-[30px] h-[30px] justify-center cursor-pointer"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          activeClass="active"
        >
          <RiContactsBook2Fill />
        </Link>
      </div>
    </div>
  );
}
