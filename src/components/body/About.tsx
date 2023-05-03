import React from 'react'
import Image from "next/image"
import Profile from "../../../public/assets/himal.jpg"

const About = () => {
  return (
    <div id="about" className=" flex justify-between flex-col md:flex-row pb-60 items-center w-full h-fit">
        <div className='w-[50%] flex justify-center '>
            <Image src={Profile} alt="my_image" height={200} width={300} className="rounded-full border border-[orangered]"/>
        </div>
        <div className='w-[80%] md:w-[50%] space-y-4 flex flex-col items-center md:items-start text-center md:text-start py-10 md:py-0'>
            <h1>About Me</h1>
            <p>I am a versatile web developer with expertise in React.js and a growing proficiency in Next.js and React Native. In addition to my development skills, I also have a strong background in Figma design. With hands-on experience in creating visually appealing and user-friendly interfaces, I bring a holistic approach to web development. I am constantly expanding my knowledge in both frontend and design domains to deliver seamless and engaging digital experiences.</p>
        </div>
    </div>
  )
}

export default About