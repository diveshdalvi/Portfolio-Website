import React from "react";
import ReactTypingEffect from "react-typing-effect";

const Help = () => {
    
  return (
    <div className=" p-5  ">
      <div className=" text-yellow-400 flex  text-2xl">
        Commands
      </div>
      <div className=" flex flex-col mt-3">
        <span>/help - Show all commands</span>
        <span>/clear - clear the terminal</span>
        <span>/about - About Me</span>
        <span>/education - Education</span>
        <span>/projects - Projects</span>
        <span>/contact - Contact Me</span>
      </div>
    </div>
  );
};

export default Help;
