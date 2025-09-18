import { useState } from "react";
import { GiLeafSkeleton } from "react-icons/gi";
// This component displays an image with a loading shimmer effect until the image is fully loaded.

interface ImageLoadingProps {
  src: string;
  alt?: string;
  addClass?: string;
}

const ImgWithLoading = (props: ImageLoadingProps) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    console.info("load di jalaakn ")
    setLoaded(true);
  };

  return (
<div className="relative w-full h-full">
  {/* animasi load  */}
  {!loaded && (
    <div className="absolute inset-0 flex items-center justify-center">
      <GiLeafSkeleton className="w-12 h-12 text-gradient animate-fall" />
    </div>
  )}
  <img
    src={props.src}
    alt={props.alt}
    loading="lazy"
    onLoad={handleLoad}
    className={`${props.addClass} transition-opacity duration-700 ease-in-out ${
      loaded ? "opacity-100" : "opacity-0"
    }`}
  />
</div>

  );
};

export default ImgWithLoading;
