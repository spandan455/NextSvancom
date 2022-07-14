import React from 'react'

const navbar = () => {
  return (
  
    <nav class="h-18 w-[100vw] flex items-center text-center">
      <h1 class="text-white hidden sm:flex justify-start text-3xl lg:w-[10vw] md:w-[15vw] w-[50vw] p-2">
        SSI
      </h1>
      <div
        class="pages justify-center sm:justify-start  sm:flex-row-reverse sm:ml-auto w-[100vw] sm:w-[85vw] lg:w-[90vw] flex p-4 sm:mr-0 lg:mr-10 items-center text-center">
        <a class="a w-[20vw] sm:w-[15vw] lg:w-[10vw] text-white text-sm sm:text-lg hover:scale-105 transition delay-150 duration-300 ml-2 lg:ml-4" href="/services">Services</a>
        <a class="a w-[20vw] sm:w-[15vw] lg:w-[10vw] text-white text-sm sm:text-lg hover:scale-105 transition delay-150 duration-300 ml-2 lg:ml-4" href="/contact">Contact</a>
        <a class="a w-[20vw] sm:w-[15vw] lg:w-[10vw] text-white text-sm sm:text-lg hover:scale-105 transition delay-150 duration-300 ml-2 lg:ml-4" href="/product">Products</a>
        <a class="a w-[20vw] sm:w-[15vw] lg:w-[10vw] text-white text-sm sm:text-lg hover:scale-105 transition delay-150 duration-300 ml-2 lg:ml-4" href="/">Home</a>
      </div>

    </nav>
 
  )
}

export default navbar