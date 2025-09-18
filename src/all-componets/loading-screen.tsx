import React, { useEffect, useRef } from "react";
import anime from "animejs";

type LoadingScreenProps = {
  onFinish: () => void;
};

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loader = loaderRef.current;

    const playExitAnim = () => {
      if (!loader) return;
      anime({
        targets: loader,
        opacity: [1, 0],
        duration: 600,
        easing: "easeInOutQuad",
        complete: onFinish,
      });
    };

    if (document.readyState === "complete") {
      // Jika sudah loaded (misalnya refresh cepat)
      playExitAnim();
    } else {
      // animasi dot loading saat pertama kali 
      anime({
        targets: ".dot",
        translateY: [-8, 0],
        easing: "easeInOutSine",
        duration: 600,
        delay: anime.stagger(150),
        loop: true,
        direction: "alternate",
      });

      // saat semua resource selesai
      const handleLoad = () => {
        console.info("Semua resource sudah dimuat");
        playExitAnim();
      };

      window.addEventListener("load", handleLoad, { once: true });

      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  }, [onFinish]);

  return (
    <div
      ref={loaderRef}
      style={{
        position: "fixed",
        inset: 0,
        background: "#111",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        zIndex: 9999,
      }}
    >
      <div className="dot w-6 h-6 border-2 rounded-md bg-slate-500"></div>
      <div className="dot w-6 h-6 border-2 rounded-md bg-slate-500"></div>
      <div className="dot w-6 h-6 border-2 rounded-md bg-slate-500"></div>
      <div className="dot w-6 h-6 border-2 rounded-md bg-slate-500"></div>
      <div className="dot w-6 h-6 border-2 rounded-md bg-slate-500"></div>
    </div>
  );
};

export default LoadingScreen;
