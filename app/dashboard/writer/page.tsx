import React from "react";
import "./writer.css";
import { MdStar } from "react-icons/md";
import {
  FaChartLine,
  FaClipboard,
  FaDollarSign,
  FaTasks,
  FaUpload,
} from "react-icons/fa";
import ReusableCard from "@/components/ReusableCard";
import RankCard from "./RankCard";

const jobs = [1, 2, 3, 4, 5, 6, 7, 8];

const WriterPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto p-8 mb-10">
        <div className="flex items-center justify-between py-5">
          <h1 className="text-lg md:text-4xl lg:text-5xl font-bold text-center">
            Writer Dashboard
          </h1>
          <RankCard />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-8">
          <ReusableCard
            icon={FaClipboard}
            title="Availabel Jobs (0)"
            description="Browse and claim availabe jobs"
            buttonColor="blue"
          />
          <ReusableCard
            icon={FaTasks}
            title="My Jobs"
            description="View and manage claimed jobs"
            buttonColor="green"
          />
          <ReusableCard
            icon={FaUpload}
            title="Submit Jobs"
            description="Submit jobs to editor for review"
            buttonColor="yellow"
          />
          <ReusableCard
            icon={FaDollarSign}
            title="Earnings"
            description="View your Earnings"
            buttonColor="green"
          />
          <ReusableCard
            icon={FaChartLine}
            title="Reports"
            description="View you job perfomance reports from editor"
            buttonColor="red"
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-bold mb-6">Available Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {jobs.map((_, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Job Title 1</h3>
                <p className="text-gray-700 mb-4">
                  This is a brief description of the job. It provides an
                  overview of what is required.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Claim Job
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriterPage;
