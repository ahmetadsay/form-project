import React from "react";

const InputField = ({ label, id, type = "text", name }) => {
  return (
    <div>
      <div className=" flex flex-col items-start   gap-2 ">
        <label className="  " htmlFor="FirstName">
          {label}
        </label>
        <input
          className=" w-full  px-4 py-3 border-2 border-gray-400 rounded-md"
          type={type}
          id={id}
          name={name}
        />
      </div>
    </div>
  );
};

export default InputField;
