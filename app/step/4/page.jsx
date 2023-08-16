'use client'
import React from 'react'
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import { toast } from "react-hot-toast";
function PageFour() {
  
const Router = useRouter();
    
  const costState =   useSelector(state => state.cost)
 const finTitle = ()=>{
  const titles = ["Arcade", "Advanced", "Pro"];
  if(costState.plan ===9 || costState.plan === 90){
   return titles[0]
  }
  if(costState.plan ===12 || costState.plan === 120){
    return titles[1]
   }
   if(costState.plan ===15 || costState.plan === 150){
    return titles[2]
   }
    
  
 }
  console.log(costState.adds);

  return (
    <>

      <div className=" h-[100vh] bg-blue-100  flex  items-center justify-center">
        <main className=" w-[940px] h-[600px]  bg-white rounded-[10px] p-[20px] flex gap-[100px]">
          <section className="bg-img-desk w-[275px] h-[100%] bg-cover bg-no-repeat bg-center rounded-[7px] px-[30px] py-[40px]">
            {Array.from({ length: 4 }, (_, index) => (
              <div
                key={index}
                className={`flex gap-[15px] items-center h-[33px] w-[100%] border-box mb-[30px] `}
              >
                <p
                  className={`w-[33px] h-[33px] rounded-[50%] flex ${
                    index === 3 ? "text-black bg-blue-100" : " text-white"
                  } justify-center  items-center border  font-bold pt-[1px]`}
                >
                  {index + 1}
                </p>
                <div className="flex flex-col h-[33px] justify-center align-middle gap-[4px]">
                  <p className="h-[13px] text-gray-400">STEP {index + 1}</p>
                  <p className="font-bold text-white">
                    {index === 0
                      ? "YOUR INFO"
                      : index === 1
                      ? "SELECT PLAN"
                      : index === 2
                      ? "ADD-ONS"
                      : "SUMMARY"}
                  </p>
                </div>
              </div>
            ))}
          </section>
          <section className="w-[450px] pt-[47px]  ">
            <p className="h-[25px] text-[24px] text-blue-950 font-bold mb-[17px]">
            Finishing up
            </p>
            <p className="text-[15px] text-gray-400 mb-[38px]">
            Double-check everything looks OK before confirming.
            </p>
            <div className="h-[261px] ">
                    <div className=' bg-gray-100 rounded-[8px] px-[23px] py-[20px] mb-[23px]'>
                    <div className='flex justify-between items-center '>
                        <div>
                          <p className=' text-blue-950 font-semibold'>{`${finTitle()} (${costState.plan < 80 ? 'Monthly': 'Yearly'})`}</p>
                          <p onClick={()=>{
                            router.replace('/step/2')
                          }} className=' text-gray-400 underline hover:text-purple-700 cursor-pointer text-[14px]'>Change</p>
                        </div>
                        <p className=' text-blue-950 font-bold text-[17px]'>{`$${costState.plan}/${costState.plan < 80 ? 'mo': 'yr'}`}</p>
                      </div>
                      <div className=' my-[20px]'>
                      <hr />
                      </div>
                    {
                     costState.adds.map((_,index)=>(
                      <div key={index} className='flex justify-between mt-[15px] '>
                        <p className=' text-gray-400 text-[15px]'>{costState.adds[index]}</p>
                        <p className=' text-blue-900 text-[13px] font-semibold'>{costState.prices[index]}</p>
                      </div>
                     ))
                    }
                    </div>
                    <div className='pl-[23px] pr-[23px] flex justify-between  items-center'>
                      <p className=' text-gray-400 text-[15px]'>{`Total (per ${costState.plan < 80 ? 'month': 'year'})`}</p>
                      <p className=' text-[20px] text-purple-700 font-extrabold'>{`+$${costState.plan + costState.total}/${costState.plan < 80 ? 'mo': 'yr'}`}</p>
                    </div>
            </div>

            <div className="flex justify-between h-[50px]  items-center w-[100%] mt-[80px] ">
              <p
                className=" font-medium text-gray-400 hover:text-blue-950 hover:cursor-pointer"
                onClick={() => {
                  Router.replace("/step/3");
                }}
              >
                Go Back
              </p>
              <button className="w-[120px] h-[50px] bg-purple-700 text-white rounded-[10px] hover:bg-purple-500  font-bold "
              onClick={()=> {
             if(costState.plan !== 0){
              Router.replace('/step/5')
              toast.success("Thanks For Subscribing", {
                style: {
                  border: "1px solid #06ae5a",
                  padding: "16px",
                  color: "green",
                },
                iconTheme: {
                  primary: "green",
                  secondary: "#f2eeff",
                },
              });
             }else{
              console.log('Data Incorrect');
              toast.error("Data error, Go back to step 2", {
                style: {
                  border: "1px solid red",
                  padding: "16px",
                  color: "red",
                },
                icon: "❌",
              });
             }
              } }
              >
                Confirm
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}


export default PageFour