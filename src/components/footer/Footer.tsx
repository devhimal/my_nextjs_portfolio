import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <div id="footer" className="py-6 bg-[#1F2937] text-[#fff] top-[100%] bottom-0 w-full ">
      <div className="flex justify-between px-20">
        <div>
          <p className="border-3 text-2xl text-bold uppercase border-red-950">
            Himal Tamang
          </p>
          <p>981870764</p>
          <p>himalhobbs.364@gmail.com</p>
          <p>Kathmandu, Nepal</p>
        </div>
        <div className="flex flex-col">
          <div className="text-xl text-[orangered]  py-2 ">Let's Connect</div>
          <label
            htmlFor="linkdin"
            className="cursor-pointer flex py-2 space-x-2 items-center justify-start"
          >
            <AiFillLinkedin />
            <p>Linkdin</p>
          </label>
          <label
            htmlFor="facebook"
            className="cursor-pointer flex py-2 space-x-2 items-center justify-start"
          >
            <AiFillFacebook />
            <p>Facebook</p>
          </label>
          <label
            htmlFor="twitter"
            className="cursor-pointer flex py-2 space-x-2 items-center justify-start"
          >
            <AiFillTwitterSquare />
            <p>Twitter</p>
          </label>
          <label
            htmlFor="instagram"
            className="cursor-pointer flex py-2 space-x-2 items-center justify-start"
          >
            <AiFillInstagram />
            <p>Instagram</p>
          </label>
        </div>
      </div>
      <hr />
      <div className="flex justify-center items-center pt-4">
        <p className="capitalize">   &copy;{currentYear}, designed by himal tamang</p>
      </div>
    </div>
  );
};

export default Footer;
