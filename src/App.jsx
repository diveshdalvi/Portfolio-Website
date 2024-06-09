import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { FirstPage, AboutMe } from "./components/index";
import ReactTypingEffect from "react-typing-effect";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
const App = () => {
  const [showPage, setShowPage] = useState(true);

  const handleKey = () => {
    setShowPage(true);
  };
  const closeWeb = () => {
    window.close();
  };
  const [commandValue, setCommandValue] = useState("");

  return (
    <div className="bg-[#0C0C0C] min-h-screen font-jetbrains text-white overflow-hidden">
      {!showPage && <FirstPage close={handleKey} />}
      {showPage && (
        <>
          <div className="flex justify-between bg-[#333333] items-center">
            <span className="text-lg items-center justify-center ml-2">
              Portfolio:/Divesh Dalvi
            </span>
            <div className="flex">
              <div className="hover:bg-[#424242] cursor-pointer w-12 h-12 flex items-center justify-center">
                <QuestionMarkIcon />
              </div>
              {/* <div
                className="hover:bg-red-700 cursor-pointer w-12 h-12 flex items-center justify-center"
                onClick={closeWeb}
              >
                <CloseIcon />
              </div> */}
            </div>
          </div>
          <div className="font-VT323 flex justify-between md:p-10 p-4">
            <div className="flex flex-col  mt-5">
              <span className="text-4xl">Hello Everyone</span>
              <div className="">
                <span className="md:text-6xl text-5xl">I'm Divesh Dalvi</span>
              </div>
              <span className="text-2xl">
                <ReactTypingEffect
                  text={"web developer"}
                  speed={300}
                  typingDelay={900}
                  eraseSpeed={300}
                />
              </span>
            </div>
            <div className=" hidden md:flex flex-col text-2xl text-gray-300 justify-start ">
              <div className="">
                <PermIdentityIcon /> Divesh Dalvi
              </div>
              <hr className="  border-dotted  " />
              <div className=" flex flex-col text-slate-400">
                <span className=" hover:underline cursor-pointer">
                  <DescriptionIcon /> Download Resume
                </span>
                <span className=" hover:underline cursor-pointer">
                  <GitHubIcon /> github/diveshdalvi
                </span>
                <span className=" hover:underline cursor-pointer">
                  <LinkedInIcon /> linkedin/divesh-dalvi
                </span>
                <span className=" hover:underline cursor-pointer">
                  <TwitterIcon /> x.com/dalvi_divesh
                </span>
              </div>
            </div>
          </div>

          <div className=" font-jetbrains p-4 md:px-4 mt-8">
            <span className=" text-green-600 sm:text-lg text-xs">
              Enter /help for press ? button for commands list
            </span>
            <span className=" flex text-md mt-2 ">
              <span className="text-pink-600">[diveshdalvi\portfolio]~$ </span>
              <input
                type="text"
                name=""
                id=""
                value={commandValue}
                onChange={(e) => setCommandValue(e.target.value)}
                className=" bg-transparent  ml-4 outline-none  text-blue-600"
              />
            </span>
          </div>
          <AboutMe />
        </>
      )}
    </div>
  );
};

export default App;
