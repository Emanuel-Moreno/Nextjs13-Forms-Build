import React from 'react'
import Image from 'next/image';
function pageFive() {
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
              <section className="w-[450px] pt-[165px]  ">
                            <div className='flex justify-center mb-[35px]'>
                            <Image src="/img/icon-thank-you.svg" alt="logo" width='80'  height='80'/>
                            </div>

                            <p className=' text-blue-950 text-center text-[25px] font-bold mb-[17px]'>
                            Thank you!
                            </p>
                            <p className=' text-gray-400 text-center'>Thanks for confirming your subscription! We hope you have fun 
          using our platform. If you ever need support, please feel free 
          to email us at support@Nextjs-Form.com.</p>
              </section>
            </main>
          </div>
        </>
      );
    }
    

export default pageFive