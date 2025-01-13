import React from "react";

const QueryType = () => {
  return (
    <div className="space-y-4 flex flex-col  justify-start items-start w-full">
      <h1>Query Type</h1>
      <div className=" w-full flex  border-2 border-gray-500 rounded-md p-4  justify-start gap-2 ">
        <input
          type="checkbox"
          id="queryType1"
          name="queryType"
          value="queryType1"
        />
        <label htmlFor="queryType1">General Enquiry</label>
      </div>
      <div className=" w-full flex  border-2 border-gray-500 rounded-md p-4  justify-start gap-2 ">
        <input
          type="checkbox"
          id="queryType2"
          name="queryType"
          value="queryType1w"
        />
        <label htmlFor="queryType1">Support Request</label>
      </div>
    </div>
  );
};

export default QueryType;
