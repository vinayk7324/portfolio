import React from 'react'

function About() {
  return (
    <div className='text-white lg:p-2 lg:h-[60vh] space-y-4 flex flex-col items-center mt-2 lg:justify-center lg:space-y-20'>
      <div className="about">
        <span className= 'relative lg:text-3xl text-[23px] font-bold after:border-[1px] lg:after:border-[3px] after:border-blue-600 after:absolute after:w-full after:-bottom-1 after:left-0'>About</span>
      </div>
      <div className=" flex  relative  lg:flex-row flex-col justify-center  lg:space-x-32">
        <div className=" lg:text-right lg:w-60  lg:text-4xl  text-[30px] p-3 font-semibold">
          Hi. I'm vinay,nice to meet you. Please take a look around!

        </div>
          <div className=" lg:text-left lg:w-96 p-3 lg:text-[23px]">
            I am passionate about  building excellent software that improves the lives of those around me.I specialize in creating software for clients ranging from 
            individuals and small-bussinesses all the way to large enterprise corporations. what would do if you 
            had a software expert available at your fingerprints?

          </div>
          <div className="flex lg:absolute lg:-bottom-12 ">
            <a className=" companyLogo p-1  px-2 ms-2 mt-3 rounded-md bg-blue-800 font-semibold ">
              Download CV
            </a>
            
          </div>
      </div>
      
    </div>
  )
}

export default About
