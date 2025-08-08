import { useEffect } from "react";

const BacgroundTransparan = () => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    //  kembalikan fungsi cleanup
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return (
    <div className="fixed inset-0  bg-black opacity-50   transition-opacity duration-150" />
  );
};

export default BacgroundTransparan;
