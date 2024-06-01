import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
const App = () => {
  return (
    <div className=" bg-[#0C0C0C]  h-screen font-jetbrains text-white">
      <div className=" flex justify-between bg-[#333333]  items-center">
        <span className=" text-lg items-center justify-center ml-2">
          Portfolio:/Divesh Dalvi
        </span>
        <div className="flex">
          <div className=" hover:bg-[#424242]  cursor-pointer  w-12 h-12 flex items-center justify-center">
            <QuestionMarkIcon />
          </div>
          <div className=" hover:bg-red-700 cursor-pointer  w-12 h-12 flex items-center justify-center">
            <CloseIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
