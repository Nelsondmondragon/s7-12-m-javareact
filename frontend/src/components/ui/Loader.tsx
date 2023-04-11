import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="border-8 border-white border-t-black rounded-full w-16 h-16 animate-spin"></div>
    </div>
  );
};

export default Loader;
