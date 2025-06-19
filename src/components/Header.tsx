import { useEffect, useState } from "react";
import { FaGithub, FaBitbucket } from "react-icons/fa";

// Komponen isi icon + nama, dipakai berulang
function HeaderContent() {
  return (
    <div className="flex justify-between py-2 items-center">
      <div className="flex items-center space-x-3">
        <a
          href="https://github.com/bgdar"
          className="group relative"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-[32px] text-slate-950 hover:text-slate-600 transition-colors duration-300" />
          <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm text-slate-600 transition-opacity duration-300">
            GitHub
          </span>
        </a>
        <a
          href="https://bitbucket.org/bgdar/workspace/overview/"
          className="group relative"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBitbucket className="text-[32px] text-slate-950 hover:text-slate-600 transition-colors duration-300" />
          <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm text-slate-600 transition-opacity duration-300">
            Bitbucket
          </span>
        </a>
      </div>

      <div className="text-gradient text-center group">
        <h2 className="text-[18px] leading-none font-semibold font-primary">
          Muhammad
        </h2>
        <h3 className="text-[18px] leading-none font-semibold font-primary">
          Nadhar
        </h3>
      </div>
    </div>
  );
}

// Komponen untuk header tetap
function StaticHeader() {
  return (
    <header className="overflow-hidden p-3">
      <HeaderContent />
    </header>
  );
}

// Komponen untuk header saat di-scroll
function FixedHeader({ scrolled }: { scrolled: boolean }) {
  return (
    <section
      className={`transition-all overflow-hidden -top-20 fixed left-1/2 -translate-x-1/2 w-full bg-white/30 backdrop-blur-md mx-auto border-2 shadow-lg rounded-xl z-50 p-3 ${
        scrolled ? "top-0 w-[85vw]" : ""
      }`}
      data-aos-duration="1000"
      data-aos-easing="ease-out"
    >
      <HeaderContent />
    </section>
  );
}

// Komponen utama yang diekspor
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <FixedHeader scrolled={scrolled} />
      <StaticHeader />
    </>
  );
}
