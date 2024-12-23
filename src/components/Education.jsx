import React from "react";
import info from "../data/data";
const Education = () => {
  return (
    <div className=" p-5 flex gap-5 flex-col md:flex-row ">
      {
        Object.keys(info.education).map((key) => {
          return (
            <div key={key} className=" p-5 font-jetbrains border-dotted border-2  shadow-lg">
              <h2 className=" text-2xl font-bold text-lime-400">{key}</h2>
              <h3 className=" text-xl font-semibold text-purple-500">
                {info.education[key].school || info.education[key].college}
              </h3>
              <h4 className=" text-lg font-semibold">
                Year - {info.education[key].year}
              </h4>
              <h4 className=" text-lg font-semibold">
                Percentage - {info.education[key].percentage}
              </h4>
            </div>
          );
        })
      }
    </div>
  );
};

export default Education;
