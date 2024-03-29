import React from "react";
import HeroImage from "../assets/heroImg.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-white   to-gray-100 "
    >
      <div className=" w-3/4 m-auto max-w-screen-lg  flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className=" text-4xl md:text-7xl font-bold text-black">
            Hello, I'm Albert
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
           Frontend  Developer (ReactJs) ||  Mobile Developer (React Native  and Flutter)
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className= "mb-5">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-xl  md:mx-auto w-2/3 sd:w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
