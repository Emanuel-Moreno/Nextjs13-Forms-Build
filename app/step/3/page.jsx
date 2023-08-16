"use client";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  addAdds,
  
  addPrice,
  
  totalAll,
} from "@/store/slice";

import { useState } from "react";
function PageThree() {
  const [total, setTotal] = useState(0);
  const [service, setService] = useState([]);
  const [pickAdds, setPickAdds] = useState([]);
  console.log(service, pickAdds);
  const router = useRouter();
  const dispatch = useDispatch();
  const titlecheck = [
    "Online service",
    "Larger storage",
    "Customizable Profile",
  ];
  const agregarDato = (dato,) => {
    // Crear una nueva copia del estado con el nuevo dato agregado
    const nuevaLista = [...service];
    nuevaLista.push(dato);
    setService(nuevaLista);
  };
  const agregarPicks = (dato,) => {
    // Crear una nueva copia del estado con el nuevo dato agregado
    const nuevaLista = [...pickAdds];
    nuevaLista.push(dato);
    setPickAdds(nuevaLista);
  };
  const removeDato = (dato) =>{
    const nuevaLista = [...service];
    const nuevaListas = nuevaLista.filter(index => index !== dato)
    setService(nuevaListas)
  }
  const removePicks = (dato) =>{
    const nuevaLista = [...pickAdds];
   const nuevaListas = nuevaLista.filter(index => index !== dato)
    setPickAdds(nuevaListas)
  }
  const [isChecked, setIsChecked] = useState(
    Array(titlecheck.length).fill(false)
  );
  // console.log(isChecked[0]);
  // console.log(isChecked[1]);
  // console.log(isChecked[2]);

  const handleChecked = (index) => {
    if (!isChecked[index]) {
      if (!service.includes(titlePlan[index])) {
        agregarDato(titlePlan[index])
        if (costCurrent.plan < 80) {
         
          agregarPicks(pricecheck[index])
          
        } else {
          agregarPicks(pricecheckTwo[index])
          
        }
      }if(costCurrent.plan < 80){
        setTotal(total + totalMon[index]);
      }else{
        setTotal(total + totalYear[index]);
      }

      
    } else {
      if (costCurrent.plan < 80) {
        removePicks(pricecheck[index]);
        setTotal(total - totalMon[index]);
      } else {
        removePicks(pricecheckTwo[index]);
        setTotal(total - totalYear[index]);
      }
      removeDato(titlePlan[index])
    }
  };

  const totalMon = [1, 2, 3];
  const totalYear = [10, 20, 30];
  const handleCheckboxChange = (index) => {
    const updatedChecked = [...isChecked];
    updatedChecked[index] = !updatedChecked[index];

    setIsChecked(updatedChecked);
  };
  const titlePlan = [
    "Online service",
    "Larger storage",
    "Customizable Profile",
  ];

  const costCurrent = useSelector((state) => state.cost);

  console.log(costCurrent.plan);
  console.log(total);
  

  const descriptioncheck = [
    "Access to multiplayer games",
    "Extra 1TB of cloud save",
    "Custom theme on your profile",
  ];
  const pricecheck = ["+$1/mo", "+$2/mo", "+$3/mo"];
  const pricecheckTwo = ["+$10/yr", "+$20/yr", "+$30/yr"];
  const costService = (index) => {
    const pricecheck = ["+$1/mo", "+$2/mo", "+$3/mo"];
    const pricecheckTwo = ["+$10/yr", "+$20/yr", "+$30/yr"];
    if (costCurrent.plan < 90) {
      return pricecheck[index];
    } else {
      return pricecheckTwo[index];
    }
  };

  const handleNextStep = () => {
    const newServices = [...service]
    const newPicks = [...pickAdds]
    if (costCurrent.plan !== 0) {
      dispatch(totalAll(total));
      dispatch(addAdds(newServices));
      dispatch(addPrice(newPicks));
      router.replace("/step/4");
      toast.success("Saved Add-Ons ", {
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
    } else {
      console.log("date incorrect");
      toast.error("Plan not saved, Go back to step 2", {
        style: {
          border: "1px solid red",
          padding: "16px",
          color: "red",
        },
        icon: "❌",
      });
    }
  };
  

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
                    index === 2 ? "text-black bg-blue-100" : " text-white"
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
              Pick add-ons
            </p>
            <p className="text-[15px] text-gray-400 mb-[38px]">
              Add-ons help enhance your gaming experience.
            </p>
            <div className="h-[261px] ">
              {titlePlan.map((_, index) => (
                <div
                  key={index}
                  className={` flex border rounded-[10px] px-[23px] py-[19px] gap-[23px] h-[80px] mb-[15px] items-center hover:border-purple-700  hover:cursor-pointer ${
                    isChecked[index] ? "border-purple-700 bg-blue-50" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    className=" cursor-pointer  "
                    onChange={() => handleCheckboxChange(index)}
                    checked={isChecked[index]}
                    onClick={() => handleChecked(index)}
                  />

                  <div className=" flex justify-between w-[100%] items-center">
                    <div>
                      <p className=" text-blue-950 font-semibold">
                        {titlecheck[index]}
                      </p>
                      <p className=" text-gray-400 text-[13px]">
                        {descriptioncheck[index]}
                      </p>
                    </div>
                    <p className=" text-purple-700 text-[13px] font-medium">
                      {costService(index)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between h-[50px]  items-center w-[100%] mt-[80px] ">
              <p
                className=" font-medium text-gray-400 hover:text-blue-950 hover:cursor-pointer"
                onClick={() => {
                  router.replace("/step/2");
                }}
              >
                Go Back
              </p>
              <button
                className="w-[120px] h-[50px] bg-blue-950 text-white rounded-[10px] hover:bg-blue-700 font-bold "
                onClick={() => handleNextStep()}
              >
                Next Step
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default PageThree;
