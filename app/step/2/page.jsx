"use client";


import { useRouter } from "next/navigation";
import { useState } from "react";
import Box from "@/components/box";
import Button from "@/components/button";
import { useDispatch } from "react-redux";
import { addCost } from "@/store/slice";
import { toast } from "react-hot-toast";

function StepTwo() {
 
  const [selectPlan, setSelectPlan] = useState(false);
  const [selectedBoxIndex, setSelectedBoxIndex] = useState(3);
  
  const updateCost = useDispatch();
  

  const router = useRouter();
 

  const montFree = ""; // 2 months free
  const backHome = () => {
    router.replace("/");
  };
  const images = [
    "/img/icon-arcade.svg",
    "/img/icon-advanced.svg",
    "/img/icon-pro.svg",
  ];
  const titles = ["Arcade", "Advanced", "Pro"];
  const pricesMon = [];

  const handleNextStep = () => {
    const counters = [
      [9, 90],
      [12, 120],
      [15, 150]
    ];
  
    if (selectedBoxIndex !== 3 && (selectedBoxIndex === 0 || selectedBoxIndex === 1 || selectedBoxIndex === 2)) {
      const index = selectedBoxIndex;
      const counterArray = selectPlan ? counters[index][1] : counters[index][0];
      updateCost(addCost(counterArray));
      router.replace("/step/3");
      toast.success("Saved Plan ", {
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
     }
     else {
      toast.success("Select a Plan !", {
        style: {
          border: "1px solid red",
          padding: "16px",
          color: "red",
        },
       icon: '❌'
      });
    }
  };
  

  const handleBoxClick = (index) => {
    setSelectedBoxIndex(index);
    
  };
  const handleBoxPlan = (plan) => {
    setSelectPlan(plan);
  };
  const updFree = (state, content) => {
    if (!state) {
      content = "";
    } else {
      content = "2 months free";
    }
  
    return content;
  };
  const updDescription = (state, description, index) => {
    if (!state) {
      description = ["$9/mo", "$12/mo", "$15/mo"];
    } else {
      description = ["$90/yr", "$120/yr", "$150/yr"];
    }

    return description[index];
  };
  return (
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
                  index === 1
                    ?  'text-black bg-blue-100'
                    : " text-white"
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
            Select your plan
          </p>
          <p className="text-[15px] text-gray-400 mb-[38px]">
            You have the option of monthly or yearly billing.
          </p>
          {/* BOX */}
          <div className="h-[261px] ">
            <div className=" flex justify-between mb-[0] ">
              {images.map((image, index) => (
                <Box
                  key={index}
                  img={image}
                  title={titles[index]}
                  description={updDescription(selectPlan, pricesMon, index)}
                  index={index}
                  selected={selectedBoxIndex === index}
                  click={handleBoxClick}
                  free={updFree(selectPlan, montFree)}
                />
              ))}
            </div>
            <div className="flex  justify-center items-center mt-[32px] border h-[48px] rounded-lg bg-blue-100 ">
              <p
                className={`${
                  selectPlan ? "text-gray-400" : "text-blue-950"
                } font-medium`}
              >
                Monthly
              </p>
              <div className="w-[40px] rounded-[20px] bg-blue-950 flex justify-between items-center p-[3px] border mx-[22px] ">
                <button
                  className={`${
                    selectPlan ? "bg-blue-950" : "bg-white"
                  } w-[14px] h-[14px]  rounded-full`}
                  onClick={() => {
                    handleBoxPlan(false);
                  }}
                >
                  <p></p>
                </button>
                <button
                  className={`${
                    !selectPlan ? "bg-blue-950" : "bg-white"
                  } w-[14px] h-[14px]  rounded-full`}
                  onClick={() => {
                    handleBoxPlan(true);
                  }}
                >
                  <p></p>
                </button>
              </div>
              <p
                className={`${
                  !selectPlan ? "text-gray-400" : "text-blue-950"
                } font-medium`}
              >
                Yearly
              </p>
            </div>
          </div>

          <Button back={backHome} next={handleNextStep}  /> 
        </section>
      </main>
    </div>
  );
}

export default StepTwo;
