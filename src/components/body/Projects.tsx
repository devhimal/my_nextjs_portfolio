import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  let Data = [
    {
      id: 1,
      image: "/online_movie_clone.jpg",
      url: "https://movie-clone-site.netlify.app/",
      title: "Online Movie clone app",
      sourcecode:"https://github.com/HimalTamang/redux-movie-app.git",
      description:
        "I have developed this project utilizing ReactJS and Tailwind CSS, while implementing Redux Thunk middleware to handle the application's state",
    },
    {
      id: 2,
      image: "/huddle.jpg",
      url: "https://huddle-template-site.netlify.app/",
      title: "Huddle Clone",
      sourcecode:"https://github.com/HimalTamang/styled-component.git",
      description:
        "I cloned the Huddle website using ReactJS, Sass, and Material UI, showcasing my proficiency in these technologies",
    },
    {
      id: 3,
      image: "/sukarmi_profile.jpg",
      url: "https://sukarmi.com/",
      title: "Sukarmi",
      sourcecode:"",
      description:
        " Sukarmi: Empowering learning, seamless access to hostels, and job opportunities.",
    },
    {
      id:4, 
      image: "/homyz.jpg",
      url: "https://real-estate-website-clone.vercel.app/",
      title: "Real Estate Clone",
      sourcecode:"https://github.com/HimalTamang/real_estate_website_clone.git",
      description: "This project has been built using the Vite framework, making it an excellent choice for all real estate agents seeking to provide exceptional service to their customers and expand their client base."
    }
  ];

  return (
    <div id="projects" className="w-full min-h-screen px-10 sm:px-20 py-10">
      <div className="flex flex-col justify-center items-center text-center space-y-6">
        <h1>Projects</h1>
        <p className="capitalize">
          I have completed a variety of projects during my experience. Here are
          just a few examples of the projects that I have built.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 py-6">
        {Data.map((items) => {
          return (
           
              <div key={items.id} className="relative h-[250px] w-[350px] rounded-lg flex justify-center items-center shadow-xl shadow-gray-400 group hover:bg-[orangered] hover:transition-all hover:duration-1000 hover:scale-95 overflow-hidden">
                <img src={items.image} alt={items.title} className="group-hover:opacity-10 h-full w-full "/>
                <div className="hidden group-hover:block w-full  text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <h2 className="capitalize "> # {items.id} {items.title}</h2>
                  <p className="text-[#fff]">{items.description}</p>

                  <div className="w-full flex justify-between items-center px-4 py-6">
                    <button className="py-2 px-6 rounded-md capitalize bg-[#1f2937]">
                   <Link href={items.url}>Demo</Link>
                    </button>
                    <button className="py-2 px-6 rounded-md capitalize bg-[#1f2937]">source code</button>
                </div>
                </div>
              
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
