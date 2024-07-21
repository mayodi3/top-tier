import ReusableCard from "@/components/ReusableCard";
import React from "react";
import {
  FaChartLine,
  FaDownload,
  FaInfoCircle,
  FaPlusCircle,
  FaTachometerAlt,
} from "react-icons/fa";

const ManagePage = () => {
  return (
    <div className="bg-gray-100 font-roboto mb-10">
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Manager Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
          <ReusableCard
            icon={FaTachometerAlt}
            title="overview"
            description="Number of Posted Jobs: 120, Jobs in Progress: 45, Completed Jobs: 75"
            buttonText="View Details"
            buttonColor="blue"
            buttonHoverColor="blue"
          />
          <ReusableCard
            icon={FaPlusCircle}
            title="Post a Job"
            description="Create and post new jobs for writers"
            buttonText="Post Job"
            buttonColor="green"
            buttonHoverColor="green"
          />
          <ReusableCard
            icon={FaInfoCircle}
            title="Job Details"
            description="View and edit details of posted jobs"
            buttonText="View Jobs"
            buttonColor="yellow"
            buttonHoverColor="yellow"
          />
          <ReusableCard
            icon={FaDownload}
            title="Download Completed Jobs"
            description="Download reports for completed jobs"
            buttonText="Download"
            buttonColor="purple"
            buttonHoverColor="purple"
          />
          <ReusableCard
            icon={FaChartLine}
            title="Reports"
            description="Generate and view detailed reports"
            buttonText="View Reports"
            buttonColor="red"
            buttonHoverColor="red"
          />
        </div>
      </div>
    </div>
  );
};

export default ManagePage;
