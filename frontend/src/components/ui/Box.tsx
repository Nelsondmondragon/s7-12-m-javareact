import React from "react";

const Box = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50 ">
      <article className="h-[489px] w-[608px] relative p-8 rounded-2xl bg-neutral-200 mx-auto">
        {children}
      </article>
    </div>
  );
};

export default Box;
