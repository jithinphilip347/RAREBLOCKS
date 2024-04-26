export default function Hero() {
  return (
    <div className="h-[704px] relative top-[125px] left-[50px] ">
      <div className="w-[584px] h-[447px] gap-40">
        <div>
          <div>
            <h1 className="  font-montserrat text-7xl font-bold leading-[56.16px] text-left text-black">
              A special credit card made for Developers
            </h1>
            <p className=" relative top-20 font-montserrat text-sm font-semibold leading-5 text-left text-gray-700">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the product.
            </p>
          </div>
        </div>
      
      <div className="relative top-32 rounded-lg border border-gray-200  bg-gray-50">
        <div className="w-[207px] h-[53px] relative top-[15px] left-[20px]  gap-[57.25rem] ">
        <input className="w-144 h-21 gap-0 font-montserrat text-sm font-semibold leading-5 text-left text-gray-700 bg-gray-50" id="email" placeholder="Enter email address" />
          <div className=" py-3 gap-2 rounded-lg  bg-black relative bottom-[33px]  left-[335px]">
            <p className=" h-17 gap-0  font-montserrat text-sm font-semibold leading-[17.07px] text-center text-gray-100 hover:cursor-pointer">Create free account</p>
          </div>
        </div>
      </div>

      <div className=" flex items-center relative top-40 w-[439.5px] h-[38px] gap-6">
        <div className=" flex items-center w-[175px] h-[38px] gap-3">
          <p className="w-84 h-34  font-montserrat text-2xl font-semibold leading-34 text-left text-black">2943</p>
          <p className="w-79 h-38 font-montserrat text-base font-semibold leading-[19.2px] text-left text-gray-600">Cards Delivered</p>
        </div>
        <div className="flex items-center w-[196px] h-[38px] gap-3">
          <p className="w-87 h-34  font-montserrat text-2xl font-semibold leading-34 text-left text-black">$1M+</p>
          <p className="w-97 h-38  font-montserrat text-base font-semibold leading-[19.2px] text-left text-gray-600">Transaction Completed</p>
        </div>
      </div>
      <div className="relative ">
     
      </div>
      <div className="absolute bottom-[34px] left-[689px]">
      <img src="/image-2.png" alt="" className="w-24 h-24 relative left-[317px] top-8" />
       <img src="/image-1.jpeg" alt="" className="w-[461px] h-[488px]    rounded-md"/>
       <div className="w-[309px] h-48 relative bottom-[224px] left-[33px] rounded-2xl bg-white">
              <h2 className=" relative  right-4 top-2 uppercase font-plus-jakarta-sans text-[14.01px] font-bold  text-right"> <span className="text-red-500">/</span>rareblocks</h2>
              <p className=" relative left-6 uppercase font-plus-jakarta-sans text-[11px] font-bold top-28 text-black">Esther Howard</p>
              <p className="relative left-6  uppercase opacity-50 font-plus-jakarta-sans text-[12px] top-[116px] font-bold  text-left text-gray-900">RJ Development INC</p>
              <h1 className="w-[78.78px] h-[25.56px] relative  left-56  text-blue-600 font-bold top-[87px]  text-[28.01px]">VISA</h1>
              <div className="w-12 h-16 relative bottom-9 left-8 transform rotate-90 bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 rounded-lg">
              <div className="w-6 h-5 relative top-[42px] left-[12px] transform rotate-90 border-t-2 border-l-2 border-b-2 rounded-l-md border-black	">
              <div className="w-6 h-5 relative bottom-[2px] right-[42px] transform rotate-60 border-t-2 border-r-2 border-b-2 rounded-r-md border-black	">
              </div>
             </div>
             <div className="w-[9.63px] relative top-[26px] left-[5px] transform rotate-90">|</div>
             <div className="w-[9.63px] relative bottom-[43px] left-[5px] transform rotate-90">|</div>
             <div className="w-[9.63px] relative bottom-[67px] left-[37px] transform rotate-90">|</div>
             <div className="w-[9.63px] relative bottom-[46px] left-[37px] transform rotate-90">|</div>
             <div className="  relative bottom-[98px] left-[17px] transform rotate-135">|</div>
             <div className="  relative bottom-[122px] left-[26px] transform rotate-135">|</div>
             <hr className="  border-b border-black w-6 transform rotate-90 relative bottom-[154px] left-[12px]"></hr>
             <hr className="border-b border-black  w-6 transform rotate-90 relative bottom-[115px] left-[12px]"></hr>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
}
