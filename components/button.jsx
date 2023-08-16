import React from 'react'

function Button({back, next}) {

 return (
    <div className="flex justify-between h-[50px]  items-center w-[100%] mt-[80px] ">
    <p
      className=" font-medium text-gray-400 hover:text-blue-950 hover:cursor-pointer"
      onClick={() => {back()}}
    >
      Go Back
    </p>
    <button className="w-[120px] h-[50px] bg-blue-950 text-white rounded-[10px] hover:bg-blue-00 font-bold " onClick={()=>next()}>
        Next Step
      </button>
    </div>
  )
}

export default Button


