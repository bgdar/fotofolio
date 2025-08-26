import anime from "animejs";
import { useEffect, useRef } from "react";
import { useGlobalState } from "../globalState";

const Words = () => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const { theme } = useGlobalState();

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = `${length}`;
      pathRef.current.style.strokeDashoffset = `${length}`;
    }
  }, []);

  const handleMouseHover = () => {
    if (pathRef.current) {
      anime.remove(pathRef.current);
      anime({
        targets: pathRef.current,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 2500,
        direction: "alternate",
      });
    }
  };

  const handleMouseLeave = () => {
    if (pathRef.current) {
      anime.remove(pathRef.current);
      anime({
        targets: pathRef.current,
        strokeDashoffset: pathRef.current.getTotalLength(),
        easing: "easeInOutQuad",
        duration: 1500,
      });
    }
  };

  return (
    <div
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseLeave}
      className={`flex justify-center items-center relative mx-auto w-[90%] h-[10rem] rounded-xl shadow-lg transition-colors duration-500 border-4  
        ${
          theme === "dark"
            ? "bg-gradient-to-r from-gray-800 via-gray-900 to-black"
            : "bg-gradient-to-r from-gray-100 via-white to-gray-200"
        }`}
    >
      {/* Tooltip atas */}
      <div
        className={`absolute px-3 py-1 text-sm font-mono font-semibold top-2 right-2 rounded-lg shadow-md transition-colors duration-500
          ${
            theme === "dark"
              ? "bg-gray-800 text-gray-200"
              : "bg-gray-100 text-gray-700"
          }`}
      >
        point to open
      </div>

      {/* SVG Path animasi */}
      <svg
        viewBox="-400 -530 800 800"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          fill="transparent"
          d="M -166 -219 L -203 -201 Q -272 -137 -201 -132 L -180 -90 C -338 -73 -268 -272 -168 -219 M -68 -196 C -38.6667 -181 -6 -182 -21 -149 L -76 -156 Q -11 -172 -79 -173 L -88 -129 L -62 -93 C -166 -92 -128 -153 -106 -188 M 20 -105 L 14 -154 C 13 -137 88 -180 63 -134 H 23 L 38 -103 C 131 -101 90 -205 31 -188 L -6 -166 L -21 -102 L 17 -104 M 204 -94 L 181 -154 C 190 -172 220 -224 261 -199 L 280 -158 L 230 -152 Q 282 -172 228 -180 L 216 -152 L 225 -114 C 255 -111.3333 316 -170 271 -99 L 203 -92 M 97 -173 V -87 C 206 -91 211 -116 128 -123 L 127 -155 L 177 -145 L 169 -176 H 132 L 134 -195 Q 84 -201 97 -168 M -159 -90 L -178 -118 L -176 -183 L -153 -220 L -59 -202 Q -138 -197 -138 -180 L -157 -90"
          stroke={theme === "dark" ? "#f5f5f5" : "#1a1a1a"}
          strokeWidth="3"
        />
      </svg>

      {/* Decorative bar di kiri */}
      <div
        className={`absolute w-3 h-20 top-8 left-0 rounded-md transition-colors duration-500
          ${theme === "dark" ? "bg-gray-600" : "bg-gray-300"}`}
      />
    </div>
  );
};

export default Words;
