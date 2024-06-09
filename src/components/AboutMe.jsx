import React from "react";
import info from "../data/data";

const AboutMe = () => {
  return (
    <div className=" p-5 text-slate-300">
      <span>{info.about}</span>
    </div>
  );
};

export default AboutMe;
