import React from "react";
import Image from "next/image";
import MovieClone from "../../../public/assets/online_movie_clone.png";
import Huddle from "../../../public/assets/huddle.png";
import Sukarmi from "../../../public/assets/sukarmi_profile.png";
import Link from "next/link";

const Projects = () => {
  return (
    <div id="projects" className="w-full min-h-screen px-10 sm:px-20 pb-10">
      <div className="flex flex-col justify-center items-center text-center space-y-6">
        <h1>Projects</h1>
        <p className="capitalize">
          I have completed a variety of projects during my experience. Here are
          just a few examples of the projects that I have built.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 py-6">
        <Link href="https://movie-clone-site.netlify.app/">
          <div className="relative h-[250px] w-[350px] rounded-xl flex justify-center items-center w-full h-auto shadow-xl shadow-gray-400 group hover:bg-[orangered] hover:transition-all hover:duration-1000">
            <Image
              src={MovieClone}
              alt="project_image"
              className=" opacity-1 group-hover:opacity-10 h-full w-full "
              
            />
            <div className="hidden group-hover:block w-full  text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h2 className="capitalize ">#1 Online Movie clone app</h2>
              <p className="text-[#fff]">
                I have developed this project utilizing ReactJS and Tailwind
                CSS, while implementing Redux Thunk middleware to handle the
                application's state
              </p>
            </div>
          </div>
        </Link>
        <Link href="https://huddle-template-site.netlify.app/">
          <div className="relative rounded-xl h-[250px] w-[350px] flex justify-center items-center w-full h-auto shadow-xl shadow-gray-400 group hover:bg-[orangered] hover:transition-all hover:duration-1000">
            <Image
              src={Huddle}
              alt="project_image"
              className=" opacity-1 group-hover:opacity-10 h-full w-full"
            />
            <div className="hidden group-hover:block w-full  text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h2 className="capitalize ">#2 Huddle</h2>
              <p className="text-[#fff]">
                I have developed a straightforward replica of a website called
                Huddle using ReactJS and Sass as the primary technologies for
                this project.
              </p>
            </div>
          </div>
        </Link>
        <Link href="https://sukarmi.com/">
          <div className="relative rounded-xl h-[250px] w-[350px] flex  justify-center items-center w-full h-auto shadow-xl shadow-gray-400 group hover:bg-[orangered] hover:transition-all hover:duration-1000">
            <Image
              src={Sukarmi}
              alt="project_image"
              className=" opacity-1 group-hover:opacity-10 h-full w-full"
            />
            <div className="hidden group-hover:block w-full  text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h2 className="capitalize ">#3 Sukarmi</h2>
              <p className="text-[#fff]">
                Sukarmi is an innovative and user-friendly online educational
                platform designed to empower individuals in their learning
                journey while providing seamless access to booking hostels and
                applying for job opportunities.</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
