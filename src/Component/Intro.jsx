import React from 'react'
import Myimg from '../assets/MyImg.png'
import Iimg from '../assets/MyImgCopy.png'
import { NavLink, Outlet } from 'react-router-dom'
import { usePortfolio } from '../context/PortfolioContext'

function Intro() {
  const { IntroVisibility, setIntroVisibility, Scrollbtn } = usePortfolio();
  console.log(IntroVisibility);
  return (
    <div className="Intro lg:mt-0 mt-20  w-full lg:w-[85%]   lg:h-[100%] lg:ps-10   overflow-y-hidden   lg:py-8  border-red-600 lg:flex justify-between items-center lg:items-start  ">
      <div className="flex space-y-6     lg:ms-4  lg:mt-40  flex-col overflow-scroll company overflow-x-hidden max-h-[73%]    lg:p-6  lg:rounded-md IntroShadow lg:IntroShadow w-[100%]  lg:w-[72%] ">

        <div className={`space-y-5 lg:flex lg:flex-col  ${!IntroVisibility ? "lg:hidden" : ""}  p-4`}  >
          <div className=" lg:hidden flex justify-center">
            <div className=' h-24 w-24 rounded-full overflow-hidden bg-blue-600    border-[4px]'>
              <img src={Iimg} className='w-full' alt="" />
            </div>
          </div>

          <div className=" flex flex-col   space-y-3">
            <span className='text-red-600 text-[15px]  lg:text-[18px]'>Hi, my name is</span>
            <span className='text-white lg:text-[40px] text-3xl font-semibold'>Vinay Kumar</span>
            <span className='text-slate-600 lg:text-[40px] text-3xl font-bold'>I'm a Full Stack Developer.</span>
            <span className='text-gray-400 lg:flex  lg:text-just font-semibold text-[15px] lg:text-[16px]'>
              <span className='w-80'>I'm a full stack developer specializing in building (and occasionally designing) exceptional
                digital experience.  Currently , I'm focused on building responsive full-stack web application.




              </span>


            </span>
          </div>
          <div className=" lg:flex lg:justify-between ">
            <NavLink to={"work"} onClick={() => { setIntroVisibility(false) }} className='lg:hover:scale-[1.02] lg:text-[15px] text-[16px] w-[45%] justify-between   lg:w-[16%] transition-all bg-blue-800 duration-200 cursor-pointer  font-semibold companyLogo  rounded-md lg:p-2 px-3 p-1 flex  items-center  text-white '>
              <span className=''>View Work</span>
              <span className="material-symbols-rounded">
                arrow_right_alt
              </span>

            </NavLink>
            <div className={`${Scrollbtn ? "lg:block hidden" : "hidden"} cursor-pointer flex items-center justify-center  border-cyan-400 h-8 rounded-full companyLogo  animate-bounce bg-blue-700 w-8 text-white -top-20 right-4`}>
              <span className="material-symbols-rounded mt-[3px] flex justify-center items-center text-[27px]">
                keyboard_double_arrow_down
              </span>

            </div>

          </div>
        </div>
        <Outlet />

      </div>
      <div className="img  flex items-center hidden lg:block justify-center lg:mt-32  lg:w-[17%]   border-green-600">
        <img src={Myimg} alt="profile" className=' bg-blue-600  ImgShadow shadow-white rounded-tl-full mb-24 ' />
      </div>
    </div>
  )
}

export default Intro
