import React from 'react'

const product = () => {
  return (
    <div className='h-[100vh] w-[100vw] absolute top-0 left-0 overflow-hidden -z-10'>

<div class="hidden lg:flex bg w-[80vh] h-[80vh] rounded-[50%] absolute right-[-20vh] bottom-[-20vh] -z-10" ></div>
    <div class="hidden lg:flex bg w-[80vh] h-[80vh] rounded-[50%] absolute left-[-20vh] top-[-20vh] -z-10"></div>

        <div className="search h-[10vh] w-[100vw] flex text-center   lg:items-center md:flex-row flex-col">
      <h1 className="text-white  md:text-4xl font-bold pt-[20vh] uppercase pl-2 font-sans text-2xl">Products</h1>
      <input className="bg-gradient-to-br from-slate-800 to-slate-900  shadow-blue-500/20 rounded-lg shadow-md py-1 px-2 md:w-[30vw] lg:w-[15vw] md:absolute right-4" type="search" placeholder="search products" name="" id="" />
    </div>
    <div className=" flex justify-center flex-col lg:flex-row items-center ">
      
      <div className="cards  lg:mx-[1vw] overflow-hidden h-[90vh] lg:h-[60vh] mt-[5vw] w-90vw lg:w-[30vw] flex-col bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-lg flex justify-center items-center text-center" data-tilt data-tilt-max="50" data-tilt-transition data-tilt-speed="400" data-tilt-perspective="750" >

        <div className="img flex justify-center  items-center text-center overflow-hidden">
          <img className="lg:h-[15vw] h-[40vh] " src="/WhatsApp_Image_2021-06-28_at_11.03.26_AM-removebg-preview.png" alt="Image" />
        </div>
        <div className="price font-extralight text-4xl text-gradient">Svancom Dish Wash</div>
        <div className="content text-gradient p-0 m-0 text-[17px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quibusdam!</div>
        <div className="cols flex flex-col p-5 justify-center items-center text-center ">
          <div className="price font-extralight text-2xl  text-gradient"><span className="text-lg align-top font-extrabold">$</span>1.55</div>
          <div className="flex flex-row">
            <div className="btn p-2  hover:scale-105 transition delay-150 duration-300 ">View Product at Amazon</div>
            <div className="btn p-2  hover:scale-105 transition delay-150 duration-300 ">View Product at IndiaMart</div>
          </div>
        </div>
      </div>
      <div className="cards    lg:mx-[1vw] overflow-hidden h-[90vh] lg:h-[60vh] mt-[5vw] w-90vw lg:w-[30vw] flex-col bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-lg flex justify-center items-center text-center" data-tilt data-tilt-max="50" data-tilt-speed="400" data-tilt-perspective="750" >

        <div className="img flex justify-center  items-center text-center">
          <img className="lg:h-[15vw] h-[40vh] " src="/WhatsApp_Image_2021-06-28_at_11.03.27_AM-removebg-preview.png" alt="Image" />
        </div>
        <div className="price font-extralight text-4xl text-gradient">Svancom Kitchen Cleaner</div>
        <div className="content text-gradient p-0 m-0 text-[17px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quibusdam!</div>
        <div className="cols flex flex-col p-5 justify-center items-center text-center ">
          <div className="price font-extralight text-2xl  text-gradient"><span className="text-lg align-top font-extrabold">$</span>1.55</div>
          <div className="flex flex-row">
            <div className="btn p-2  hover:scale-105 transition delay-150 duration-300">View Product at Amazon</div>
            <div className="btn p-2  hover:scale-105 transition delay-150 duration-300">View Product at IndiaMart</div>
          </div>
        </div>
      </div> <div className="cards  lg:mx-[1vw] overflow-hidden h-[90vh] lg:h-[60vh] mt-[5vw] w-90vw lg:w-[30vw] flex-col bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-lg flex justify-center items-center text-center" data-tilt data-tilt-max="50" data-tilt-speed="400" data-tilt-perspective="750" >

        <div className="img flex justify-center  items-center text-center">
          <img className="lg:h-[15vw] h-[40vh] " data-tilt data-tilt-speed="400" data-tilt-perspective="2000" src="/WhatsApp_Image_2021-06-28_at_11.03.28_AM__1_-removebg-preview.png" alt="Image" />
        </div>
        <div className="price font-extralight text-4xl text-gradient">Svancom Optical Cleaner</div>
        <div className="content text-gradient p-0 m-0 text-[17px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quibusdam!</div>
        <div className="cols flex flex-col p-5 justify-center items-center text-center ">
          <div className="price font-extralight text-2xl  text-gradient"><span className="text-lg align-top font-extrabold">$</span>1.55</div>
          <div className="flex flex-row">
            <div className="btn p-2  hover:scale-105 transition delay-150 duration-300">View Product at Amazon</div>
            <div className="btn p-2  hover:scale-105 transition delay-150 duration-300">View Product at IndiaMart</div>
          </div>
        </div>
      </div>
    </div>

    <div className="fixed flex lg:hidden  bottom-4 right-4 bg-white p-2 rounded-3xl">
      <div className="gg-arrow-down "></div>
    </div>

    </div>
  )
}

export default product