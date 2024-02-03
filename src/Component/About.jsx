import React from 'react'
import Abimg from '../assets/MyImgCopy.png'
import useTitle from '../DynamicTitle/useTitle'

function About() {
  useTitle("My Portfolio | About")
  return (
    <div className='text-white lg:pb-7  relative   lg:h-[60vh] space-y-4 flex flex-col items-center mt-2 lg:mt-0  '>
      <div className="about">
        <span className= 'relative lg:text-3xl text-[23px] font-bold after:border-[1px] lg:after:border-[3px] after:border-blue-600 after:absolute after:w-[150%] after:-bottom-1 after:-left-3'>About</span>
      </div>
      <div className="img  lg:top-0 lg:left-0 bg-blue-700 h-28 w-28 border  rounded-full overflow-hidden">
              <img src={Abimg} className=' w-full ' alt="" />


            </div>
      <div className=" flex   relative  lg:flex-row flex-col justify-center  lg:space-x-28">
        <div className=" lg:text-right lg:w-60  lg:text-4xl  text-[30px] p-3 font-semibold">
          Hi. I'm vinay,nice to meet you. Let's take a look around!

        </div>
          <div className=" lg:text-left lg:w-96 p-3 lg:text-[23px]">
            I am passionate about  building excellent software that improves the lives of those around me.I specialize in creating software for clients ranging from 
            individuals and small-bussinesses all the way to large enterprise corporations. what would do if you 
            had a software expert available at your fingerprints?

          </div>
          <div className="flex  lg:absolute lg:-bottom-9   ">
            <a className=" companyLogo p-1  px-2 ms-2  rounded-md bg-blue-800 font-semibold ">
              Download CV
            </a>
            
          </div>
      </div>
      
    </div>
  )
}

export default About
