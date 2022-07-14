import React from 'react'

const services = () => {
  return (
    <div className='h-[100vh] w-[100vw] absolute top-0 left-0 overflow-hidden -z-10'>
    
    <div class="hidden lg:flex bg w-[80vh] h-[80vh] rounded-[50%] absolute right-[-20vh] bottom-[-20vh]"></div>
    <div class="hidden lg:flex bg w-[80vh] h-[80vh] rounded-[50%] absolute left-[-20vh] top-[-20vh] -z-10"></div>

    <div class="main w-[100vw] overflow-hidden p-0 m-0 h-[100vh] flex flex-col justify-center items-center text-center">
        <h1 class="md:text-6xl text-3xl text-gradient lg:text-white">Services</h1>
        <div class=" flex flex-col  sm:flex-row z-30 relative top-[90vh] sm:top-[0]">
            
        <div class="cards lg:mx-[1vw] overflow-hidden h-[90vh] lg:h-[60vh] mt-[5vw] w-90vw lg:w-[30vw] flex-col bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-lg flex justify-center items-center text-center" data-tilt data-tilt-max="50" data-tilt-speed="400" data-tilt-perspective="750" >
    
            <div class="img flex justify-center  items-center text-center">
                
              <img class="lg:h-[13vw] h-[40vh] p-10 w-[70vw] sm:w-[17vw] rounded-lg"  src="/bag.png" alt="Image"/>            </div>
            
            <div class="price font-extralight text-4xl text-gradient">Products</div>

            <div class="content text-gradient p-2 m-0 text-[17px]">We Offer Agricultaral, Organic, Domestic and Industrial Products to our Customers with subdivision of our company like Goveshna, Varshaa , Svancom</div>

        </div>
        <div class="cards lg:mx-[1vw] overflow-hidden h-[90vh] lg:h-[60vh] mt-[5vw] w-90vw lg:w-[30vw] flex-col bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-lg flex justify-center items-center text-center" data-tilt data-tilt-max="50" data-tilt-speed="400" data-tilt-perspective="750" >
    
            <div class="img flex justify-center  items-center text-center">
              <img class="lg:h-[13vw] h-[40vh] p-10 w-[70vw] sm:w-[17vw] rounded-lg"  src="/clean.png" alt="Image"/>
            </div>
            
            <div class="price font-extralight text-4xl text-gradient">Cleaning</div>

            <div class="content text-gradient p-2 m-0 text-[17px]">We also offer Water Tank Cleaning or Pipe Line Cleaning to our Customers Which is very important for pure water and our health</div>

        </div>
        <div class="cards lg:mx-[1vw] overflow-hidden h-[90vh] lg:h-[60vh] mt-[5vw] w-90vw lg:w-[30vw] flex-col bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-lg flex justify-center items-center text-center" data-tilt data-tilt-max="50" data-tilt-speed="400" data-tilt-perspective="750" >
    
            <div class="img flex justify-center  items-center text-center">
              <img class="lg:h-[13vw] h-[40vh] p-10 w-[70vw] sm:w-[17vw] rounded-lg"  src="/service.png" alt="Image" />
            </div>
            
            <div class="price font-extralight text-4xl text-gradient">Conseltancy</div>

            <div class="content text-gradient p-2 m-0 text-[17px]">We Offer Conseltancy to our Customers . It is profitable for both sides because it improves knowledge of both sides. and it can also prevent to misunderstandings</div>

        </div>
    </div> 
    </div>

    
    </div>
  )
}

export default services