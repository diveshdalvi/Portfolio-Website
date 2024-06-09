import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import {
  FirstPage,
  AboutMe,
  Help,
  Contact,
  Education,
  Projects,
  ErrorComponent,
} from "./components/index";
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

  const [currentComponent, setCurrentComponent] = useState(null);

  const components = {
    "/help": <Help />,
    "/education": <Education />,
    "/about": <AboutMe />,
    "/projects": <Projects />,
    "/contact": <Contact />,
  };

  const handleCurrentComponent = (command) => {
    if (components[command]) {
      setCurrentComponent(components[command]);
    } else if (command == "/clear") {
      setCurrentComponent(null);
    } else {
      setCurrentComponent(<ErrorComponent />);
    }
  };
  const handleCommand = () => {
    handleCurrentComponent(commandValue);
    setCommandValue("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand();
    }
  };
  return (
    <div className="bg-[#0C0C0C] min-h-screen font-jetbrains text-white overflow-hidden">
      <div className=" flex justify-between flex-col h-full min-h-screen">
        <div>
          <div>
            <div className="flex justify-between bg-[#333333] items-center">
              <span className="text-lg items-center justify-center ml-2">
                Portfolio:\Divesh Dalvi
              </span>
              <div className="flex">
                <div
                  className="hover:bg-[#424242] cursor-pointer w-12 h-12 flex items-center justify-center"
                  onClick={() => setCurrentComponent(<Help />)}
                >
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
                <div className=" flex flex-col text-slate-400 ">
                  <a
                    className=" hover:underline cursor-pointer hover:text-slate-300"
                    href="https://drive.google.com/file/d/1IgghtTri7AJAS4f-s_gprwW67ji29IaU/view?usp=drive_link"
                    rel="noopener"
                    target="_blank"
                  >
                    <DescriptionIcon /> Download Resume
                  </a>
                  <a
                    className=" hover:underline cursor-pointer hover:text-slate-300"
                    href="https://github.com/diveshdalvi"
                    rel="noopener"
                    target="_blank"
                  >
                    <GitHubIcon /> github/diveshdalvi
                  </a>
                  <a
                    className=" hover:underline cursor-pointer hover:text-slate-300"
                    href="https://www.linkedin.com/in/divesh-dalvi"
                    target="_blank"
                  >
                    <LinkedInIcon /> linkedin/divesh-dalvi
                  </a>
                  <a
                    className=" hover:underline cursor-pointer hover:text-slate-300"
                    href="https://x.com/dalvi_divesh"
                    rel="noopener"
                    target="_blank"
                  >
                    <TwitterIcon /> x.com/dalvi_divesh
                  </a>
                </div>
              </div>
            </div>

            <div className=" font-jetbrains p-4 md:px-4 mt-8">
              <span className=" text-green-600 sm:text-lg text-xs">
                Enter /help for press ? button for commands list
              </span>
              <span className=" flex text-md mt-2 ">
                <span className="text-pink-600">[divesh\portfolio]~$ </span>
                <input
                  type="text"
                  name=""
                  id=""
                  value={commandValue}
                  onKeyDown={handleKeyDown}
                  onChange={(e) => setCommandValue(e.target.value)}
                  className=" bg-transparent  ml-4 outline-none  text-blue-200"
                />
              </span>
            </div>
            {currentComponent}
            <div />
          </div>
        </div>
        <div>
          <div className=" md:hidden flex flex-col text-md text-white justify-start p-3 bg-[#333333] ">
            <div className="">
              <PermIdentityIcon /> Divesh Dalvi
            </div>
            {/* <hr className="  border-dotted  " /> */}
            <div className=" flex flex-col text-slate-300 ">
              <a
                className=" hover:underline cursor-pointer hover:text-slate-300"
                href="https://drive.google.com/file/d/1IgghtTri7AJAS4f-s_gprwW67ji29IaU/view?usp=drive_link"
                rel="noopener"
                target="_blank"
              >
                <DescriptionIcon /> Download Resume
              </a>
              <a
                className=" hover:underline cursor-pointer hover:text-slate-300"
                href="https://github.com/diveshdalvi"
                rel="noopener"
                target="_blank"
              >
                <GitHubIcon /> github/diveshdalvi
              </a>
              <a
                className=" hover:underline cursor-pointer hover:text-slate-300"
                href="https://www.linkedin.com/in/divesh-dalvi"
                target="_blank"
              >
                <LinkedInIcon /> linkedin/divesh-dalvi
              </a>
              <a
                className=" hover:underline cursor-pointer hover:text-slate-300"
                href="https://x.com/dalvi_divesh"
                rel="noopener"
                target="_blank"
              >
                <TwitterIcon /> x.com/dalvi_divesh
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
