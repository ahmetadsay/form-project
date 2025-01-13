import React from "react";

const TextArea = () => {
  return (
    <div>
      <div className=" flex flex-col items-start   gap-2 ">
        <label className="  " htmlFor="FirstName">
          Message
        </label>
        <textarea
          rows={8}
          className=" w-full max-h-44 h-44 px-4 py-3 border-2 border-gray-400 rounded-md"
          id="message"
          name="message"
        />
      </div>
    </div>
  );
};

export default TextArea;
