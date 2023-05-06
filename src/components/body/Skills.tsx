import React from 'react'
import {GrReactjs} from "react-icons/gr"
import {TbBrandNextjs} from "react-icons/tb"
import {DiJavascript1, DiSass} from "react-icons/di"
import {AiFillHtml5} from "react-icons/ai"
import {SiTailwindcss} from "react-icons/si"
import {BiCode} from "react-icons/bi"
import {FiFigma} from "react-icons/fi"

const Skills = () => {
  return (
    <div id="skills" className='flex flex-col justify-center w-full min-h-screen px-10 md:px-20 xl:px-40 space-y-20'>
        <div className='flex flex-col items-center text-center'>
            <h1>Skills</h1>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 md:gap-20'>
            <div className='flex flex-col items-center hover:cursor-pointer '>
                <GrReactjs height={30} width={30}/>
                <p className='text-xl'>ReactJs</p>
            </div>
            <div className='flex flex-col items-center hover:cursor-pointer'>
                <GrReactjs />
                <p className='text-xl'>Redux </p>
            </div>
            <div className='flex flex-col items-center hover:cursor-pointer'>
                <TbBrandNextjs />
                <p className='text-xl'>Nextjs</p>
            </div>
            <div className='flex flex-col items-center hover:cursor-pointer'>
                <DiJavascript1 />
                <p className='text-xl'>Javascript</p>
            </div>
            <div className='flex flex-col items-center hover:cursor-pointer'>
                <AiFillHtml5 />
                <p className='text-xl'>HTML</p>
            </div>
            <div className='flex flex-col items-center hover:cursor-pointer'>
                <DiSass />
                <p className='text-xl'>Sass</p>
            </div>
            <div className='flex flex-col items-center hover:cursor-pointer'>
                <SiTailwindcss />
                <p className='text-xl'>Tailwindcss</p>
            </div>
            <div className='flex flex-col items-center hover:cursor-pointer'>
                <BiCode />
                <p className='text-xl'>API Integration</p>
            </div>
            <div className='flex flex-col items-center hover:cursor-pointer'>
                <FiFigma />
                <p className='text-xl'>Figma Design</p>
            </div>
        </div>
    </div>
  )
}

export default Skills