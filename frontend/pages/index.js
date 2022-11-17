import Image from 'next/image'
import Link from 'next/Link'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import Navbar from './components/Navbar';

export default function Home(props) {

  const [Search, setSearch] = useState("")
  const handleChange = (str) => {
    setSearch(str); 
      
      document.querySelector('.tohide').className = 'tohide hidden'
    
  }
  return (
    <div className='md:h-[100vh] w-[100vw] absolute top-0 left-0 overflow-hidden '>
      <Navbar handleChange={handleChange}/>

<div className="hidden lg:flex bg w-[80vh] h-[80vh] rounded-[50%] absolute right-[-20vh] bottom-[-20vh] -z-10" ></div>
    <div className="hidden lg:flex bg w-[80vh] h-[80vh] rounded-[50%] absolute left-[-20vh] top-[-20vh] -z-10"></div>

    <div className='tohide'>
    <div
      className=" h-[90vh] w-[100vw] flex mt-[1vh]  md:mt-[10vh] z-40 justify-center flex-col items-center text-center"
    >
      <h1 className="headinger light text-blue-700 text-3xl  lg:text-6xl text-gradient text-bold">
        Welcome to Sri Satyavrat Industry
      </h1>

      <h1 className="mt-[5vh] text-gradient mb-4 text-lg text-center w-[90vw]  md:w-[45vw] leading-5">
        <p>Welcome To Sri Satyavrat Industry.It is company that offers organic, agricultaral, domestic and industrial products.This Company provides Services like Water tank or pipeline cleaning.Also it provides conseltancy.</p>
      </h1>
      <div className="btngrp">
      <button className="btn mx-2  shadow-blue-500/50 shadows text-white hover:scale-105 transition delay-150 duration-300 text-lg p-2 rounded-lg z-50" ><Link href="/Services"> Why Our Products</Link></button>
      <button className="btn mx-2 shadow-blue-500/50 shadows text-white hover:scale-105 transition delay-150 duration-300 text-lg p-2 rounded-lg "><Link href="/Product">View All Products</Link></button>
      </div>
    </div>
    </div>
    <div  className=" flex flex-wrap Tilt justify-center flex-col lg:flex-row items-center mt-[20vh] lg:mt-[10vh]">
      
        {props.products.map((item)=>{
          let i = item.attributes;
          if(i.Title.includes(Search)){
          return(
            <div key={i.Title}  className="cards   Tilt-inner lg:mx-[1vw]  overflow-hidden h-[90vh] lg:h-[60vh] my-[10vh] w-90vw lg:w-[30vw] flex-col bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-lg flex justify-center items-center text-center"  >

          <div className="img flex justify-center  items-center text-center overflow-hidden">
            <Image className="lg:h-[40vw] h-[40vh] " width='50vw' height='100vw' src={`/${i.Image.data && i.Image.data.attributes.name}`} alt="Image" />
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
    props: {products : products } 
  }
}