

export default function Home(){
  return(
    <div className="min-h-screen  flex flex-col items-center justify-between p-4 ">
      <div>
        <p className="text-black ">||ElevenLabs</p>
      </div>

     <div className="flex  flex-col mt-10 w-full max-w-sm">
       <span className=" font-bold text-3xl text-center" >Create An Account</span>
        <button className="font-medium  border border-gray-300 py-2  bg-white-900 rounded-md mt-5  flex items-center justify-center hover:bg-gray-50 transition ">Sign up with Google </button> 
       </div>


      <div className="flex flex-col w-full max-w-sm -mt-20">
       <label className="text-sm font-medium"
       htmlFor="email-address">Email</label>
      <input 
      className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-blue-500"
      type="text" 
        id="email-address" 
      />

      <label 
      className="text-sm font-medium mt-4"
      htmlFor="password">Password</label>
      <input className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-blue-500" type="password" id="password"></input>
      <button className=" mt-6 bg-black text-white py-2 rounded-md font-medium hover:bg-gray-800 transition ">Sign up</button>
      <p className="mt-4 text-center text-gray-600">Already Registered <span className="text-blue-600 cursor-pointer hover:underline"> Sign in </span></p>
      </div>
      <footer className = "text-xs text-gray-500 text-center pb-6">
        By Continuing,You agree to our Terms of Service And privacy policy 
      </footer>
     

    </div>
  )
}