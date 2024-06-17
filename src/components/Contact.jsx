import React, { useState } from "react";

const Contact = () => {
  const [showName, setShowName] = useState(true);
  const [userName, setUserName] = useState("");
  const [showEmail, setShowEmail] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [showMsg, setShowMsg] = useState(false);
  const [userMsg, setUserMsg] = useState("");
  const [isNameReadOnly, setIsNameReadOnly] = useState(false);
  const [isEmailReadOnly, setIsEmailReadOnly] = useState(false);
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const ShowEmailBox = (e) => {
    if (e.code === "Enter" || e.keyCode === 13) {
      setShowEmail(true);
      setIsNameReadOnly(true);
    }
    console.log(e);
  };
  const ShowMsgBox = (e) => {
    if (e.code === "Enter" || e.keyCode === 13) {
      setShowMsg(true);
      setIsEmailReadOnly(true);
    }
    console.log(e);
  };
  const ShowSubmitMsg = (e) => {
    if (e.code === "Enter" || e.keyCode === 13) {
      setShowName(false);
      setShowEmail(false);
      setShowMsg(false);
      setIsFormSubmit(true);
    }
  };
  return (
    <div className=" p-5 flex flex-col">
      <div className=" flex flex-col gap-3">
        {showName && (
          <span className=" text-blue-400">
            Enter Your Name:{" "}
            <input
              type="text"
              value={userName}
              readOnly={isNameReadOnly}
              id="namebox"
              onChange={(e) => setUserName(e.target.value)}
              onKeyDown={(e) => ShowEmailBox(e)}
              className=" bg-transparent outline-none  text-pink-400"
            />
          </span>
        )}
        {showEmail && (
          <span className=" text-violet-400">
            Enter Your Email:{" "}
            <input
              type="text"
              id="emailBox"
              value={userEmail}
              readOnly={isEmailReadOnly}
              onChange={(e) => setUserEmail(e.target.value)}
              onKeyDown={(e) => ShowMsgBox(e)}
              className=" bg-transparent outline-none  text-green-400"
            />
          </span>
        )}
        {showMsg && (
          <span className=" text-yellow-400">
            Enter Your Message:{" "}
            <input
              type=" text"
              size={100}
              id="msgBox"
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              onKeyDown={(e) => ShowSubmitMsg(e)}
              className=" bg-transparent outline-none  text-blue-400"
            />
          </span>
        )}
        {isFormSubmit && (
          <div className=" ">
            <span className=" text-orange-300">
              Thank you for your valuable message
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
