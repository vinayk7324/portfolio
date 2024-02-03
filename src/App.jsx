import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import { ContextProvider } from './context/PortfolioContext'
import Left from './Component/Left'
import Intro from './Component/Intro'
import Footer from './Component/Footer'

function App() {

 
  const [IntroVisibility,setIntroVisibility] = useState(true);
  return (
    <ContextProvider value={{IntroVisibility,setIntroVisibility}}>

      <div className='lg:h-screen relative lg:overflow-hidden  border-red-600 bg-[#0e0d38]'>
        <Navbar />
        <div className="lg:h-[90%]   flex items-center justify-between">

          <div className="Left lg:mb-32 hidden lg:block text-white">
            <Left />
          </div>
          

        
        <Intro />
        
        </div >

      <div className="lg:absolute  w-full   lg:bottom-0 lg:right-0">
        <Footer/>
      </div>


      </div>
    </ContextProvider>

  )
}

export default App
