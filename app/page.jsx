"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

function StepOne() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const inputClassName = (error) =>
    `block w-full focus:outline-none rounded-md py-1.5 pl-7 pr-20 font-bold text-blue-950 ring-1 ring-inset ${
      error
        ? "ring-red-500 focus:ring-red-500"
        : "ring-gray-300 focus:ring-blue-600"
    } ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inherit sm:text-sm sm:leading-6 h-[47px] placeholder:font-normal mt-[-2px]`;

  return (
    <div className="h-screen bg-blue-100 flex items-center justify-center">
     
      <main className="w-[940px] h-[600px] bg-white rounded-[10px] p-[20px] flex gap-[100px]">
        <section className="bg-img-desk w-[275px] h-[100%] bg-cover bg-no-repeat bg-center rounded-[7px] px-[30px] py-[40px]">
          {Array.from({ length: 4 }, (_, index) => (
            <div
              key={index}
              className={`flex gap-[15px] items-center h-[33px] w-[100%] border-box mb-[30px] `}
            >
              <p
                className={`w-[33px] h-[33px] rounded-[50%] flex ${
                  index === 0
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
        <section className="w-[450px] pt-[47px]">
          <p className="h-[25px] text-[24px] text-blue-950 font-bold mb-[17px]">
            Personal info
          </p>
          <p className="text-[15px] text-gray-400 mb-[38px]">
            Please provide your name, email address, and phone number.
          </p>
          <form
            onSubmit={handleSubmit((data) => {
              router.replace("/step/2");
              toast.success("Saved information", {
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

              console.log(data);
            })}
          >
            <div className="h-[265px] ">
              {[
                {
                  name: "name",
                  label: "Name",
                  type: "text",
                  pattern: /^.{3,}$/,
                },
                {
                  name: "email",
                  label: "Email Address",
                  type: "email",
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                },
                {
                  name: "number",
                  label: "Phone Number",
                  type: "tel",
                  pattern: /^\d{10,}$/,
                },
              ].map((field, index) => (
                <div key={index} className="mb-[15px]">
                  <div className="flex justify-between ">
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium leading-6 text-blue-950"
                    >
                      {field.label}
                    </label>
                    {errors[field.name] && (
                      <span className="block text-[12px] font-medium leading-6 text-red-500">
                        {errors[field.name].message}
                      </span>
                    )}
                  </div>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                      type={field.type}
                      name={field.name}
                      id={field.name}
                      className={`${inputClassName(errors[field.name])} `}
                      placeholder={
                        field.name === "name"
                          ? "Name"
                          : field.name === "email"
                          ? "email@company.com"
                          : "123-45-678"
                      }
                      {...register(field.name, {
                        required: "This field is required",
                        pattern: {
                          value: field.pattern,
                          message:
                            field.name === "email"
                              ? "Invalid email"
                              : `Invalid ${field.name}`,
                        },
                      })}
                    />
                  </div>
                </div>
              ))}
              <div className="flex justify-end mt-[80px]">
                <button className="w-[120px] h-[50px] bg-blue-950 text-white rounded-[10px] hover:bg-blue-700 font-bold ">
                  Next Step
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default StepOne;
