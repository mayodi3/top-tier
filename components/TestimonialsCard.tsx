import React from "react";
import { IoStar, IoStarHalf } from "react-icons/io5";

interface TestimonialsProps {
  description: string;
  name: string;
  role: string;
}

const TestimonialsCard = ({ description, name, role }: TestimonialsProps) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-around gap-5 text-center p-5 bg-green-50 m-5 rounded-xl shadow-2xl w-250px h-80">
        <p className="text-pretty">{description}</p>
        <h1 className="font-bold text-xl">{name}</h1>
        <p className="text-pretty text-gray-400">{role}</p>
        <div className="flex self-center">
          <IoStar className="text-yellow-400 size-6" />
          <IoStar className="text-yellow-400 size-6" />
          <IoStar className="text-yellow-400 size-6" />
          <IoStar className="text-yellow-400 size-6" />
          <IoStarHalf className="text-yellow-400 size-6" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
