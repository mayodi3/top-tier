import React from "react";

const Hero = () => {
  return (
    <div className="bg-green-500 text-white flex flex-col gap-6 p-5 items-center justify-center text-center">
      <h1 className="font-bold text-3xl">Welcome to TopTierWriters</h1>
      <p>Connecting you with the best writers for you needs</p>
      <div className="bg-white text-green-500 font-bold shadow-md shadow-green-900 w-fit rounded-full px-6 py-3">
        Get Started
      </div>
    </div>
  );
};

export default Hero;
