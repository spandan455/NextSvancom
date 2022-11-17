import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Navbar =({handleChange}) =>{

  const [Pro, setPro] = useState("")
  const handleChanges = (event) => {
    setPro(event.target.value)
    handleChange(event.target.value)
  }
  return (
  
    <nav className="h-18 w-[100vw] flex items-center text-center ">
      <h1 className="text-white hidden sm:flex justify-start text-3xl lg:w-[10vw] md:w-[15vw] w-[50vw] p-2" href='/'>
         <Link href='/'>SSI</Link>
      </h1>
      <div
        className="pages justify-center sm:justify-start  sm:flex-row-reverse sm:ml-auto w-[100vw] sm:w-[85vw] lg:w-[90vw] flex p-4 sm:mr-0 lg:mr-10 items-center text-center">
        <input className=" bg-slate-800  rounded-lg    py-1 px-2 md:w-[30vw] text-slate-300 lg:w-[15vw]  ml-2 lg:ml-4 z-20" onChange={handleChanges} value={Pro} placeholder="Search products" name="val" id="val"  /> 
        <h1 className="bg-gradient-to-tr from-green-400 to-blue-500 text-white p-[5px] rounded-[0.5rem] pointer  w-[20vw] sm:w-[15vw] lg:w-[10vw]  text-sm sm:text-lg hover:scale-105 transition delay-150 duration-300 ml-2 z-50 lg:ml-4" ><Link href="/services">Services</Link> </h1>
        <h1 className="bg-gradient-to-tr from-green-400 to-blue-500 text-white p-[5px] rounded-[0.5rem] pointer  w-[20vw] sm:w-[15vw] lg:w-[10vw]  text-sm sm:text-lg hover:scale-105 transition delay-150 duration-300 ml-2 z-50 lg:ml-4" ><Link href="/contact">Contact</Link> </h1>
        <h1 className="bg-gradient-to-tr from-green-400 to-blue-500 text-white p-[5px] rounded-[0.5rem] pointer  w-[20vw] sm:w-[15vw] lg:w-[10vw]  text-sm sm:text-lg hover:scale-105 transition delay-150 duration-300 ml-2 z-50 lg:ml-4" ><Link href="/product">Products</Link> </h1>
        <h1 className="bg-gradient-to-tr from-green-400 to-blue-500 text-white p-[5px] rounded-[0.5rem] pointer  w-[20vw] sm:w-[15vw] lg:w-[10vw]  text-sm sm:text-lg hover:scale-105 transition delay-150 duration-300 ml-2 z-50 lg:ml-4" ><Link href="/">Home</Link> </h1>
    
      </div>

    </nav>
 
  )
}


export default Navbar