import ReusableCard from "@/components/ReusableCard";
import React from "react";
import { FaChartLine, FaTasks, FaUpload } from "react-icons/fa";

const recieved = [1, 2, 3, 4, 5, 6, 7, 8];

const EditorPage = () => {
  return (
    <div className="bg-gray-100 font-roboto">
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Quality Assurance Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-8">
          <ReusableCard
            icon={FaTasks}
            title="Recieved Jobs"
            description="View and manager your writen jobs"
            buttonColor="green"
          />
          <ReusableCard
            icon={FaUpload}
            title="Foward Jobs"
            description="Submit completed jobs to Manager"
            buttonColor="yellow"
          />
          <ReusableCard
            icon={FaChartLine}
            title="Reports"
            description="View reports from the manager"
            buttonColor="red"
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-bold mb-6">Recieved Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {recieved.map((job, index) => (
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

export default EditorPage;
