import React from 'react'
import Image from "next/image"
import { url } from 'inspector'


const About = () => {
  return (
    <div id="about"

    className="bg-scroll bg-cover flex justify-between flex-col md:flex-row  py-40 items-center w-full h-fit bg-[#1F2937] text-[#f0f1f3]">

        <div className='w-[50%] flex justify-center items-center'>
            <Image src="/himal.jpg" alt="my_image" height={200} width={300} className="rounded-full border border-[orangered]"/>
        </div>
        <div className='w-[80%] md:w-[50%] space-y-4 flex flex-col items-center justify-center md:items-start text-center md:text-start py-10 md:py-0'>
            <h1 className='text-[orangered]'>About Me</h1>
            <p>I am a versatile web developer with expertise in React.js and a growing proficiency in Next.js and React Native. In addition to my development skills, I also have a strong background in Figma design. With hands-on experience in creating visually appealing and user-friendly interfaces, I bring a holistic approach to web development. I am constantly expanding my knowledge in both frontend and design domains to deliver seamless and engaging digital experiences.</p>
        </div>
    </div>
  )
}

export default About;