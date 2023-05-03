import Link from "next/link";
import React, { useState } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <div className="sticky w-full h-20 shadow-xl z-[100]">
        <div className="flex justify-between items-center w-full h-full px-10 sm:px-15 md:px-20 2xl:px-16">
          <p className="border-3 text-2xl text-bold uppercase border-red-950">
            Himal Tamang
          </p>
          <div className="flex justify-between items-center space-x-8">
            <ul className=" hidden md:flex justify-between items-center uppercase border-1 space-x-8">
              <Link href="/">
                <li className="  hover:text-[orangered] hover:transition-all hover:duration-300">
                  Home
                </li>
              </Link>
              <Link href="#skills">
                <li className="  hover:text-[orangered] hover:transition-all hover:duration-300">
                  Skills
                </li>
              </Link>
              <Link href="#projects">
                <li className="  hover:text-[orangered] hover:transition-all hover:duration-300">
                  Projects
                </li>
              </Link>
              <Link href="#about">
                <li className="  hover:text-[orangered] hover:transition-all hover:duration-300">
                  About Me
                </li>
              </Link>
              <button className="py-2 px-6 hover:bg-[orangered] hover:transition-all hover:duration-500">
                <Link href="#footer">Hire Me</Link>
              </button>
            </ul>
            <div onClick={() => setNav(!nav)} className="flex md:hidden">
              <AiOutlineMenu size={28} />
            </div>
          </div>
        </div>

        {/* for small screen devices */}

        <div
          className={
            nav
              ? "fixed md:hidden left-0 top-0 bg-black/70 w-full h-screen transition-all duration-1000"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 h-screen w-[70%] sm:w-[60%] md:w-[35%] bg-[#ecf0f3] p-10 transition-all ease-in-out duration-500"
                : "fixed left-[-100%] top-0 h-screen w-[70%] sm:w-[60%] md:w-[35%] bg-[#ecf0f3] p-10 ease-in-out duration-500"
            }
          >
            <div>
              <div className="flex justify-between items-center">
                <p className="border-3 text-2xl text-bold uppercase text-[orangered]">
                  Himal Tamang
                </p>
                <AiOutlineClose
                  onClick={() => setNav(!nav)}
                  className="cursor-pointer hover:text-[orangered]"
                  size={25}
                />
              </div>

              <div className="py-6">
                I'd be happy to answer any questions you have about me. Just
                click on the links below to learn more.
              </div>

              <div>
                <ul className="uppercase">
                  <Link href="#skills" onClick={() => setNav(!nav)}>
                    <li className="text-sm py-3 hover:bg-[orangered] hover:text-[#fff] hover:rounded-sm hover:px-2 hover:transition-all hover:duration-500 ">
                      Skills
                    </li>
                  </Link>
                  <Link href="#projects" onClick={() => setNav(!nav)}>
                    <li className="text-sm py-3 hover:bg-[orangered] hover:text-[#fff] hover:rounded-sm hover:px-2 hover:transition-all hover:duration-500">
                      Projects
                    </li>
                  </Link>
                  <Link href="#about" onClick={() => setNav(!nav)}>
                    <li className="text-sm py-3 hover:bg-[orangered] hover:text-[#fff] hover:rounded-sm hover:px-2 hover:transition-all hover:duration-300">
                      About Me
                    </li>
                  </Link>
                  <Link href="#footer" onClick={() => setNav(!nav)}>
                    <li className="text-sm py-3 hover:bg-[orangered] hover:text-[#fff] hover:rounded-sm hover:px-2 hover:transition-all hover:duration-300">
                      Contact Me
                    </li>
                  </Link>
                  
                </ul>
                <div className="pt-40">
                  <p className="uppercase tracking-widest text-[orangered] ">
                    Let's Connect
                  </p>
                  <div className="flex justify-start items-center my-4 w-full space-x-4 sm:w-[80%]">
                    <div className="flex justify-center items-center shadow-xl rounded-full shadow-orange-600 hover:shadow-gray-400 hover:transition-all hover:duration-1000  p-2 cursor-pointer">
                      <a href="www.linkdin.com">
                        <AiFillLinkedin size={25} />
                      </a>
                    </div>
                    <div className="shadow-xl flex justify-center items-center rounded-full shadow-orange-600 hover:shadow-gray-400 hover:transition-all hover:duration-1000 p-2 cursor-pointer">
                      <AiFillFacebook size={25} />
                    </div>
                    <div className="shadow-xl flex justify-center items-center rounded-full shadow-orange-600 hover:shadow-gray-400 hover:transition-all hover:duration-1000 p-2 cursor-pointer">
                      <AiFillInstagram size={25} />
                    </div>
                    <div className="shadow-xl flex justify-center items-center rounded-full shadow-orange-600 hover:shadow-gray-400 hover:transition-all hover:duration-1000 p-2 cursor-pointer">
                      <AiFillTwitterSquare size={25} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
