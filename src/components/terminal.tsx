import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaLinux } from "react-icons/fa";
import { MdOutlineCircle } from "react-icons/md";
import PackageCommad from "../terminalCmpnt/packageCommad";

// import { Command } from "../terminalCmpnt/handleData";

// const command = new Command();

const Terminal = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [enterOn, setEnterOn] = useState<number>(0);
  // const [heightDiv, setHeightDiv] = useState<number>(0);
  //gunakan untuk menyimpan data ke div nantinya untuk di tampilkan
  const [showData, setShowData] = useState<string[]>([]);

  //ini stattate untuk membesar kecilkan atau pengelolaan terminal
  const [isMaximized, setIsMaximized] = useState(false);

  const divDataRef = useRef<HTMLDivElement>(null);
  const inputCommandRef = useRef<HTMLInputElement>(null);

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

      if (value === "clear") {
        setEnterOn(0);
        e.currentTarget.value = "";
        setShowData([""]); //clear semua data
      }
    }
  };

  //handle effect untuk saat terminal di mount
  useEffect(() => {
    if (isMaximized) {
      document.body.style.overflow = "hidden"; //disable scroll body
    } else {
      document.body.style.overflow = ""; //enable scroll bod
    }
    return () => {
      document.body.style.overflow = ""; //cleanUp saat component di unmount
    };
  }, [isMaximized]);

  return (
    <section
      className="h-screen relative w-screen flex items-center justify-center  "
      style={{
        backgroundColor: isMaximized ? "rgba(0, 0, 0, 0.8)" : "",
        transition: `${isMaximized ? "background-color 0.3s ease-in-out" : ""}`,
      }}
    >
      <div
        style={{
          transform: isMaximized ? "scale(1.3)" : "scale(1)",
          transition: "transform 0.3s ease-in-out",
        }}
        id="terminal"
        className="terminal w-[60%]  h-[60%] border-4 shadow-lg shadow-[#6b4db1] rounded-lg "
      >
        <header>
          <div className="relative  terminal-header flex justify-between items-center p-4 bg-gradient rounded-t-lg">
            <div className="flex items-center gap-2">
              <span className="relative group inline-block ">
                <MdOutlineCircle
                  className="text-red-500 cursor-pointer disabled:cursor-not-allowed"
                  size={12}
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
                <MdOutlineCircle
                  className="text-green-500 cursor-pointer"
                  size={12}
                  onClick={() => setIsMaximized(true)}
                />
                <span className="absolute z-20 border-2  rounded-lg bg-green-300 text-sm  opacity-0 group-hover:opacity-100 group-hover:transition-all duration-500 before:content-['Maximize']"></span>
              </span>
            </div>
            <h4 className="font-mono p-1 text-sm absolute right-4 border-2 bg-slate-300 rounded-md">
              {inputValue}
            </h4>
          </div>
        </header>

        <div
          onClick={handleDivFocusInput}
          className="overflow-auto  scrollbar-hide relative h-[87.6%] w-full bg-[#1c1c1c] p-4 box-border"
        >
          <div ref={divDataRef} className="w-full">
            <PackageCommad command={showData} />
          </div>

          <section
            className=" sticky  w-[98%] inset-x-0 z-10"
            style={{ top: enterOn + "px" }}
          >
            <div className="flex items-center gap-2 text-white">
              <FaLinux size={15} />
              dar05@onlyUser:~$ <span className="text-[#23801b]">~</span>
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

      <span className="info group absolute bottom-0 left-0 p-2 text-sm text-gray-500 bg-[#1c1c1c] rounded-lg m-3">
        <p>
          <span className=" text-green-800 m-1">neofetch</span> to info
        </p>
      </span>
    </section>
  );
};

export default Terminal;
