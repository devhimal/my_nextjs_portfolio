import Link from 'next/link'
import React from 'react'


const image = "./himaltamang.jpg"

const me = () => {
  return (
    <div 
        className='w-full h-screen flex justify-center items-center text-center'
       
    
    >
        <div className="w-full space-y-2 flex-col mx-auto p-4 sm:p-10 md:p-20 flex justify-center items-center">
                <p className="text-md text-gray-600 uppercase">Diving more into technology</p>
                <h1 className='capitalize'>Hi, I'm <span className='text-[orangered] italic'>Himal</span></h1>
                <h1 className='capitalize'>a front-end web developer</h1>
                <p className='py-6 px-10 sm:px-15 md:px-40 xl:px-50 2xl:px-60'>Experienced web developer with 1 year of expertise in React.js, Next.js, and JavaScript. Passionate about creating dynamic and user-friendly web applications.</p>
                <button className='py-2 px-8 capitalize hover:bg-[orangered] hover:transition-all hover:duration-1000'>
                    <Link href="/">download cv</Link>
                </button>
        </div>
    </div>
  )
}

export default me