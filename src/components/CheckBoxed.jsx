import React from 'react'

const CheckBoxed = () => {
  return (
    <div className=" w-full flex  rounded-md   justify-start gap-4 ">
    <input
      type="checkbox"
      id="queryType2"
      name="queryType"
      value="queryType1w"
    />
    <label className='text-left' htmlFor="queryType1">I consent to being contacted by the team</label>
  </div>
  )
}

export default CheckBoxed