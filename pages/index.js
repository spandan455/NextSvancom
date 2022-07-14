import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='h-[100vh] w-[100vw] absolute top-0 left-0 overflow-hidden -z-10'>

<div class="hidden lg:flex bg w-[80vh] h-[80vh] rounded-[50%] absolute right-[-20vh] bottom-[-20vh] -z-10" ></div>
    <div class="hidden lg:flex bg w-[80vh] h-[80vh] rounded-[50%] absolute left-[-20vh] top-[-20vh] -z-10"></div>

    <div>
    <div
      className="cursor-pointer h-[90vh] w-[100vw] flex m-0 justify-center flex-col items-center text-center"
    >
      <h1 className="headinger light text-blue-700 text-3xl lg:text-6xl text-gradient text-bold">
        Welcome to Sri Satyavarti Industry
        
      </h1>

      <h1 className="mt-[5vh] text-gradient mb-4 text-lg text-center w-[45vw] leading-5">
        <p>Welcome To Sri Satyavarti Industry.It is company that offers organic, agricultaral, domestic and industrial products.This Company provides Services like Water tank or pipeline cleaning.Also it provides conseltancy.</p>
      </h1>
      <div className="btngrp">
       
        <button className="btn mx-2 shadow-blue-500/50 shadows text-white hover:scale-105 transition delay-150 duration-300 text-lg p-2 rounded-lg"><a href="./services.html">Why Our Products</a></button>
        <button className="btn mx-2 shadow-blue-500/50 shadows text-white hover:scale-105 transition delay-150 duration-300 text-lg p-2 rounded-lg"><a href="./team.html">Our Team</a></button>
      </div>
    </div>
    </div>


    </div>

  )
}
