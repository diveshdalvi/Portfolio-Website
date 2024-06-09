import React from "react";
import info from "../data/data";
const Education = () => {
  return (
    <div className=" p-5 flex gap-5 flex-col md:flex-row ">
      <div className=" md:border-r  border-white border-dotted pr-5 pb-3">
        <span className="text-3xl font-VT323">SSC</span>
        <div className=" flex flex-col">
          <span>School - {info.education.SSC.school}</span>
          <span>Year - {info.education.SSC.year}</span>
          <span>Percentage - {info.education.SSC.percentage}</span>
        </div>
      </div>
      <div>
        <span className="text-3xl font-VT323">Diploma</span>
        <div className=" flex flex-col">
          <span>College - {info.education.Diploma.college}</span>
          <span>Year - {info.education.Diploma.year}</span>
          <span>{info.education.Diploma.percentage}</span>
        </div>
      </div>
    </div>
  );
};

export default Education;
