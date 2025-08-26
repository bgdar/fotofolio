import React from "react";
import Words from "../personalCmpnt/words";
import Description from "../personalCmpnt/Descripsi";

import ImgWithLoading from "../all-componets/imgWithLoading";
import { useGlobalState } from "../globalState";

const PersonalData: React.FC = () => {
  const { theme } = useGlobalState();

  return (
    <>
      {/* Judul dengan gradient text */}
      <h2
        className={`mb-5 text-center w-[90vw] mx-auto text-4xl font-bold bg-clip-text text-transparent
        `}
      >
        Profil
      </h2>

      {/* Section Utama */}
      <section
        id="profil"
        className={`container mx-auto grid lg:grid-cols-2 gap-4 overflow-hidden rounded-2xl w-[90vw] transition-colors duration-500
       
      `}
      >
        {/* Kiri: Foto + animasi */}
        <div
          className="border-4 p-4 text-center rounded-xl shadow-lg"
          data-aos="fade-up-left"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="750"
        >
          <div className="p-2">
            <ImgWithLoading
              src={"/img/bg-dar.jpg"}
              alt="Profile"
              addClass="rounded-xl border-b-4 mx-auto object-cover object-center w-[40%] h-auto"
            />
          </div>
          <Words />
        </div>

        {/* Kanan: Card data diri */}
        <div
          className="border-4 p-5 text-center rounded-xl shadow-lg"
          data-aos="fade-up-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="750"
        >
          <h1
            className={`font-bold m-4 text-lg ${
              theme === "dark" ? "text-gray-200" : "text-gray-800"
            }`}
          >
            Do not forget to eat (▀̿Ĺ̯▀̿ ̿),
          </h1>
          <Description />
        </div>
      </section>
    </>
  );
};
export default PersonalData;
