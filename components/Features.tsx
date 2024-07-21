import React from "react";
import FeaturedCard from "./FeaturedCard";
import { FaBookOpen, FaClock } from "react-icons/fa";
import { FaPenClip } from "react-icons/fa6";

const Features = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <FeaturedCard
        icon={FaBookOpen}
        title="Expert Writers"
        description="Our writers are highly skilled and experienced in various fields."
      />
      <FeaturedCard
        icon={FaClock}
        title="Timely Delivery"
        description="We ensure that your projects are delivered on time, every time."
      />
      <FeaturedCard
        icon={FaPenClip}
        title="Quality Assurance"
        description="We guarantee top-notch quality and satisfaction with our services."
      />
    </div>
  );
};

export default Features;
