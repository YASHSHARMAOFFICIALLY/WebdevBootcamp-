export default function Home(){
  return (
     <div className="flex  ">
      <div className="bg-gray-900 flex-1 min-h-screen flex flex-col text-white " >
        <div className="text-white cursor-pointer text-2xl mt-10 ml-10 ">
          ||ElevenLabs
        </div>
        <div>
          <h1 className="text-4xl font-bold  mt-15 ml-10">
            Contact out sales team
          </h1>
          <p  className="mt-10 ml-10 text-2xl space-y-4 ">
            <li className="flex flex-start">
              <img src="/rocket.svg" className="h-8 w-6"></img>
              Custom pricing and elevated concurrency
            </li>
             <li className="flex flex-start">
              <img src="/shield.svg" className="h-10 w-6"></img>
              Enterprise-grade security include SOC II,GDPR and HIPAA compliance
            </li>
             <li className="flex flex-start">
              <img src="/enterprise.svg" className="h-9 w-6"></img>
              Enterprise support and SLAs
            </li>
          </p>
          <p className="text-gray-500 text-2xl mt-12 ml-10">
            Trusted by 10,000+ leading businesses
          </p>
        </div>
        <div className="flex flex-row mt-20 ml-10 gap-5">
          <img src="cisco-white.svg"></img>
          <img src="nvidia-white.svg"></img>
          <img src = "deutsche.svg"></img>
           <img src = "walt.svg"></img>
        </div>
        {/* <div  className="text-2xl mt-30 ml-20">
          <img src="rating.png"> 4.5 stars and 1,059+ reviews</img>
         
        </div> */}
        <div className="flex items-center gap-3 mt-25 ml-20 text-2xl font-medium">
  
  <span>4.5 stars and 1,059+ reviews</span>
</div>
       
      </div>


      <div className="min-h-screen flex flex-col   flex-1">

        <div className="w-full max-w-sm  mt-40 ml-10">
          <h1 className="text-4xl font-medium">
            Contact sales form
          </h1>
          <p className="text-gray-600 mt-1 ">
            Please fill out the form below to get started
          </p>
        </div>

        <div className="flex flex-col  w-full max-w-140 mt-8 ml-10">
          <label 
          className="text-m font-light"
          htmlFor="email-address">Company Website </label>
          <input 
          className="mt-1 p-2 border border-gray-300 rounded-xl focus:outline-blue-500"
          type="text" 
          id="email-address" 
          placeholder="100xdev.com"
          />
          <label 
          className="text-m font-light mt-4"
          htmlFor="email-address"
          >Business Email </label>
          <input 
          className="mt-1 p-2 border border-gray-300 rounded-xl focus:outline-blue-500"
          type="text" 
          id="email-address" 
          placeholder="100xdev.com"
          />
        </div>
      </div>
     </div>


  )
 
}