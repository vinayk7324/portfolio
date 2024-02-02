import React from 'react'

function Contact() {
  return (
    <div className='text-white'>
       
<div className="relative flex items-top justify-center  w-full  lg:bg-inherit  bg-inherit  sm:items-center sm:pt-0">
        <div className="max-w-6xl   sm:px-6 lg:px-8">
            <div className="lg:mt-8 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-6 mr-2  lg:dark:bg-inherit sm:rounded-lg">
                        <h1 className="  after:absolute lg:after:border-b-4 lg:after:top-14 lg:after:w-full lg:after:left-0 after:border-b-2 after:border-blue-500 after:bottom-0 after:left-6 after:w-[80%] after:top-9   relative  text-2xl sm:text-5xl text-gray-800 dark:text-white text-center      font-bold tracking-tight">
                            Get in touch
                        </h1>
                        <p className="text-normal text-lg  font-medium text-gray-600 dark:text-gray-400 mt-3">
                            Fill in the form to start a conversation
                        </p>

                        <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="lg:w-8 h-6 w-6 lg:h-8 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <div className="ml-4 text-[18px] tracking-wide font-semibold w-40">
                                IIT Roorkee, Roorkee, Haridwar Uttrakhand,
                                246467
                            </div>
                        </div>

                        <div className="flex items-center lg:mt-4 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="lg:w-8 h-6 w-6 lg:h-8 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                +91 7324968124
                            </div>
                        </div>

                        <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="lg:w-8 w-6 h-6 lg:h-8 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                vinayiitr7324@gmail.com
                            </div>
                        </div>
                    </div>

                    <form className="p-6 flex flex-col justify-center">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="hidden">Full Name</label>
                            <input spellCheck={false} type="name" name="name" id="name" placeholder="Full Name" className="w-100  lg:mt-2 lg:py-3 p-2 lg:text-[23px] px-3 rounded-lg bg-white dark:bg-inherit border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <div className="flex flex-col mt-2">
                            <label htmlFor="email" className="hidden">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" className=" lg:w-full p-2 lg:mt-2 mt-1 lg:py-4 lg:text-[23px] lg:px-4 rounded-lg bg-white dark:bg-inherit border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <div className="flex flex-col mt-2">
                            <label htmlFor="tel" className="hidden">Number</label>
                            <input type="tel" name="tel" id="tel" placeholder="Telephone Number" className=" lg:mt-2 lg:py-3 lg:px-4 p-2 mt-1 lg:text-[23px] rounded-lg bg-white dark:bg-inherit border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <button type="submit" className="lg:w-32 w-24 bg-indigo-600 cursor-pointer companyLogo p-2  text-white font-bold lg:py-3 lg:px-6 rounded-lg mt-5 text-[14px] lg:text-[23px]  lg:hover:bg-indigo-500 transition ease-in-out duration-300">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Contact
