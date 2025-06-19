import anime from "animejs";
import { useEffect, useRef } from "react";

const Words = () => {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();

      // Set properti awal stroke untuk animasi
      pathRef.current.style.strokeDasharray = `${length}`;
      pathRef.current.style.strokeDashoffset = `${length}`;
    }
  }, []);

  const handleMouseHover = () => {
    if (pathRef.current) {
      anime.remove(pathRef.current); // Hapus animasi sebelumnya agar tidak bentrok

      anime({
        targets: pathRef.current,
        strokeDashoffset: [anime.setDashoffset, 0], // Efek menggambar stroke
        easing: "easeInOutSine",
        duration: 2500,
        direction: "alternate",
      });
    }
  };

  const handleMouseLeave = () => {
    if (pathRef.current) {
      anime.remove(pathRef.current); // Pastikan animasi sebelumnya dihentikan

      anime({
        targets: pathRef.current,
        strokeDashoffset: pathRef.current.getTotalLength(), // Kembali ke posisi awal
        easing: "easeInOutQuad",
        duration: 1500,
      });
    }
  };

  return (
    <div
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseLeave}
      className="flex justify-center items-center relative  mx-auto border-separate bg-gray-500 w-[90%] h-[90%] max-h-[10rem]"
    >
      <div className="absolute p-2 text-center top-0 right-0 translate-x-6 translate-y-[-1.5rem] border-4 rounded-lg bg-slate-50 border-y-dark-gray">
        <span>point to open</span>
      </div>
      <svg
        viewBox="-400 -530 800 800"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          fill="transparent"
          d="M -166 -219 L -203 -201 Q -272 -137 -201 -132 L -180 -90 C -338 -73 -268 -272 -168 -219 M -68 -196 C -38.6667 -181 -6 -182 -21 -149 L -76 -156 Q -11 -172 -79 -173 L -88 -129 L -62 -93 C -166 -92 -128 -153 -106 -188 M 20 -105 L 14 -154 C 13 -137 88 -180 63 -134 H 23 L 38 -103 C 131 -101 90 -205 31 -188 L -6 -166 L -21 -102 L 17 -104 M 204 -94 L 181 -154 C 190 -172 220 -224 261 -199 L 280 -158 L 230 -152 Q 282 -172 228 -180 L 216 -152 L 225 -114 C 255 -111.3333 316 -170 271 -99 L 203 -92 M 97 -173 V -87 C 206 -91 211 -116 128 -123 L 127 -155 L 177 -145 L 169 -176 H 132 L 134 -195 Q 84 -201 97 -168 M -159 -90 L -178 -118 L -176 -183 L -153 -220 L -59 -202 Q -138 -197 -138 -180 L -157 -90"
          stroke="white"
          strokeWidth="3"
        />
      </svg>
      <div className="absolute p-2  w-8 h-24 text-center top-8 left-0 translate-x-[-1rem] translate-y-4 border-4 rounded-lg bg-slate-50 border-y-dark-gray"></div>
    </div>
  );
};

export default Words;
