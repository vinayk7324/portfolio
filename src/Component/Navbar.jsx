import React, { useEffect, useState } from 'react'
import img from '../assets/th1.png'
import { NavLink } from 'react-router-dom'
import { usePortfolio } from '../context/PortfolioContext'

function Navbar() {
  const {setIntroVisibility} = usePortfolio();
  const [localstorage,setlocalStorage] = useState('');
  const [navbarPos,setNavbarPos] = useState("translate-x-[100%]");

  setInterval(() => {
    document.querySelector('.time').innerHTML = new Date();
  },1000);

  // function SetIntroVisibility(visible){
  //   console.log("rom rom bhaiyon!",visible);
  //   localStorage.setItem('visible',JSON.stringify(visible)||"true");
  //   // console.log(localStorage.getItem('visible'));
  // }
    

  
  // useEffect(()=>{
  //   console.log(JSON.parse(localStorage.getItem('visible')));
  //   setIntroVisibility(JSON.parse(localStorage.getItem('visible')))

  // },[SetIntroVisibility])

  function HandleNavbar(){
    console.log("function ");
    if(navbarPos!="translate-x-[100%]"){
      setNavbarPos("translate-x-[100%]");
    }
    else{
      setNavbarPos("translate-x-0");
    }

    

  }

  
  
 
  
  
 
  

  return (
    <div className=' w-full  lg:p-0  lg:z-0 z-[4] bg-[#1a1a5f] lg:static fixed  lg:p-1  lg:shadow-[#191818ac] lg:shadow-lg  flex flex-col  items-center '>
       <div className="time text-[#4bebeb] lg:text-[16px]  w-full text-[10px] font-semibold ">
         

        </div>

      <div className="  flex  lg:py-2  w-full lg:space-y-0 lg:px-0 px-4  items-center lg:flex-row items-center justify-between">
        
        <div className="  flex items-center text-white">
          <span className=' h-[35px] w-[35px] lg:h-[60px] lg:w-[60px] flex items-center justify-center lg:ms-5 overflow-hidden  '>
            <img src={img} alt="Logo" className='h-[40px] w-[40px] companyShadow scale-[1.6]  ' />
            


          </span>
         
        </div>
       

      
       <div className={` ${navbarPos}  absolute lg:sticky lg:translate-x-0 lg:z-[0]  transition-all duration-150  lg:w-[40%] -bottom-[27px] left-0 lg:bottom-0  w-[100vw] `}>
       <div className="      lg:bg-inherit  bg-white lg:space-x-12 space-x-1 font-semibold lg:text-[22px] text-[12px]  flex  items-center justify-center text-white">
          <NavLink to={"/"} onClick={()=>{
          setIntroVisibility(true)
          
          
          }} className={({isActive})=>`${isActive?`bg-blue-700`:` lg:text-white lg:bg-[#111325] lg:hover:bg-[#5959a8] text-black lg:opacity-50`} lg:hover:scale-[1.03]    lg:hover:text-white transition-all duration-200  w-16 items-center justify-center flex  lg:rounded-sm rounded-r-sm cursor-pointer lg:logoShadow logoShadow   p-1 `} >

            Home
          </NavLink>
          <NavLink onClick={()=>{
            setIntroVisibility(false)
          }} to ={"/about"} className={({isActive})=>`${isActive?"bg-blue-700":"lg:text-white lg:bg-[#111325] lg:hover:bg-[#5959a8] text-black lg:opacity-50"} navlink lg:hover:scale-[1.03]  lg:hover:text-white transition-all  lg:hover:text-white w-16 items-center justify-center flex  rounded-sm cursor-pointer lg:logoShadow logoShadow   p-1`} >About</NavLink>
          <NavLink onClick={()=>{
            setIntroVisibility(false)
          }} to={"/experience"}  className={({isActive})=>`${isActive?"bg-blue-700":"lg:text-white  lg:bg-[#111325] lg:hover:bg-[#5959a8] text-black lg:opacity-50"} navlink lg:hover:scale-[1.03]  lg:hover:text-white transition-all lg:hover:text-white w-28 items-center justify-center flex  rounded-sm cursor-pointer lg:logoShadow logoShadow   p-1`} >Experience</NavLink>
          <NavLink to={"/work"} onClick={()=>{
            setIntroVisibility(false)
          }} className={({isActive})=>`${isActive?"bg-blue-700":"lg:text-white lg:bg-[#111325] lg:hover:bg-[#5959a8] text-black lg:opacity-50"} navlink   lg:hover:scale-[1.03]  lg:hover:text-white transition-all  lg:hover:text-white w-16 items-center justify-center flex   rounded-sm cursor-pointer lg:logoShadow logoShadow   p-1`} >Work</NavLink>
          <NavLink to={"/contact"}  onClick={()=>{
            setIntroVisibility(false)
          }} className={({isActive})=>`${isActive?"bg-blue-700":"lg:text-white lg:bg-[#111325] lg:hover:bg-[#5959a8] text-black lg:opacity-50"} navlink lg:hover:scale-[1.03]  lg:hover:text-white transition-all lghover:text-white w-20 items-center justify-center flex   lg:rounded-sm rounded-l-sm cursor-pointer logoShadow lg:logoShadow   p-1`} >Contact</NavLink>
        </div>
       </div>
       


        <div onClick={HandleNavbar} className=" lg:hidden block    p-1 text-[#3fc0ef]">
        <span className="material-symbols-rounded font-semibold text-3xl">menu</span>

        </div>


      </div>



    </div>
  )
}

export default Navbar
