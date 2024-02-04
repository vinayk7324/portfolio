import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import { ContextProvider } from './context/PortfolioContext'
import Left from './Component/Left'
import Intro from './Component/Intro'
import Footer from './Component/Footer'
import useTitle from './DynamicTitle/useTitle'

function App() {

  useTitle("My Porfolio | Home"); 
 
  const [IntroVisibility,setIntroVisibility] = useState(true);
  const [Scrollbtn,setScrollbtn] = useState(false);
  return (
    <ContextProvider value={{IntroVisibility,setIntroVisibility ,Scrollbtn ,setScrollbtn}}>

      <div className='lg:h-[120vh]       border-red-600 bg-[#0e0d38]'>
        <Navbar />
        <div className="lg:h-[84%]         flex items-center justify-between">

          <div className="Left lg:mb-32 hidden lg:block text-white">
            <Left />
          </div>
          

        
        <Intro />
        
        </div >

      <div className="    w-full   lg:bottom lg:right-0">
        <Footer/>
      </div>


      </div>
    </ContextProvider>

  )
}

export default App
