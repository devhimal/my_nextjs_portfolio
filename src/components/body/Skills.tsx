import React from 'react'
import {GrReactjs} from "react-icons/gr"
import {TbBrandNextjs} from "react-icons/tb"
import {DiJavascript1, DiSass} from "react-icons/di"
import {AiFillHtml5, AiFillGithub} from "react-icons/ai"
import {SiTailwindcss} from "react-icons/si"
import {BiCode} from "react-icons/bi"
import {FiFigma} from "react-icons/fi"

const Skills = () => {

    const style = { color: "orangered", fontSize: "2em" }
    const iconStyle = "flex flex-col items-center hover:cursor-pointer space-y-2 hover:transition-all hover:duration-1000 bg-[#1F2937] text-[#fff] hover:text-[orangered] rounded-md py-10 px-10 hover:rotate-12"

  return (
    <div id="skills" className='flex flex-col justify-center py-20 w-full min-h-screen px-10 md:px-20 xl:px-40 space-y-20'>
        <div className='flex flex-col items-center text-center'>
            <h1>Skills</h1>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-16'>
            <div className= {iconStyle}>

                <GrReactjs style={style} className='hover: transition-all hover:duration-300'/>
                <p className='text-xl'>ReactJs</p>

            </div>
            <div  className= {iconStyle}>
                <GrReactjs style={style}/>
                <p className='text-xl'>Redux </p>
            </div>
            <div  className= {iconStyle}>
                <AiFillGithub style={style}/>
                <p className='text-xl'>Github </p>
            </div>
            <div  className= {iconStyle}>
                <TbBrandNextjs style={style}/>
                <p className='text-xl'>Nextjs</p>
            </div>
            <div  className= {iconStyle}>
                <DiJavascript1 style={style}/>
                <p className='text-xl'>Javascript</p>
            </div>
            <div className= {iconStyle}>
                <AiFillHtml5 style={style}/>
                <p className='text-xl'>HTML</p>
            </div>
            <div  className= {iconStyle}>
                <DiSass style={style}/>
                <p className='text-xl'>Sass</p>
            </div>
            <div  className= {iconStyle}>
                <SiTailwindcss style={style}/>
                <p className='text-xl'>Tailwindcss</p>
            </div>
            <div  className= {iconStyle}>
                <BiCode style={style}/>
                <p className='text-xl'>API Integration</p>
            </div>
            <div  className= {iconStyle}>
                <FiFigma style={style}/>
                <p className='text-xl'>Figma Design</p>
            </div>
        </div>
    </div>
  )
}

export default Skills