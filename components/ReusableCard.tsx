import React from "react";
import { IconType } from "react-icons";

interface CardProps {
  icon: IconType;
  title: string;
  description: string;
  buttonText?: string;
  buttonColor?: string;
  buttonHoverColor?: string;
}

const ReusableCard = ({
  icon: IconComponent,
  title,
  description,
  buttonText,
  buttonColor,
  buttonHoverColor,
}: CardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <IconComponent className={`text-${buttonColor}-500 text-2xl mr-4`} />
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div>
        <p className="text-gray-700">{description}</p>
        {/* <button
          className={`mt-4 bg-${buttonColor}-500 text-white px-4 py-2 rounded-lg hover:bg-${buttonHoverColor}-600 focus:outline-none focus:ring-2 focus:ring-${buttonColor}-500`}
        >
          {buttonText}
        </button> */}
        {buttonText && buttonColor && buttonHoverColor && (
          <button
            className={`mt-4 bg-${buttonColor}-500 text-white px-4 py-2 rounded-lg hover:bg-${buttonHoverColor}-600 focus:outline-none focus:ring-2 focus:ring-${buttonColor}-500`}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default ReusableCard;
