import React from "react";

const ErrorComponent = () => {
  return (
    <div className=" flex flex-col p-5 ">
      <span className=" text-yellow-400">Wrong input </span>
      <span className=" text-slate-400">
        Try <span className=" text-white">/help</span> to see all commands.
      </span>
    </div>
  );
};

export default ErrorComponent;
