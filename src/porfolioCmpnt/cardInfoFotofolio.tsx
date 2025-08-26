import { FaGithub, FaBitbucket } from "react-icons/fa";
import { MdOutlineViewCozy } from "react-icons/md";
// import { RiGalleryFill } from "react-icons/ri";

import { useGlobalState } from "../globalState";

interface typeInfoFotofolio {
  index: number;
  linkRepo: string;
  linkDemo?: string;
  language: React.JSX.Element;
}

const CardInfoFotofolio = ({
  index,
  linkDemo,
  linkRepo,
  language,
}: typeInfoFotofolio) => {
  function cekLinkRepo(link: string): React.ReactNode {
    if (link.includes("github")) {
      return <FaGithub />;
    } else if (link.includes("bitbucket")) {
      return <FaBitbucket />;
    } else {
      return "";
    }
  }

  const { theme } = useGlobalState();

  return (
    <>
      <div
        className={`
    fixed xl:static lg:bottom-10 bottom-0
    z-20 
    w-[90%] h-auto lg:w-[100px] lg:h-[200px] 
   
    
    // geser horizontal hanya di lg ke atas
    ${
      index === 0 || index === 2
        ? "lg:translate-x-[-50px]"
        : "lg:translate-x-[100px]"
    }

    // di mobile, turunkan elemen
    translate-y-[50px] lg:translate-y-0
  `}
        style={{
          left: index == 0 || index == 2 ? 0 : "",
          right: index == 1 || index == 3 ? 0 : "",
        }}
      >
        <section className="flex justify-around items-center lg:p-3 p-0 lg:flex-col gap-5 lg:gap-10">
          <div className="flex lg:flex-col gap-4">
            {/* Github */}
            {}
            <a
              href={linkRepo}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                ${
                  theme === "dark" && (index == 0 || index == 2)
                    ? "bg-gray-200 text-black  "
                    : "bg-dark-gray text-white "
                } 
                flex items-center justify-center rounded-full border-2 border-slate-500 size-12 hover:scale-125 transition-transform duration-300 ease-in-out"
  `}
            >
              {/* <FaGithub className="size-6" /> */}
              {cekLinkRepo(linkRepo)}
            </a>

            {/* Demo */}
            {linkDemo && linkDemo.length !== 0 && (
              <a
                href={linkDemo}
                target="_blank"
                rel="noopener noreferrer"
                className={`
      flex items-center justify-center
     ${
       theme === "dark" && (index == 0 || index == 2)
         ? "bg-gray-200 text-black  "
         : "bg-dark-gray text-white "
     }  rounded-full border-2 border-slate-500 size-12 
      hover:scale-125 transition-transform duration-300 ease-in-out
      ${index === 0 || index === 2 ? "lg:-translate-x-7" : "lg:translate-x-7"}
    `}
              >
                {" "}
                <MdOutlineViewCozy title="Demo app" className="size-6" />
              </a>
            )}

            {/* Gallery */}
            <div
              className={`   ${
                theme === "dark" && (index == 0 || index == 2)
                  ? "bg-gray-200 text-black  "
                  : "bg-dark-gray text-white "
              }   shadow-lg p-2 rounded-full border-2 border-slate-500 size-12 hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer`}
            >
              {/* <RiGalleryFill className="size-6" /> */}
              {language}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CardInfoFotofolio;
