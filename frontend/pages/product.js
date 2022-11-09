import React, { useEffect } from 'react'
import { useState } from 'react';
import { useRouter } from 'next/router';
import Tilt from "react-tilt";
import Navbar from "./components/navbar"

const product = (props) => {
  const router = useRouter()
  const [search, setSearch] = useState("")
  // const [apis, setApis] = useState(`http://localhost:1337/api/products?filters[Title][$startsWith]=${search}&populate=*`)
  
  
  const handleChange = (str) => {
    setSearch(str); 

  }
  //   const router =  useRouter()
  // const handlePage = (search)=> {
  //   if (process.browser){
  //   router.push(`http://localhost:3000/search/${search}`)
  //   }
  // }
  
 

  return (
    <div className=' w-[100vw] absolute top-0 left-0 overflow-x-hidden  '>
      <Navbar className='overflow-hidden' handleChange={handleChange}/>

      <div className="hidden lg:flex bg w-[80vh] h-[80vh] rounded-[50%] absolute right-[-20vh] bottom-[-20vh] -z-20" ></div>
      <div className="hidden lg:flex bg w-[80vh] h-[80vh] rounded-[50%] absolute left-[-20vh] top-[-20vh] -z-20"></div>
      <form method='post' className="search h-[10vh] w-[100vw] flex text-center   lg:items-center md:flex-row flex-col">
        <h1 className="text-white  md:text-4xl font-bold pt-[20vh] uppercase pl-2 font-sans text-2xl">Products</h1>
        {/* <input className=" bg-slate-800  rounded-lg    py-1 px-2 md:w-[30vw] text-slate-300 lg:w-[15vw]  ml-2 lg:ml-4 z-20" onChange={handleChange} value={search} placeholder="search products" name="val" id="val"  /> */}
      </form>
      <div options={{ max : 50 }} className=" flex flex-wrap Tilt justify-center flex-col lg:flex-row items-center mt-[20vh] lg:mt-[10vh]">
      
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

    <div className="fixed flex lg:hidden  bottom-4 right-4 bg-white p-2 rounded-3xl">
      <div className="gg-arrow-down "></div>
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


export default product