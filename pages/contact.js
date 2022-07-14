import React from 'react'

const contact = () => {
  return (
    <div className='h-[100vh] w-[100vw] absolute top-0 left-0 overflow-hidden -z-10'>
    <div class="hidden lg:flex bg w-[80vh] h-[80vh] rounded-[50%] absolute right-[-20vh] bottom-[-20vh] -z-10" ></div>
    <div class="hidden lg:flex bg w-[80vh] h-[80vh] rounded-[50%] absolute left-[-20vh] top-[-20vh] -z-10"></div>

    <div
      className=" flex justify-center flex-col items-center text-center"
    >
    <div
    className="card  bg-gradient-to-bl from-slate-800 to-slate-900  h-[80vh] mt-[5vw] w-[90vw] sm:w-[40vw]  rounded-lg shadow-lg flex flex-col justify-center items-center text-center"
    
    >
    <h1 className="light pt-[5vh] text-gradient font-extralight text-2xl">Contact Us</h1>
    <form className="flex flex-col h-[100%] justify-center items-center text-center  ">
          <div
            className="inp flex justify-center items-center text-center flex-col space-y-2"
          >
            <input
              className="placeholder:text-slate-300 p-2 rounded-md   bg-slate-900 shadow-sm "
              placeholder="Enter Your Name"
              type="text"
            />
            <input
              className="placeholder:text-slate-300 p-2 rounded-md   bg-slate-900 shadow-sm "
              placeholder="Enter Your Email"
              type="email"
            />
            <input
              className="placeholder:text-slate-300 p-2 rounded-md   bg-slate-900 shadow-sm "
              placeholder="Enter Your Phone Number"
              type="number"
            />
            <input
              className="placeholder:text-slate-300 p-2 rounded-md   bg-slate-900 shadow-sm "
              placeholder="Enter Your Subject"
              type="text"
            />
            <textarea placeholder="Enter Your Content" className="placeholder:text-slate-300 w-[75%] p-2 rounded-md   bg-slate-900 shadow-sm "  id="" cols="30" rows="3"></textarea>
        </div>
        <button
          className=" btn shadow-xl  shadow-blue-500/50  hover:scale-105 transition delay-150 duration-300 text-lg px-4 py-2 mt-6 "
        >
          Submit
        </button>
        </form>
      </div>
    </div>

    </div>
  )
}

export default contact