import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import Navbar from "./components/Navbar"
import Link from 'next/Link';

const Product = (props) => {
  const [Search, setSearch] = useState("")
  // const [apis, setApis] = useState(`${process.env.ST_URL}api/products?filters[Title][$startsWith]=${Search}&populate=*`)
  
  
  const handleChange = (str) => {
    setSearch(str); 

  }
  //   const router =  useRouter()
  // const handlePage = (Search)=> {
  //   if (process.browser){
  //   router.push(`${process.env.URL}Search/${Search}`)
  //   }
  // }
  
 

  return (
    <div className=' w-[100vw] absolute top-0 left-0 overflow-x-hidden  '>
      <Navbar className='overflow-hidden' handleChange={handleChange}/>

      <div className="hidden lg:flex bg w-[80vh] h-[80vh] rounded-[50%] absolute right-[-20vh] bottom-[-20vh] -z-20" ></div>
      <div className="hidden lg:flex bg w-[80vh] h-[80vh] rounded-[50%] absolute left-[-20vh] top-[-20vh] -z-20"></div>
      <form method='post' className="Search h-[10vh] w-[100vw] flex text-center   lg:items-center md:flex-row flex-col">
        <h1 className="text-white  md:text-4xl font-bold pt-[20vh] uppercase pl-2 font-sans text-2xl">Products</h1>
        {/* <input className=" bg-slate-800  rounded-lg    py-1 px-2 md:w-[30vw] text-slate-300 lg:w-[15vw]  ml-2 lg:ml-4 z-20" onChange={handleChange} value={Search} placeholder="Search products" name="val" id="val"  /> */}
      </form>
      <div  className=" flex flex-wrap  justify-center flex-col lg:flex-row items-center mt-[20vh] lg:mt-[10vh]">
      
        {props.products.map((item)=>{
          let i = item.attributes;
          if(i.Title.includes(Search)){
          return(
            <div key={i.Title}  className="cards    lg:mx-[1vw]  overflow-hidden h-[90vh] lg:h-[60vh] my-[10vh] w-90vw lg:w-[30vw] flex-col bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-lg flex justify-center items-center text-center"  >

          <div className="img flex justify-center  items-center text-center overflow-hidden">
            <Image className="lg:h-[15vw] h-[40vh] " width='50vw' height='100vw' src={`/${i.Image.data && i.Image.data.attributes.name}`} alt="Image" />
          </div>
          <div className="price font-extralight text-4xl text-gradient">{i.Title}</div>
          <div className="content text-gradient p-0 m-0 text-[17px]">{i.Description}</div>
          <div className="cols flex flex-col p-5 justify-center items-center text-center ">
            <div className="price font-extralight text-2xl  text-gradient"><span className="text-lg align-top font-extrabold">₹</span>{i.Price}</div>
            <div className="flex flex-row">
            <div className="btn p-2  hover:scale-105 transition delay-150 duration-300 z-50"><Link href={i.linkToIndiaMart}>Buy on Indiamart</Link> </div>
              <div className="btn p-2  hover:scale-105 transition delay-150 duration-300 z-50 " ><Link href={i.linkToAmazon}>Buy on Amazon</Link> </div>
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


  let link = `${process.env.ST_URL}/api/products?populate=*`
  let headers = {Authorization : process.env.ST_CODE}
  let a = await fetch(link , {headers : headers})
  let productss = await a.json()
  let products = productss.data;
  // console.log(products)
  
  return {
    props: {products : products , fallback: false} 
  }
}


export default Product