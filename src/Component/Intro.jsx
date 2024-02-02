import React from 'react'
import Myimg from '../assets/MyImg.png'
import { NavLink, Outlet } from 'react-router-dom'
import { usePortfolio } from '../context/PortfolioContext'

function Intro() {
    const {IntroVisibility,setIntroVisibility} =usePortfolio();
   
  return (
    <div className="Intro lg:mt-0 mt-20   lg:w-[80%]  lg:ps-10  overflow-y-hidden   border-red-600 flex justify-between items-center  ">
    <div className="flex space-y-6  flex-col   p-4 lg:rounded-md IntroShadow lg:IntroShadow w-[100vw]  lg:w-[70%] ">
        <Outlet/>
     <div className={`space-y-5 ${IntroVisibility==false?"hidden":""} p-4`}  >
     <div className=" flex flex-col  space-y-3">
        <span className='text-red-600 text-[15px]  lg:text-[23px]'>Hi, my name is</span>
        <span className='text-white lg:text-5xl text-3xl font-semibold'>Vinay Kumar</span>
        <span className='text-slate-600 lg:text-5xl text-3xl font-bold'>I'm a Full Stack Developer.</span>
        <span className='text-gray-400 font-semibold text-[15px] lg:text-[23px]'>I'm a full stack developer specializing in building (and occasionally designing) exceptional
          digital experience.  Currently , I'm focused on building responsive full-stack web application.

        </span>
      </div>
      <div className=" ">
        <NavLink to={"/work"} onClick={()=>{setIntroVisibility(false)}} className='lg:hover:scale-[1.02]  w-32 transition-all duration-200 cursor-pointer border  rounded-md lg:p-2 px-3 p-1 flex  items-center space-x-2 text-white '>
          <span className=''>View Work</span>
          <span className="material-symbols-rounded">
            arrow_right_alt
          </span>

        </NavLink>
      </div>
     </div>

    </div>
    <div className="img  flex items-center hidden lg:block justify-center  jg:w-[300px]   border-green-600">
      <img src={Myimg} alt="profile" className=' bg-blue-600  ImgShadow shadow-white rounded-tl-full mb-24 ' />
    </div>
  </div>
  )
}

export default Intro