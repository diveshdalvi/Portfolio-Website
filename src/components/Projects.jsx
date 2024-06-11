import React from "react";
import info from "../data/data";

const Projects = () => {
  return (
    <div className="p-5 flex flex-col">
      <span className="text-cyan-300 text-xl ">Projects</span>
      <hr className=" border-dashed" />
      <div className=" py-2 flex gap-2 flex-col md:flex-row flex-wrap   ">
        {Object.keys(info.Projects).map((project) => (
          <div
            key={project}
            className=" flex border p-5 flex-col md:w-1/5 my-3 md:mx-4 "
          >
            <span className=" text-yellow-400 font-VT323 text-2xl border-b text-center">
              {info.Projects[project].name}
            </span>
            <div className=" flex  flex-col justify-between">
              <div className=" mt-2">
                <span className=" ">{info.Projects[project].title}</span>
                <p className=" text-slate-400 ">
                  {info.Projects[project].desc}
                </p>
              </div>
              <div className=" flex gap-3 justify-between mt-2 items-end">
                <span className="">
                  Technology Used:{" "}
                  <span className=" text-neutral-500">
                    {info.Projects[project].technology}
                  </span>
                </span>
                <a
                  href={info.Projects[project].link}
                  rel="noopener"
                  target="_blank"
                  className=" text-green-400 hover:underline cursor-pointer"
                >
                  Link
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <span className=" text-center text-slate-500">
        For More Projects visit My{" "}
        <a
          href="https://github.com/diveshdalvi"
          rel="noopener"
          target="_blank"
          className=" underline"
        >
          Github Profile
        </a>
      </span>
    </div>
  );
};

export default Projects;
