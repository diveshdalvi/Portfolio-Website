import React, { useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
const FirstPage = ({ close }) => {
  useEffect(() => {
    const handleKeyPress = () => {
      close();
    };
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [close]);

  return (
    <div className="absolute z-10 bg-black h-screen w-screen p-10 font-VT323 sm:flex flex-col justify-between hidden">
      <span className="text-3xl">
        Press Enter to Continue:{" "}
        <span className="border-white ml-3 animate-blink border-r-8 text-2xl"></span>
      </span>
      <div>
        Developed by Divesh Dalvi
        <a
          href="https://github.com/diveshdalvi"
          target="_blank"
          rel="noopener noreferrer"
          className=" ml-2 "
        >
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};

export default FirstPage;
