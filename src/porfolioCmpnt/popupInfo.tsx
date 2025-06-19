import React from "react";
import { BiSolidSlideshow } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaBitbucket } from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";
import ImgWithLoading from "../all-componets/imgWithLoading";

interface DataItems {
  judul: string;
  linkRepo: string;
  linkDemo: string;
  image: string;
  descripsi: string;
}

interface PopupInfoProps {
  dataItems: DataItems;
  setPopupShow: React.Dispatch<React.SetStateAction<boolean>>;
}

function cekLinkRepo(link: string): React.ReactNode {
  if (link.includes("github")) {
    return <BsGithub />;
  } else if (link.includes("bitbucket")) {
    return <FaBitbucket />;
  } else {
    return "";
  }
}

const PopupInfo = ({ dataItems, setPopupShow }: PopupInfoProps) => {
  return (
    <>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[60vh] bg-white rounded-xl shadow-md shadow-slate-200 transition-all duration-300 z-50">
        <ImgWithLoading
          src={dataItems.image}
          addClass={"w-full h-full object-cover"}
          alt={dataItems.judul}
        />

        {/* Aksi */}
        <div className="flex absolute w-full bottom-0 justify-between items-center px-4 py-3 bg-gray-100 border-t">
          {cekLinkRepo(dataItems.linkRepo) !== "" && (
            <button className=" hover:text-slate-700 transition-colors">
              <a
                href={dataItems.linkRepo}
                target="_blank"
                rel="noopener noreferrer"
                title="Lihat di GitHub"
              >
                {cekLinkRepo(dataItems.linkRepo)}
              </a>
            </button>
          )}

          {dataItems.linkDemo.length !== 0 && (
            <button
              title="Slideshow"
              className="text-gray-700 hover:text-indigo-600 text-xl transition-transform hover:scale-110"
            >
              <BiSolidSlideshow />
            </button>
          )}

          {/* Tombol tutup */}
          <button
            onClick={() => setPopupShow(false)}
            title="Tutup"
            className="text-red-500 hover:text-red-900 text-2xl transition-transform hover:scale-110"
          >
            <IoCloseCircleSharp />
          </button>
        </div>
      </div>
    </>
  );
};

export default PopupInfo;
