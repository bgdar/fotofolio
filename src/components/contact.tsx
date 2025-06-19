import { useEffect, useState } from "react";
import { FaReact, FaYoutube } from "react-icons/fa";
import { GiAnimalHide } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { IoCodeSlash, IoPhoneLandscapeOutline } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";

interface DataItemsType {
  title: string;
  content: JSX.Element;
  color?: string;
}
const dataItems: Array<DataItemsType> = [
  {
    title: "code",
    content: <IoCodeSlash />,
    color: "text-green-600",
  },
  {
    title: "React.js",
    content: <FaReact />,
    color: "text-blue-500",
  },
  {
    title: "Typescript",
    content: <SiTypescript />,
    color: "text-blue-600",
  },
  {
    title: "DOM",
    content: <GiAnimalHide />,
    color: "text-yellow-500",
  },
  {
    title: "Youtube",
    content: <FaYoutube />,
    color: "text-red-600",
  },
];

export default function Contact() {
  const [nextItem, setNextItem] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNextItem((prev) => (prev + 1) % dataItems.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [nextItem]);

  return (
    <div id="contact" data-aos="fade" data-aos-duration="1000">
      <section
        id="contact"
        className=" container py-12 mt-14 bg-gray-300 mx-auto rounded-t-2xl  "
      >
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl bg-white font-bold border-2 w-[50vw] mx-auto p-2 shadow-sm shadow-slate-400 translate-y-[-2em] sm:rounded-sm text-gray-900 mb-4">
              Let's Connect
            </h2>
            <p className=" text-gray-600 mb-8  font-semibold text-sm">
              I am always open to discuss new projects, creative ideas, or
              anything related to Code "greetings interaction"
            </p>
          </div>

          <div className="max-w-2xl mx-auto flex gap-1 sm:gap-4 justify-center flex-col sm:flex-row">
            <div className="bg-white p-6 rounded-lg h-full border-2 ">
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <HiOutlineMail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Email
                    </h3>
                    <a
                      href="mailto:akunzero975.email@gmail.com"
                      className="text-blue-600 hover:text-blue-500"
                    >
                      akunzero975@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <IoPhoneLandscapeOutline className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Phone
                    </h3>
                    <a
                      href="tel:+1234567890"
                      className="text-green-600 hover:text-green-500"
                    >
                      +6289523135244
                    </a>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <TfiLayoutMediaCenterAlt className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Follow Me
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://linkedin.com/in/kosong"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-500"
                      >
                        LinkedIn
                      </a>

                      <a
                        href="https://twitter.com/kosong"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-500"
                      >
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className="relative w-full h-[100px]  sm:h-40 ">
              <div className="relative h-full flex ijustify-center">
                {dataItems.map((item, index) => {
                  const isActive = index === nextItem;
                  const isNext = index === (nextItem + 1) % dataItems.length;

                  return (
                    <div
                      key={item.title}
                      className={`
            bg-white  absolute left-0 w-full md:h-28 transition-all duration-700 ease-in-out
            ${isActive ? "translate-x-0 z-20 opacity-100" : ""}
            ${
              isNext
                ? "translate-x-5 translate-y-5 scale-95 rotate-[1deg] blur-sm z-10 opacity-80"
                : "opacity-0"
            }
          `}
                    >
                      <div className="  p-6 rounded-lg shadow-xl sm:h-64  border-2">
                        <div
                          className={`text-4xl mb-2 ${item.color} flex justify-center items-center`}
                        >
                          {item.content}
                        </div>
                        <h3 className="text-lg text-center font-extrabold text-gray-900">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
