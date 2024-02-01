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
function Experience() {
  return (
    <div className='text-white   lg:p-0 p-2  lg:w-[100%]  '>
      <div className="flex  lg:space-y-7 space-y-3 flex-col lg:p-0 p">
        <span className='relative lg:w-40  text-[25px] w-24 lg:text-3xl font-bold lg:after:border-[3px] after:border-[1px] after:border-blue-600  after:absolute after:w-full after:-bottom-2 after:left-0'>
          Experience
        </span>
        <span className='lg:text-[23px] text-[14px]'>
          //These are the technologies i've worked with
        </span>
        
      </div>

      <div className="flex flex-col w-[90%] mt-3 lg:mt-0   items-center justify-center lg:my-10 space-y-2 lg:space-y-8">


      <div className="flex flex-col   lg:flex-row lg:space-x-4 ">

     <div className=" flex">
     <div className="html cursor-pointer p-3 flex-col shadow-lg shadow-black w-24 lg:w-32 flex items-center justify-center h-20 lg:h-24 p-1">
          <span >
            <img src={html} alt="" className='lg:h-16 h-10' />
          </span>
          <span className=' text-[16px] lg:text-[20px]'>
          HTML
          </span>
        </div>
        <div className="css cursor-pointer flex-col shadow-lg shadow-black w-24 lg:w-32 flex items-center justify-center h-20 lg:h-24 p-1">
          <span >
            <img src={css} className='lg:h-16 h-10' alt="" />
          </span>
          <span className=' text-[16px] lg:text-[20px]'>
            CSS
          </span>
        </div>
     </div>


      <div className="flex ">
      <div className="js lg:cursor-pointer  flex-col  shadow-lg shadow-black w-24 lg:w-32 flex items-center justify-center h-20 lg:h-24 p-1">
          <span >
            <img src={js} className='lg:h-16 h-10' alt="" />
          </span>
          <span className=' text-[16px] lg:text-[20px]'>
            Java Script
          </span>
        </div>
      <div className="js lg:cursor-pointer  flex-col  shadow-lg shadow-black w-24 lg:w-32 flex items-center justify-center h-20 lg:h-24 p-1">
          <span >
            <img src={js} className='lg:h-16 h-10' alt="" />
          </span>
          <span className=' text-[16px] lg:text-[20px]'>
            Java Script
          </span>
        </div>
      </div>
      </div>


        <div className="lg:flex lg:space-x-4">
       <div className="flex">
       <div className="react cursor-pointer  flex-col shadow-lg shadow-black lg:w-32 w-24 flex items-center justify-center h-20 lg:h-24 p-1">
          <span >
            <img src={react} className='lg:h-16 h-10' alt="" />
          </span>
          <span className=' lg:text-[20px] text-[16px]'>
            React
          </span>
        </div>
       <div className="react cursor-pointer  flex-col shadow-lg shadow-black lg:w-32 w-24 flex items-center justify-center h-20 lg:h-24 p-1">
          <span >
            <img src={react} className='lg:h-16 h-10' alt="" />
          </span>
          <span className=' lg:text-[20px] text-[16px]'>
            React
          </span>
        </div>
       </div>


        <div className="flex">

        <div className="db cursor-pointer flex-col shadow-lg shadow-black w-24 lg:w-32 flex items-center justify-center h-20 lg:h-24 p-1">
          <span >
            <img src={db} className='lg:h-16 h-10' alt="" />
          </span>
          <span className=' text-[16px] lg:text-[20px]'>
            Mongo DB
          </span>
        </div>
        <div className="node cursor-pointer flex-col shadow-lg shadow-black w-24 lg:w-32 flex items-center justify-center h-20 lg:h-24 p-1">
          <span >
            <img src={node} className='lg:h-16 h-10' alt="" />
          </span>
          <span className=' text-[16px] lg:text-[20px]'>
            Node js
          </span>
        </div>
        </div>
        </div>


        <div className="flex lg:flex-row flex-col lg:space-x-4">
       <div className="flex">
       <div className="aws cursor-pointer flex-col shadow-lg shadow-black w-24 lg:w-32 flex items-center justify-center h-20 lg:h-24 p-1">
          <span className='bg-white' >
            <img src={aws} className='lg:h-14 h-10' alt="" />
          </span>
          <span className=' text-[16px] lg:text-[20px]'>
            AWS
          </span>
        </div>
        <div className="tailwind cursor-pointer flex-col shadow-lg shadow-black w-24 lg:w-32 flex items-center justify-center h-20 lg:h-24 p-1">
          <span >
            <img src={tailwind} className='lg:h-16 h-10' alt="" />
          </span>
          <span className=' text-[16px] lg:text-[20px]'>
            Tailwind
          </span>
        </div>
       </div>
      <div className="flex">
      <div className="bootstrap cursor-pointer flex-col shadow-lg shadow-black w-24 lg:w-32 flex items-center justify-center h-20 lg:h-24 p-1">
          <span className='' >
            <img src={bootstrap} className='lg:h-16 h-10' alt="" />
          </span>
          <span className=' text-[16px] lg:text-[20px]'>
            Bootstrap
           
          </span>
        </div>
        <div className="bootstrap cursor-pointer flex-col shadow-lg shadow-black w-24 lg:w-32 flex items-center justify-center h-20 lg:h-24 p-1">
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
