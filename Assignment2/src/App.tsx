export default function Home(){
  return (
     <div className=" flex flex-col  md:flex-row min-h-screen ">
      <div className="bg-gray-900 flex-1  flex flex-col text-white p-10 md:p-16" >
        <div className="font-bold cursor-pointer text-2xl  ">
          ||ElevenLabs
        </div>
        <div>
          <h1 className="text-4xl font-bold  leading-tight md:text-5xl mt-10 md:mt-20">
            Contact out sales team
          </h1>
          <p  className="mt-10 space-y-6 ">
            <li className="flex items-center gap-4 text-xl ">
              <img src="/rocket.svg" className="h-6 w-6"></img>
              <span>Custom pricing and elevated concurrency</span>
            </li>
             <li className="flex items-center gap-4 text-xl ">
              <img src="/shield.svg" className="h-6 w-6"></img>
              <span>Enterprise-grade security include SOC II,GDPR and HIPAA compliance</span>
            </li>
             <li className="flex items-center gap-4 text-xl">
              <img src="/enterprise.svg" className="h-6 w-6"></img>
              <span>Enterprise support and SLAs</span>
            </li>
          </p>
          <p className="text-gray-500 text-xl mt-16 ">
            <span>Trusted by 10,000+ leading businesses</span>
          </p>
        </div>
        <div className=" flex flex-wrap items-center  mt-10  gap-8 opacity-70 ">
          <img src="cisco-white.svg" className="h-6"></img>
          <img src="nvidia-white.svg" className="h-6"></img>
          <img src = "deutsche.svg" className="h-6"></img>
           <img src = "walt.svg" className="h-6" ></img>
        </div>
        
        <div className="flex items-center gap-3 mt-auto  text-2xl font-medium">
          <span className="text-yellow-400">★★★★★</span>
          <span>4.5 stars and 1,059+ reviews</span>
        </div>  
      </div>


      <div className=" flex-1 flex  flex-col items-center justify-center p-10 bg-white -mt-40 ">

        <div className="w-full max-w-md  ">
          <h1 className="text-4xl font-medium text-gray-900 ">
            Contact sales form
          </h1>
          <p className="text-gray-600 mt-2 ">
            Please fill out the form below to get started
          </p>
       
        <div className="mt-10 space-y-6">
          <div className="flex flex-col  ">

          <label 
          className="text-sm font-medium text-gray-700 "
          htmlFor="email-address">Company Website </label>
          <input 
          className="mt-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          type="text" 
          id="email-address" 
          placeholder="100xdev.com"
          />
          </div>
          <div className="flex flex-col">
          <label 
          className="text-m font-medium mt-4 text-gray-700"
          htmlFor="email-address"
          >Business Email </label>
          <input 
          className="mt-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none "
          type="text" 
          id="emaill-address" 
          placeholder="100xdev@com"
          />
        </div>
        </div>
        
        
          <div className="flex items-center justify-between mt-12">
            <button className="px-8 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-all cursor-pointer">
              Next
            </button>

            {/* Stepped Progress Bar */}
            <div className="flex items-center gap-1 w-32">
              <div className="h-1 flex-1 bg-gray-900 rounded-full"></div>
              <div className="h-1 flex-1 bg-gray-200 rounded-full"></div>
              <div className="h-1 flex-1 bg-gray-200 rounded-full"></div>
          
          </div>
          
        </div>
      </div>
       </div>
     </div>
  ) 
}

