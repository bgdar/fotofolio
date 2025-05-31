import React from "react";
import Words from "../personalCmpnt/words";
import Description from "../personalCmpnt/Descripsi";

import ImgWithLoading from "../all-componets/imgWithLoading";
const PersonalData: React.FC = () => {
  return (
    <>
      <h2 className="mb-5 text-center w-[90vw] mx-auto text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg">
        Profil
      </h2>

      <section
        id="profil"
        className="container mx-auto grid lg:grid-cols-2 gap-4 overflow-hidden rounded-md shadow-2xl w-[90vw]"
      >
        {/* sebelah kiri Foto dan animasi */}
        <div
          className="block  border-4 p-2 text-center  "
          data-aos="fade-up-left"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="750"
        >
          <div className="  p-2 ">
            {/* <img
              src="./img/bg-dar.jpg"
              alt="Profile"
              className="rounded-xl border-b-4 mx-auto object-cover object-center w-[30%] h-[10%] "
            /> */}
            <ImgWithLoading
              src={"/img/bg-dar.jpg"}
              alt="Profile"
              addClass="rounded-xl border-b-4 mx-auto object-cover object-center w-[30%] h-[10%]"
            />
          </div>

          <Words />
        </div>
        {/* sebelah kanan card data diri */}
        <div
          className=" border-4 p-5 text-center rounded-2xl  "
          data-aos="fade-up-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="750"
        >
          <h1 className="font-bold m-4 text-white ">
            Do not forget to eat (▀̿Ĺ̯▀̿ ̿),
          </h1>
          <Description />
        </div>
      </section>
    </>
  );
};
export default PersonalData;
