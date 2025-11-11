import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaReact } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { BiBadge } from "react-icons/bi";

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/*Work Part*/}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Work <span className="text-cyan-200">Experience</span>
          </h1>
          <div className="mt-10">
            <ResumeCard
              Icon={FaCodepen}
              role="ShivNath Rice and Oil Mill"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus corporis modi"
            />
            <ResumeCard
              Icon={FaReact}
              role="Frontend Developer"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus corporis modi "
            />
            <ResumeCard
              Icon={BsDatabase}
              role="Backend Developer"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus corporis modi ."
            />
          </div>
        </div>
        {/*Education Part */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-200">Education </span>
          </h1>
          <div className="mt-10">
            <ResumeCard
              Icon={BiBadge}
              role="Future Light Academy"
              date="before 2021"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus corporis modi"
            />
            <ResumeCard
              Icon={FaReact}
              role="Rammani Campass - Science"
              date="April 2021 - April 2023"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus corporis modi "
            />
            <ResumeCard
              Icon={BsDatabase}
              role="Siddharth College - BBA"
              date="April 2021 - April 2023"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus corporis modi ."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
