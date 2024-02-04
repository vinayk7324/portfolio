import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import js from '../assets/js.png'
import db from '../assets/db.png'
import node from '../assets/nodejs.png'
import aws from '../assets/aws.png'
import tailwind from '../assets/tailwind.png'
import bootstrap from '../assets/bootstrap.png'
import useTitle from '../DynamicTitle/useTitle'
function Experience() {
  useTitle("My Portfolio | Experience")
  return (
    <div className='text-white flex flex-col items-center lg:items-start  lg:p-0 p-2  w-[100%]  '>
      <div className="flex   lg:space-y-3 space-y-3 flex-col lg:p-0 p">
        <span className='relative lg:w-40   text-[25px] w-24 lg:text-[23px] font-bold lg:after:border-[2px] after:border-[1px] after:border-blue-600  after:absolute after:w-[160%] lg:after:w-[100%] after:-bottom-1 after:-left-4'>
          Experience
        </span>
        <span className='lg:text-[20px] text-[14px]'>
          //These are the technologies i've worked with
        </span>
        
      </div>

      <div className="flex flex-col    w-[100%] mt-3 lg:mt-2 lg:w-full   lg:my-10  lg:space-y-5">


      <div className="flex flex-col    lg:flex-row ">

     <div className=" flex   h-28 lg:h-52  space-x-2 w-full lg:w-[50%] p-1">
     <div className="html  cursor-pointer  flex-col    w-[50%]  transition-all duration-300 lg:hover:shadow-lg shadow-md  shadow-blue-500 border  border-blue-500 lg:hover:shadow-blue-500 rounded-md flex items-center w-[50%] justify-center   p-1">
          <span >
            <img src={html} alt="" className='lg:h-16 h-12' />
          </span>
          <span className=' text-[16px] lg:text-[20px]'>
          HTML
          </span>
        </div>
        <div className="css cursor-pointer flex-col transition-all duration-300 lg:hover:shadow-lg shadow-md  shadow-blue-500 border border-blue-500 lg:hover:shadow-blue-500 rounded-md  w-[50%]  flex items-center justify-center   p-1">
          <span >
            <img src={css} className='lg:h-16 h-10' alt="" />
          </span>
          <span className=' text-[16px] lg:text-[20px]'>
            CSS
          </span>
        </div>
     </div>


      <div className="flex h-28 lg:w-[50%] lg:h-52 p-1 space-x-2 ">
      <div className="js lg:cursor-pointer flex-col  shadow-lgtransition-all duration-300 lg:hover:shadow-lg shadow-md  shadow-blue-500 border  border-blue-500 lg:hover:shadow-blue-500 rounded-md w-[50%]  flex items-center justify-center   p-1">
          <span >
            <img src={js} className='lg:h-16 h-10' alt="" />
          </span>
          <span className=' text-[16px] lg:text-[20px]'>
            Java Script
          </span>
        </div>
      <div className="js lg:cursor-pointer  flex-col  transition-all duration-300 lg:hover:shadow-lg shadow-md  shadow-blue-500 border  border-blue-500 lg:hover:shadow-blue-500 rounded-md w-[50%]  flex items-center justify-center   p-1">
          <span >
            <img src={js} className='lg:h-16 h-10' alt="" />
          </span>
          <span className=' text-[16px] lg:text-[20px]'>
            Java Script
          </span>
        </div>
      </div>
      </div>


        <div className="lg:flex ">


       <div className="flex h-28 lg:w-[50%] w-full p-1 space-x-2  lg:h-52">
       <div className="react cursor-pointer  flex-col transition-all duration-300 lg:hover:shadow-lg shadow-md  shadow-blue-500 border  border-blue-500 lg:hover:shadow-blue-500 rounded-md  w-[50%] flex items-center justify-center   p-1">
          <span >
            <img src={react} className='lg:h-16 h-10' alt="" />
          </span>
          <span className=' lg:text-[20px] text-[16px]'>
            React
          </span>
        </div>
       <div className="react cursor-pointer  flex-col transition-all duration-300 lg:hover:shadow-lg shadow-md  shadow-blue-500 border  border-blue-500 lg:hover:shadow-blue-500 rounded-md  w-[50%] flex items-center justify-center  p-1">
          <span >
            <img src={react} className='lg:h-16 h-10' alt="" />
          </span>
          <span className=' lg:text-[20px] text-[16px]'>
            React
          </span>
        </div>
       </div>


        <div className="flex h-28 lg:h-52 p-1 space-x-2 lg:w-[50%]">

        <div className="db cursor-pointer flex-col transition-all duration-300 lg:hover:shadow-lg shadow-md  shadow-blue-500 border  border-blue-500 lg:hover:shadow-blue-500 rounded-md w-[50%]  flex items-center justify-center    p-1">
          <span >
            <img src={db} className='lg:h-16 h-10' alt="" />
          </span>
          <span className=' text-[16px] lg:text-[20px]'>
            Mongo DB
          </span>
        </div>
        <div className="node cursor-pointer flex-col transition-all duration-300 lg:hover:shadow-lg shadow-md  shadow-blue-500 border  border-blue-500 lg:hover:shadow-blue-500 rounded-md w-[50%]  flex items-center justify-center    p-1">
          <span >
            <img src={node} className='lg:h-16 h-10' alt="" />
          </span>
          <span className=' text-[16px] lg:text-[20px]'>
            Node js
          </span>
        </div>
        </div>
        </div>


        <div className="flex lg:flex-row flex-col">
       <div className="flex lg:h-52 lg:w-[50%] p-1 space-x-2 h-28">
       <div className="aws cursor-pointer flex-col transition-all duration-300 lg:hover:shadow-lg shadow-md  shadow-blue-500 border  border-blue-500 lg:hover:shadow-blue-500 rounded-md w-[50%]  flex items-center justify-center    p-1">
          <span className='bg-white' >
            <img src={aws} className='lg:h-14 h-10' alt="" />
          </span>
          <span className=' text-[16px] lg:text-[20px]'>
            AWS
          </span>
        </div>
        <div className="tailwind cursor-pointer flex-col transition-all duration-300 lg:hover:shadow-lg shadow-md  shadow-blue-500 border  border-blue-500 lg:hover:shadow-blue-500 rounded-md w-[50%]  flex items-center justify-center    p-1">
          <span >
            <img src={tailwind} className='lg:h-16 h-10' alt="" />
          </span>
          <span className=' text-[16px] lg:text-[20px]'>
            Tailwind
          </span>
        </div>
       </div>
      <div className="flex h-28 lg:w-[50%] space-x-2  lg:h-52 p-1">
      <div className="bootstrap cursor-pointer flex-col transition-all duration-300 lg:hover:shadow-lg shadow-md  shadow-blue-500 border  border-blue-500 lg:hover:shadow-blue-500 rounded-md w-[50%]  flex items-center justify-center     p-1">
          <span className='' >
            <img src={bootstrap} className='lg:h-16 h-10' alt="" />
          </span>
          <span className=' text-[16px] lg:text-[20px]'>
            Bootstrap
           
          </span>
        </div>
        <div className="bootstrap cursor-pointer flex-col transition-all duration-300 lg:hover:shadow-lg shadow-md  shadow-blue-500 border  border-blue-500 lg:hover:shadow-blue-500 rounded-md w-[50%]  flex items-center justify-center     p-1">
          <span className='' >
            <img src={bootstrap} className='lg:h-16 h-10' alt="" />
          </span>
          <span className=' text-[16px] lg:text-[20px]'>
            Bootstrap
           
          </span>
        </div>
      </div>
        </div>




      </div>
    </div>
  )
}

export default Experience
