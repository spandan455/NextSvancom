import React from 'react'

import { useState } from 'react';

import Navbar from "./components/navbar"

const services = (props) => {

  const [search, setSearch] = useState("")
  const handleChange = (str) => {
    setSearch(str); 
      
      document.querySelector('.tohide').className = 'tohide hidden'
      document.querySelector('.ado').className = 'ado flex flex-wrap Tilt justify-center flex-col lg:flex-row items-center mt-[20vh] lg:mt-[10vh]'
    
     
    
    
  }
  return (
    <div className=' w-[100vw] absolute top-0 left-0 lg:overflow-hidden  '>
            <Navbar className='overflow-hidden' handleChange={handleChange}/>
    
    <div className="hidden -z-20 lg:flex bg w-[80vh] h-[80vh] rounded-[50%] absolute right-[-20vh] bottom-[-20vh]"></div>
    <div className="hidden -z-20 lg:flex bg w-[80vh] h-[80vh] rounded-[50%] absolute left-[-20vh] top-[-20vh] "></div>

    <div className="main tohide w-[100vw] overflow-hidden p-0 m-0 h-[100vh] flex flex-col justify-center items-center text-center">
        <h1 className="md:text-6xl text-3xl text-gradient lg:text-white">Services</h1>
        <div className=" flex flex-col  lg:flex-row z-30 relative top-[90vh] lg:top-0">
            
        <div className="cards mx-[1vw]  h-[90vh] lg:h-[60vh] mt-[5vw] w-90vw lg:w-[30vw] flex-col bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-lg flex justify-center items-center text-center" data-tilt data-tilt-max="50" data-tilt-speed="400" data-tilt-perspective="750" >
    
            <div className="img flex justify-center  items-center text-center">
                
              <img className="lg:h-[13vw] h-[40vh] p-10 w-[70vw] md:w-[30vw] lg:w-[17vw] rounded-lg"  src="/bag.png" alt="Image"/>            </div>
            
            <div className="price font-extralight text-4xl text-gradient">Products</div>

            <div className="content text-gradient p-2 m-0 text-[17px]">We Offer Agricultaral, Organic, Domestic and Industrial Products to our Customers with subdivision of our company like Goveshna, Varshaa , Svancom</div>

        </div>
        <div className="cards mx-[1vw]  h-[90vh] lg:h-[60vh] mt-[5vw] w-90vw lg:w-[30vw] flex-col bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-lg flex justify-center items-center text-center" data-tilt data-tilt-max="50" data-tilt-speed="400" data-tilt-perspective="750" >
    
            <div className="img flex justify-center  items-center text-center">
              <img className="lg:h-[13vw] h-[40vh] p-10 w-[70vw] md:w-[30vw] lg:w-[17vw] rounded-lg"  src="/clean.png" alt="Image"/>
            </div>
            
            <div className="price font-extralight text-4xl text-gradient">Cleaning</div>

            <div className="content text-gradient p-2 m-0 text-[17px]">We also offer Water Tank Cleaning or Pipe Line Cleaning to our Customers Which is very important for pure water and our health</div>

        </div>
        <div className="cards mx-[1vw]  h-[90vh] lg:h-[60vh] mt-[5vw] w-90vw lg:w-[30vw] flex-col bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-lg flex justify-center items-center text-center" data-tilt data-tilt-max="50" data-tilt-speed="400" data-tilt-perspective="750" >
    
            <div className="img flex justify-center  items-center text-center">
              <img className="lg:h-[13vw] h-[40vh] p-10 w-[70vw] md:w-[30vw] lg:w-[17vw] rounded-lg"  src="/service.png" alt="Image" />
            </div>
            
            <div className="price font-extralight text-4xl text-gradient">Conseltancy</div>

            <div className="content text-gradient p-2 m-0 text-[17px]">We Offer Conseltancy to our Customers . It is profitable for both sides because it improves knowledge of both sides. and it can also prevent to misunderstandings</div>

        </div>
    </div> 
    </div>

    <div options={{ max : 50 }} className=" hidden flex-wrap ado Tilt justify-center flex-col lg:flex-row items-center mt-[20vh] lg:mt-[10vh]">
      
      {props.products.map((item)=>{
        let i = item.attributes;
        if(i.Title.includes(search)){
        return(
          <div key={i.Title}  className="cards   Tilt-inner lg:mx-[1vw]  overflow-hidden h-[90vh] lg:h-[60vh] my-[10vh] w-90vw lg:w-[30vw] flex-col bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-lg flex justify-center items-center text-center"  >

        <div className="img flex justify-center  items-center text-center overflow-hidden">
          <img className="lg:h-[15vw] h-[40vh] " src={`/${i.Image.data && i.Image.data.attributes.name}`} alt="Image" />
        </div>
        <div className="price font-extralight text-4xl text-gradient">{i.Title}</div>
        <div className="content text-gradient p-0 m-0 text-[17px]">{i.Description}</div>
        <div className="cols flex flex-col p-5 justify-center items-center text-center ">
          <div className="price font-extralight text-2xl  text-gradient"><span className="text-lg align-top font-extrabold">₹</span>{i.Price}</div>
          <div className="flex flex-row">
          <div className="btn p-2  hover:scale-105 transition delay-150 duration-300 z-50">View Product</div>
            <div className="btn p-2  hover:scale-105 transition delay-150 duration-300 z-50 " >Buy product</div>
            </div>
        </div>
    </div>
            )}
      })}
  
  </div>
    </div>
  )
}

export async function getServerSideProps() {


  let link = `http://localhost:1337/api/products?filters[Title][$startsWith]=&populate=*`
  let headers = {Authorization : "Bearer fec346192666a76c4d4493ba87d1b10b8e84e2ba76f96b768ff4473aec6acde0d8d16521f559fa5c57db58f62b3dc50caf34de696a820d0b823d903320abd7632a197c1a9e4c401a56c48860e3bcc7b3d25179ff191432b435a836c91c089224731fc74a780c9d63acbe07b312d6818c09df333789048ed0f2b87748bf648db9"}
  let a = await fetch(link , {headers : headers})
  let productss = await a.json()
  let products = productss.data;
  // console.log(products)
  
  return {
    props: {products : products } 
  }
}

export default services