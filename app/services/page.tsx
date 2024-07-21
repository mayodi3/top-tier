import Image from "next/image";
import React from "react";
import "./services.css";

const ServicesPage = () => {
  return (
    <div className="w-full">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl p-4 font-bold text-green-500">
          Services You Might like
        </h1>
        <p className="text-sm md:text-lg text-gray-500">
          Explore Services you might like and choose a client to get your work
          done
        </p>
      </div>
      <div
        id="Services"
        className="flex flex-col lg:mb-60 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center items-center lg:mx-auto"
      >
        <div className="flex flex-col items-center justify-center shadow-2xl shadow-green-950 m-6 rounded-md w-4/5 md:w-64 h-96">
          <Image
            src="/WritingServices.jpg"
            alt=""
            width={230}
            height={230}
            className="py-5 object-cover h-52"
            style={{ borderRadius: "0 50px 50px 50px" }}
          />
          <div className="text-center py-2 px-5 text-xs flex flex-col items-center justify-center gap-4 pt-4">
            <p className="text-gray-500">
              Professional Online Writing Services
            </p>
            <h1 className="font-bold text-sm border-b-black border-spacing-2">
              Online Writing
            </h1>
          </div>
          <div className="border-green-400 border-2 w-5/6 rounded-full mb-5"></div>
          <div className="bg-green-800 text-white p-3 rounded-md w-2/3 text-center mb-4">
            Ksh 250 / Page
          </div>
        </div>
        <div className="flex flex-col items-center justify-center shadow-2xl shadow-green-950 m-6 rounded-md w-4/5 md:w-64 h-96">
          <Image
            src="/DataEntry.jpg"
            alt=""
            width={230}
            height={230}
            className="py-5 object-cover h-52"
            style={{ borderRadius: "0 50px 50px 50px" }}
          />
          <div className="text-center py-2 px-5 text-xs flex flex-col items-center justify-center gap-4 pt-4">
            <p className="text-gray-500">Data Entry and Research</p>
            <h1 className="font-bold text-sm border-b-black border-spacing-2">
              Data Entry
            </h1>
          </div>
          <div className="border-green-400 border-2 w-5/6 rounded-full mb-5"></div>
          <div className="bg-green-800 text-white p-3 rounded-md w-2/3 text-center mb-4">
            Ksh 500 / Hour
          </div>
        </div>
        <div className="flex flex-col items-center justify-center shadow-2xl shadow-green-950 m-6 rounded-md w-4/5 md:w-64 h-96">
          <Image
            src="/WebsiteDesign.jpg"
            alt=""
            width={230}
            height={230}
            className="py-5 object-cover h-52"
            style={{ borderRadius: "0 50px 50px 50px" }}
          />
          <div className="text-center py-2 px-5 text-xs flex flex-col items-center justify-center gap-4 pt-4">
            <p className="text-gray-500">Full Stack Website Development</p>
            <h1 className="font-bold text-sm border-b-black border-spacing-2">
              Website Design & Deployment
            </h1>
          </div>
          <div className="border-green-400 border-2 w-5/6 rounded-full mb-5"></div>
          <div className="bg-green-800 text-white p-3 rounded-md w-2/3 text-center mb-4">
            Ksh 1000 / Hour
          </div>
        </div>
        <div className="flex flex-col items-center justify-center shadow-2xl shadow-green-950 m-6 rounded-md w-4/5 md:w-64 h-96">
          <Image
            src="/AcademicResearch.jpg"
            alt=""
            width={230}
            height={230}
            className="py-5 object-cover h-52"
            style={{ borderRadius: "0 50px 50px 50px" }}
          />
          <div className="text-center py-2 px-5 text-xs flex flex-col items-center justify-center gap-4 pt-4">
            <p className="text-gray-500">Academic Research for students</p>
            <h1 className="font-bold text-sm border-b-black border-spacing-2">
              Academic Research
            </h1>
          </div>
          <div className="border-green-400 border-2 w-5/6 rounded-full mb-5"></div>
          <div className="bg-green-800 text-white p-3 rounded-md w-2/3 text-center mb-4">
            Ksh 1000 / Hour
          </div>
        </div>
        <div className="flex flex-col items-center justify-center shadow-2xl shadow-green-950 m-6 rounded-md w-4/5 md:w-64 h-96">
          <Image
            src="/VideoEditing.jpg"
            alt=""
            width={230}
            height={230}
            className="py-5 object-cover h-52"
            style={{ borderRadius: "0 50px 50px 50px" }}
          />
          <div className="text-center py-2 px-5 text-xs flex flex-col items-center justify-center gap-4 pt-4">
            <p className="text-gray-500">
              Outstanding video editing capabilities
            </p>
            <h1 className="font-bold text-sm border-b-black border-spacing-2">
              Video Editing
            </h1>
          </div>
          <div className="border-green-400 border-2 w-5/6 rounded-full mb-5"></div>
          <div className="bg-green-800 text-white p-3 rounded-md w-2/3 text-center mb-4">
            Ksh 5000 / video
          </div>
        </div>
        <div className="flex flex-col items-center justify-center shadow-2xl shadow-green-950 m-6 rounded-md w-4/5 md:w-64 h-96">
          <Image
            src="/VirtualAssistant.jpg"
            alt=""
            width={230}
            height={230}
            className="py-5 object-cover h-52"
            style={{ borderRadius: "0 50px 50px 50px" }}
          />
          <div className="text-center py-2 px-5 text-xs flex flex-col items-center justify-center gap-4 pt-4">
            <p className="text-gray-500">Remote Virtual assistant</p>
            <h1 className="font-bold text-sm border-b-black border-spacing-2">
              Virtual Assistant
            </h1>
          </div>
          <div className="border-green-400 border-2 w-5/6 rounded-full mb-5"></div>
          <div className="bg-green-800 text-white p-3 rounded-md w-2/3 text-center mb-4">
            Ksh 1000 / Hour
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
