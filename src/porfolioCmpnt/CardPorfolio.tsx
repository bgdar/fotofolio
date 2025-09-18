import React, { useState } from "react";
import ImgWithLoading from "../all-componets/imgWithLoading";

import CardInfoFotofolio from "./cardInfoFotofolio";
interface detail {
  index: number;
  judul: string;
  linkRepo?: string;
  linkDemo?: string;
  language: React.JSX.Element;
  image: string;
  descripsi?: string;
}

const CardFotofolio: React.FC<detail> = ({
  index,
  judul,
  language,
  linkRepo = "",
  linkDemo = "",
  image,
  descripsi = "my porfolio ",
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  // const [ispopupShow, setIspopupShow] = useState<boolean>(false);

  // data trasltate hover

  const handleData = (isHover: boolean) => {
    setIsHovered(isHover);
  };

  //   const handleHover = (index: number) => {
  //   console.log("hover index : ", index);
  //   // kiri
  //   if (index === 0 || index == 1) {
  //     setHoverPosition(100);
  //   } else if (index == 2 || index == 3) {
  //     setHoverPosition(400);
  //   }
  // };

  return (
    // margin top untuk memisah card agar tidak berdempet saat di mobile
    <div className="w-full h-[300px] mt-10 lg:mt-0 relative">
      {/* Container utama */}
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="  bg-slate-200 h-full mt-1 rounded-lg  p-5 relative group"
        onMouseEnter={() => handleData(true)}
        onMouseLeave={() => handleData(false)}
      >
        {/* Gambar */}
        {/* <img src={image} alt="" className="w-full h-full object-cover mt-2" /> */}
    <ImgWithLoading
  src={image}
  alt={judul}
   addClass={`w-full h-full object-cover mt-2 transition-opacity duration-300 group-hover:opacity-50`}
/>

        {/* Overlay saat hover */}
        <div
          className={`
             opacity-0
    flex flex-col lg:flex-row 0
    inset-0 p-5  group-hover:opacity-100
    transition-opacity duration-300 absolute
     w-full max-w-[150%] lg:w-[150%] 
    ${
      index === 0 || index === 2
        ? "lg:-translate-x-[50px] xl:lg:-translate-x-[150px]  "
        : "lg:justify-around"
    }
  `}
        >
          <div className="text-center flex justify-center  lg:max-w-[50%] transition-all duration-300 group-hover:mt-0 ">
            <div
              className={`
        absolute
        ${index === 0 || index === 2 ? "  right-1/4 w-[150px]" : ""}
      `}
            >
              <p className=" bg-slate-400/90 font-semibold shadow-lg p-2 border-[5px] border-gray-300">
                {judul}
              </p>
            </div>
          </div>
          {isHovered && (
            <CardInfoFotofolio
              language={language}
              index={index}
              linkDemo={linkDemo}
              linkRepo={linkRepo}
            />
          )}
        </div>
        {/* Elemen kedua (muncul dengan scale saat di-hover) */}
        <div
          className={`absolute w-full bg-[rgba(255, 255, 255, 0.4)] backdrop-blur-sm rounded-lg bottom-0 left-0 transition-all text-center duration-300 ease-in-out transform ${
            isHovered ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        >
          <div className="p-4 h-full">
            <p className="text-zinc-700 p-2 bg-slate-400/90  mt-3 text-sm lg:text-base xl:text-lg leading-relaxed tracking-wide font-mono">
              {descripsi}
            </p>
          </div>
        </div>
      </div>

      {/* popup yg muncul saat di click */}
      {/* {ispopupShow && id && (
        <>
          <BacgroundTransparan />
          <div className="fixed w-[90vw] h-[90vh] lg:w-[50vw] lg:h-[60vh]  top-1/2 left-1/2 opacity-100 -translate-x-1/2 lg:-translate-y-1/2 transition-all duration-500 ease-in-out z-50">
            <PopupInfo
              dataItems={{
                id,
                judul,
                linkDemo,
                linkRepo,
                image,
                descripsi,
              }}
              setPopupShow={setIspopupShow}
            />
          </div>
        </>
      )} */}
    </div>
  );
};

export default CardFotofolio;
