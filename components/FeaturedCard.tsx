import React from "react";
import { IconType } from "react-icons";

interface FeatturedProps {
  icon: IconType;
  title: string;
  description: string;
}

const FeaturedCard = ({
  icon: IconComponent,
  title,
  description,
}: FeatturedProps) => {
  return (
    <div className="flex flex-col gap-5 text-center p-5 bg-green-100 m-5 rounded-xl shadow-2xl w-[250px] h-90">
      <IconComponent className="text-green-700 self-center size-10" />
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="text-pretty">{description}</p>
    </div>
  );
};

export default FeaturedCard;
