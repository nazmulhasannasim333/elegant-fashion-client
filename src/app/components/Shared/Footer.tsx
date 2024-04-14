import Image from "next/image";
import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import FooterLogo from "../../../../public/next.svg";

const Footer = () => {
  return (
    <footer className="bg-[#222d35] text-white pt-14">
      <div className="max-w-7xl mx-auto  px-3 lg:px-0">
        <div className="lg:flex flex-row gap-4 items-center ">
          <div className="lg:w-1/4 w-full">
            <Image src={FooterLogo} height={98} width={160} alt="Client" />
          </div>
          <div className="lg:w-2/4 w-full my-7">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, quae.
            </p>
          </div>
          <div className="w-1/4">
            <div className="flex gap-5">
              <div className="group relative  cursor-pointer">
                <div className="bg-[rgba(255,255,255,.07)] size-10 rounded-full flex items-center justify-center">
                  <FaFacebook className="text-center" />
                </div>
                <div className="absolute -top-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-top-16 group-hover:opacity-100  ">
                  <p className="h-fit shadow-[0px_0px_10px_0px_#c92946] rounded-md bg-[#c92946] px-3 py-2 text-white">
                    {" "}
                    Facebook
                  </p>
                  <span className="absolute shadow-[0px_0px_10px_0px_#c92946] -bottom-2 left-[50%] h-0 w-0 -translate-x-1/2 rotate-[135deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#c92946]"></span>
                </div>
              </div>
              <div className="group relative  cursor-pointer ">
                <div className="bg-[rgba(255,255,255,.07)] size-10 rounded-full flex items-center justify-center">
                  <FaTwitter className="text-center" />
                </div>
                <div className="absolute -top-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-top-16 group-hover:opacity-100  ">
                  <p className="h-fit shadow-[0px_0px_10px_0px_#c92946] rounded-md bg-[#c92946] px-3 py-2 text-white">
                    {" "}
                    Twitter
                  </p>
                  <span className="absolute shadow-[0px_0px_10px_0px_#c92946] -bottom-2 left-[50%] h-0 w-0 -translate-x-1/2 rotate-[135deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#c92946]"></span>
                </div>
              </div>
              <div className="group relative  cursor-pointer ">
                <div className="bg-[rgba(255,255,255,.07)] size-10 rounded-full flex items-center justify-center">
                  <FaLinkedin className="text-center" />
                </div>
                <div className="absolute -top-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-top-16 group-hover:opacity-100  ">
                  <p className="h-fit shadow-[0px_0px_10px_0px_#c92946] rounded-md bg-[#c92946] px-3 py-2 text-white">
                    {" "}
                    LinkedIn
                  </p>
                  <span className="absolute shadow-[0px_0px_10px_0px_#c92946] -bottom-2 left-[50%] h-0 w-0 -translate-x-1/2 rotate-[135deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#c92946]"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 w-full border-b border-gray-600"></div>

        {/* second footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-10">
          <div className="relative">
            <div className="absolute top-8 border-b w-6  border-red-600" />
            <h2 className="text-xl font-semibold">Get Free Estimate</h2>
            <h4 className="my-5 text-2xl font-semibold text-red-600">
              123-456-78910
            </h4>
            <p>Lorem ipsum dolor sit amet, conse ctetur harum!</p>
            <button className="my-7 text-md py-3 px-8 border border-white relative group overflow-hidden font-semibold">
              <span className="absolute inset-0 bg-white z-0 transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
              <span className="relative z-10 text-white group-hover:text-black uppercase">
                Request online form
              </span>
            </button>
          </div>
          <div className="relative">
            <div className="absolute top-8 border-b w-6  border-red-600" />
            <h2 className="text-xl font-semibold">Textile Services</h2>
            <div className="my-7">
              <ul>
                <li className="mb-3 cursor-pointer transition-all duration-500 hover:text-red-500 hover:pl-2">
                  Patch Fabric Works
                </li>
                <li className="mb-3 cursor-pointer transition-all duration-500 hover:text-red-500 hover:pl-2">
                  Garment Stitching Good
                </li>
                <li className="mb-3 cursor-pointer transition-all duration-500 hover:text-red-500 hover:pl-2">
                  Patch Fabric Works
                </li>
                <li className="mb-3 cursor-pointer transition-all duration-500 hover:text-red-500 hover:pl-2">
                  Patch Fabric Works hard
                </li>
                <li className="mb-3 cursor-pointer transition-all duration-500 hover:text-red-500 hover:pl-2">
                  Computerised Embroidery
                </li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-8 border-b w-6  border-red-600" />
            <h2 className="text-xl font-semibold">Recent Posts</h2>
            <div className="my-6 ">
              <div>
                <h5 className="hover:text-red-600 cursor-pointer duration-500">
                  Can textiles lead the way during the pandemic?
                </h5>
                <p className="mt-1 text-slate-300">March 18, 2021</p>
              </div>
            </div>
            <div className="mt-4 w-full border-b border-gray-600"></div>
            <div className="my-6">
              <div>
                <h5 className="hover:text-red-600 cursor-pointer duration-500">
                  Can textiles lead the way during the pandemic?
                </h5>
                <p className="mt-1 text-slate-300">March 18, 2021</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-8 border-b w-6  border-red-600" />
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <div className="my-6 flex gap-5  items-center">
              <FaMapMarkerAlt className="text-lg text-red-600" />
              <p className="text-slate-200">
                4789 Melmorn Street,Zakila Ton Mashintron Town
              </p>
            </div>
            <div className="mt-2 w-full border-b border-gray-600"></div>
            <div className="my-6 flex gap-5  items-center">
              <FaPhoneAlt className="text-lg  text-red-600" />
              <p className="text-slate-200 ">01111111</p>
            </div>
            <div className="mt-2 w-full border-b border-gray-600"></div>
            <div className="my-6 flex gap-5  items-center">
              <FaEnvelope className="text-lg  text-red-600" />
              <p className="hover:text-red-600 duration-500">
                info@example.com
              </p>
            </div>
          </div>
        </div>

        <div className="lg:flex flex-row items-center">
          <input
            className="py-4 w-full lg:w-2/5 bg-[#26313a] focus:outline-none focus:border-none placeholder-gray-500 ps-4"
            type="text"
            placeholder="Your Name*"
          />
          <input
            className="py-4 w-full lg:w-2/5 bg-[#26313a] focus:outline-none focus:border-none placeholder-gray-500 ps-4 ms-1 lg:mt-0 mt-2"
            type="text"
            placeholder="Your Email*"
          />
          <button className="lg:w-1/5 w-full text-md py-4 mt-2 lg:mt-0 relative group overflow-hidden bg-red-700 font-semibold">
            <span className="absolute inset-0 bg-white z-0 transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
            <span className="relative z-10  text-white group-hover:text-black uppercase">
              Subscribe Us
            </span>
          </button>
        </div>
        <div className="text-center py-5">
          <p className="text-slate-300">
            Copyright © 2021{" "}
            <span className="text-red-600">Elegant Fashion</span> All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
