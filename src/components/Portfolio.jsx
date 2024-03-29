import React from "react";
import weather from "../assets/portfolio/weather.png";
import troski from "../assets/portfolio/troski.png";
import ecommerce from "../assets/portfolio/ecommerce.png";
import task from "../assets/portfolio/Task.JPG";
import portfolio from "../assets/portfolio/portfolio.JPG";
// import Technical from "../assets/portfolio/Technical.JPG";
import auth from "../assets/portfolio/authwiki.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: auth,
      title: "Auth Wiki -Authentication codes | Access to authentication codes written in different languages ",
      demo: "https://zuri-training.github.io/Auth_Wiki_Team_3/",
      code: "https://github.com/zuri-training/Auth_Wiki_Team_3",
    },
    {
      id: 2,
      src: ecommerce,
      title: "BIT -Ecommerce Store | An Online Apple Shop",
      demo: "https://stalwart-cascaron-b9838f.netlify.app/",
      code: "https://github.com/alb1nut/ecommerce-app",
    },
    {
      id: 3,
      src: troski,
      title: "Troski-dashboard | A driver bus management app",
      demo: "https://famous-cassata-c8ea59.netlify.app/",
      code: "https://github.com/alb1nut/troski-dashboard",
    },
    {
      id: 4,
      src: weather,
      title: "Weather App",
      demo: "https://dynamic-babka-49f2f4.netlify.app/",
      code: "https://github.com/alb1nut/reactJs-weather-app",
    },
    {
      id: 5,
      src: task,
      title: "Task Manager App",
      demo: "https://chipper-heliotrope-878bce.netlify.app/",
      code: "https://github.com/alb1nut/Task-Manager-App/tree/main/Desktop/Web%20Development/1.a.%20React%20Projects/blogging",
    },
    {
      id: 6,
      src: portfolio,
      title: "Portfolio",
      demo: "https://albertdovlo.com/",
      code: "https://github.com/alb1nut/portfolio",
    },
    // {
    //   id: 7,
    //   src: Technical,
    //   title: "Technical Documentation Page",
    //   demo: "https://alb1nut.github.io/Technical-Documentation-Page/",
    //   code: "https://github.com/alb1nut/Technical-Documentation-Page",
    // },
  ];
  return (
    <div
      name="portfolio"
      className="mb-52 md:mt-52 pb-52 md:pb-0 md:mb-96 bg-gradient-to-b from-white to-gray-100 w-full text-black md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="ml-20 pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="m-auto w-3/4 grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, demo, code }) => (
            <div key={id} className="shadow-lg shadow-black rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="py-4 mx-5 ">{title}</p>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
