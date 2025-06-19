import React, { useState } from "react";
import ImgWithLoading from "../all-componets/imgWithLoading";
import BacgroundTransparan from "../all-componets/bacgroundTransparan";
import PopupInfo from "./popupInfo";
interface detail {
  judul: string;
  linkRepo?: string;
  linkDemo?: string;
  image: string;
  descripsi?: string;
}

const CardFotofolio: React.FC<detail> = ({
  judul,
  linkRepo = "",
  linkDemo = "",
  image,
  descripsi = "my porfolio ",
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [ispopupShow, setIspopupShow] = useState<boolean>(false);

  const handleData = (isHover: boolean) => {
    setIsHovered(isHover);
  };
  return (
    // margin top untuk memisah card agar tidak berdempet saat di mobile
    <div className="w-full h-[300px] relative">
      {/* Container utama */}
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="bg-slate-200 h-full mt-1 rounded-lg overflow-hidden p-5 relative group"
        onMouseEnter={() => handleData(true)}
        onMouseLeave={() => handleData(false)}
      >
        {/* Gambar */}
        {/* <img src={image} alt="" className="w-full h-full object-cover mt-2" /> */}
        <ImgWithLoading
          src={image}
          alt={judul}
          addClass="w-full h-full object-cover mt-2"
        />

        {/* Overlay saat hover */}
        <div className="absolute inset-0 p-5 bg-slate-400/90  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-center text-white transition-all duration-300 group-hover:mt-0 mt-[20px] ">
            <button
              onClick={() => setIspopupShow(true)}
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-300"
            >
              Let see
            </button>

            <div className="">
              <p className="text-zinc-700 mt-3  text-sm md:text-base lg:text-lg leading-relaxed tracking-wide font-mono">
                {descripsi}
              </p>
            </div>
          </div>
        </div>
        {/* Elemen kedua (muncul dengan scale saat di-hover) */}
        <div
          className={`absolute w-full bg-[rgba(255, 255, 255, 0.4)] backdrop-blur-sm rounded-lg bottom-0 left-0 transition-all text-center duration-300 ease-in-out transform ${
            isHovered ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        >
          <p className="text-white font-semibold shadow-lg p-2 border-[5px] border-gray-300">
            {judul}
          </p>
        </div>
      </div>

      {/* popup yg muncul saat di click */}
      {ispopupShow && (
        <>
          <PopupInfo
            dataItems={{
              judul,
              linkDemo,
              linkRepo,

              image,
              descripsi,
            }}
            setPopupShow={setIspopupShow}
          />

          <BacgroundTransparan />
        </>
      )}
    </div>
  );
};

export default CardFotofolio;
