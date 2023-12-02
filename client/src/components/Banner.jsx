import React from "react";

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-LightTaupe from-0% to-100% to-Rose">
      <div className="py-24 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">Dive into Delights of Delectable Food</h2>
        </div>
        <div className="md:w-1/2">Right</div>
      </div>
    </div>
  );
};

export default Banner;
