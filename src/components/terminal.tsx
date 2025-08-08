import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaLinux } from "react-icons/fa";
import { MdOutlineCircle } from "react-icons/md";
import PackageCommad from "../terminalCmpnt/packageCommad";
import { Link, scroller } from "react-scroll";
import BacgroundTransparan from "../all-componets/bacgroundTransparan";
import { useGlobalState } from "../globalState";

// import { Command } from "../terminalCmpnt/handleData";

// const command = new Command();

const Terminal = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [enterOn, setEnterOn] = useState<number>(0);
  // const [heightDiv, setHeightDiv] = useState<number>(0);
  //gunakan untuk menyimpan data ke div nantinya untuk di tampilkan
  const [showData, setShowData] = useState<string[]>(["neofetch"]);

  //ini stattate untuk membesar kecilkan atau pengelolaan terminal
  const [isMaximized, setIsMaximized] = useState(false);

  const divDataRef = useRef<HTMLDivElement>(null);
  const inputCommandRef = useRef<HTMLInputElement>(null);

  const { showTerminal, toggleShowTerminal } = useGlobalState();
  // useEffect(() => {
  //   if (divDataRef.current) {
  //     const rect = divDataRef.current.getBoundingClientRect();

  //     setHeightDiv(rect.height);
  //   }
  //   //showData adalah data yang mengubah isi dari divDataRef, jadi kita tahu div-nya berubah setelah showData berubah.
  // }, [showData]);

  //HTMLTextAreaElement untuk texte area
  const handleDivFocusInput = () => {
    inputCommandRef.current?.focus();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.trim());
  };

  const handleKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.trim();

    if (e.key === "Enter" && value === "") {
      setEnterOn((d) => d + 30.5);
    } else if (e.key === "Enter" && value != "") {
      setShowData((prev) => [...prev, value]);
      setEnterOn(0); //gunakan jika absolute => setEnterOn((d) => d + heightDiv);
      e.currentTarget.value = "";

      //Commad comad spesial
      if (value === "clear") {
        setEnterOn(0);
        e.currentTarget.value = "";
        setShowData([""]); //clear semua data
      }
      if (value == "exit" || (value == "close" && isMaximized == true)) {
        e.currentTarget.value = "";
        // toggleShowTerminal(); //tutup terminal
        // setIsMaximized(false);
        setShowData([""]); //clear semua data
      }
      if (value == "open" && isMaximized == false) {
        setShowData([""]); //clear semua data
        setIsMaximized(true);
        //targetkan dengan id terminal saat commad scroll
        scroller.scrollTo("terminal", {
          duration: 500,
          smooth: true,
          offset: -100, // Mengatur offset untuk scroll
        });
      }
    }
  };

  const handleCloseTerminal = () => {
    toggleShowTerminal();
    setIsMaximized(false);
    setShowData([""]); //clear semua data
  };

  const date: Date = new Date();

  //handle effect untuk saat terminal di mount
  useEffect(() => {
    const Navigasi = document.getElementById("navigasi") as HTMLElement; //hide Navigasi
    if (showTerminal) {
      (Navigasi as HTMLElement).style.display = "none";
      document.body.style.overflow = "hidden"; //disable scroll body
    } else {
      (Navigasi as HTMLElement).style.display = "";
      document.body.style.overflow = ""; //enable scroll bod
    }
    return () => {
      (Navigasi as HTMLElement).style.display = "";
      document.body.style.overflow = ""; //cleanUp saat component di unmount
    };
  }, [showTerminal]);

  return (
    <section
      className={` h-screen ${
        showTerminal ? " bottom-0" : "bottom-[-100vh]"
      } z-40  fixed w-screen flex items-center justify-center transition-all duration-500 ease-in-out `}
      style={{
        transition: `${isMaximized ? "background-color 0.3s ease-in-out" : ""}`,
        maxHeight: isMaximized ? "100vh" : "",
      }}
    >
      {/* {isMaximized && showTerminal  &&  <BacgroundTransparan />} */}
      {showTerminal && <BacgroundTransparan />}

      <div
        style={{
          transform: isMaximized
            ? "scale(1.4) translate(0px, 25px) "
            : "scale(1) translate(0px, 0px)",
          zIndex: isMaximized ? 1000 : 0,
          transition: "transform 0.3s ease-in-out",
        }}
        id="terminal"
        className="terminal w-[60%]  h-[60%]  shadow-lg shadow-[#6b4db1] overflow-hidden flex flex-col border-4 rounded-xl"
      >
        <header className="relative  terminal-header flex justify-between items-center p-4 bg-gradient rounded-t-lg">
          <div className="flex items-center gap-2">
            <span className="relative group inline-block ">
              <MdOutlineCircle
                className="text-red-500 cursor-pointer disabled:cursor-not-allowed"
                size={12}
                onClick={handleCloseTerminal}
              />
              <span className="absolute z-20 border-2  rounded-lg bg-red-300 text-sm text-red-500 opacity-0 group-hover:opacity-100 group-hover:transition-all duration-500 before:content-['close']"></span>
            </span>
            <span className="relative group inline-block">
              <MdOutlineCircle
                className="text-yellow-500 cursor-pointer"
                size={12}
                onClick={() => setIsMaximized(false)}
              />
              <span className="absolute z-20 border-2  rounded-lg bg-yellow-300 text-sm t opacity-0 group-hover:opacity-100 group-hover:transition-all duration-500 before:content-['Minimize']"></span>
            </span>
            <span className="relative group inline-block">
              <Link
                to="terminal"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <MdOutlineCircle
                  className="text-green-500 cursor-pointer"
                  size={12}
                  onClick={() => setIsMaximized(true)}
                />
              </Link>
              <span className="absolute z-20 border-2  rounded-lg bg-green-300 text-sm  opacity-0 group-hover:opacity-100 group-hover:transition-all duration-500 before:content-['Maximize']"></span>
            </span>
          </div>

          <h4 className="font-mono p-1 text-sm absolute right-4 border-2 bg-slate-300 rounded-md">
            {inputValue}
          </h4>
        </header>

        <div
          onClick={handleDivFocusInput}
          className="overflow-auto  scrollbar-hide relative h-full w-full bg-[#1c1c1c] p-4 box-border"
        >
          <div ref={divDataRef} className="w-full">
            <PackageCommad command={showData} />
          </div>

          <section
            className=" sticky  w-[98%] inset-x-0 z-10"
            style={{ top: enterOn + "px" }}
          >
            <div
              id="mobile-size"
              className="flex items-center flex-wrap gap-2 text-white  "
            >
              <FaLinux size={16} />
              dar05@onlyUser:~${" "}
              <span className="text-sm text-yellow-500 ">
                {`${date.getDate()}-${
                  date.getMonth() + 1
                }-${date.getFullYear()} ${date.getHours()}`}
              </span>{" "}
              <span className="text-[#23801b]">~</span>
            </div>
            <div className="flex items-center mt-2">
              <FaArrowRight className="text-[#23801b]" />
              <input
                ref={inputCommandRef}
                type="text"
                className="w-full text-sm p-3 border-none outline-none text-white bg-transparent rounded-lg"
                onChange={handleInputChange}
                onKeyDown={handleKeyEnter}
              />
            </div>
          </section>
        </div>
      </div>

      {/* <span
        className="info group absolute bottom-0 left-0 p-2 text-sm text-gray-500 bg-[#1c1c1c] rounded-lg m-3"
        data-aos="fade-right"
      >
        <p>
          <span className=" text-green-800 m-1">neofetch</span> to info
        </p>
      </span> */}
    </section>
  );
};

export default Terminal;
