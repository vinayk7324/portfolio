import React from 'react'
import { Link } from 'react-router-dom'
function Left() {
  
  
  
  

  
  
  return (

    <div className=" lg:mt-32">
      <div className=""> 
<div className="Linkedin animate-spin    cursor-pointer px-3  space-x-3 -translate-x-[66%] hover:-translate-x-0 transition-all duration-700 flex items-center">
  <Link target='_blank'  to='#contact' className=" h-14 flex items-center font-semibold  text-[14px] ">Check LinkedIn</Link>

 <div className="  h-12 w-12 rounded-md companyLogo flex items-center justify-center bg-[#3e41db]">
 <i className="fa-brands fa-linkedin text-3xl"></i>
 </div>
</div>


<div className="Github animate-spin cursor-pointer px-3 space-x-3 -translate-x-[60.5%] hover:-translate-x-0 transition-all duration-700 flex items-center">
  <Link target='_blank' to='https://github.com/vinayk7324' className="h-14 flex items-center text-[14px] font-semibold">Check GitHub</Link>
  <div className="h-12 w-12   flex items-center companyLogoG rounded-md justify-center bg-[#2a2a2b]">
  <i className="fa-brands fa-github text-3xl"></i>
  </div>
  
</div>
<div className="Email animate-spin cursor-pointer px-3 space-x-3 -translate-x-[54.6%] hover:-translate-x-0 transition-all duration-700 flex items-center">
  <Link target='_blank' to='mailto:kumarvinay07318@gmail.com' className="h-14 flex text-[14px] items-center font-semibold">Check Email</Link>
  <div className="h-12 w-12  flex items-center companyLogoM rounded-md justify-center bg-[#3db2c7]">
  <i className="fa-solid fa-envelope text-3xl"></i>
  
  </div>
 
</div>
<div className="insta animate-spin  cursor-pointer px-3 space-x-3 -translate-x-[52.7%]  hover:-translate-x-0 transition-all duration-700 flex items-center">
  <Link target='_blank' to='https://www.instagram.com/vasu___4.0/' className="h-14 flex text[14px] items-center font-semibold">Check Insta</Link>
  <div className="h-12 w-12  flex items-center companyLogoI rounded-md  justify-center bg-[#4a4b4b]">
  <i className="fa-brands fa-instagram  text-3xl"></i>
  </div>
</div>
</div>
    </div>
  )
}

export default Left
