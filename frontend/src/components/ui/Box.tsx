import React from "react";

const Box = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50 ">
      <article className="h-[313px] w-[343px] md:w-[608px] md:h-[489px] relative p-4 md:p-6 rounded-2xl bg-neutral-200 mx-auto">
        {children}
      </article>
    </div>
  );
};

export default Box;
