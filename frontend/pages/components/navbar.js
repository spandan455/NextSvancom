import React from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'

const navbar = ({handleChange}) => {

  const router = useRouter()
  // const [apis, setApis] = useState(`http://localhost:1337/api/products?filters[Title][$startsWith]=${search}&populate=*`)
  
  const [search, setSearch] = useState("")
  const [demo, setDemo] = useState("")
  const handleChanges = (event) => {
    let a = event.target.value
    
    setDemo(a)
    setSearch(a)
    handleChange(a)
    

  }
  return (
  
    <nav className="h-18 w-[100vw] flex items-center text-center z-50">
      <h1 className="text-white hidden sm:flex justify-start text-3xl lg:w-[10vw] md:w-[15vw] w-[50vw] p-2">
        SSI
      </h1>
      <div
        className="pages justify-center sm:justify-start  sm:flex-row-reverse sm:ml-auto w-[100vw] sm:w-[85vw] lg:w-[90vw] flex p-4 sm:mr-0 lg:mr-10 items-center text-center">
        <input className=" bg-slate-800  rounded-lg    py-1 px-2 md:w-[30vw] text-slate-300 lg:w-[15vw]  ml-2 lg:ml-4 z-20" onChange={handleChanges} value={search} placeholder="search products" name="val" id="val"  /> 
        <a className="a w-[20vw] sm:w-[15vw] lg:w-[10vw] text-white text-sm sm:text-lg hover:scale-105 transition delay-150 duration-300 ml-2 z-20 lg:ml-4" href="/services">Services</a>
        <a className="a w-[20vw] sm:w-[15vw] lg:w-[10vw] text-white text-sm sm:text-lg hover:scale-105 transition delay-150 duration-300 ml-2 z-20 lg:ml-4" href="/contact">Contact</a>
        <a className="a w-[20vw] sm:w-[15vw] lg:w-[10vw] text-white text-sm sm:text-lg hover:scale-105 transition delay-150 duration-300 ml-2 z-20 lg:ml-4" href="/product">Products</a>
        <a className="a w-[20vw] sm:w-[15vw] lg:w-[10vw] text-white text-sm sm:text-lg hover:scale-105 transition delay-150 duration-300 ml-2 z-20 lg:ml-4" href="/">Home</a>
    
      </div>

    </nav>
 
  )
}


export default navbar