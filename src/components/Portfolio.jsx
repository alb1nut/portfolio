import React from 'react'
import weather from "../assets/portfolio/weather.png";
import linkedInClone from "../assets/portfolio/linkedInClone.JPG";
import task from "../assets/portfolio/Task.JPG";
import portfolio from "../assets/portfolio/portfolio.JPG";
import Technical from "../assets/portfolio/Technical.JPG";


const Portfolio = () => {
    const portfolios = [
        {
          id: 1,
          src: weather,
          title:'Weather App',
          demo:'https://dynamic-babka-49f2f4.netlify.app/',
          code: 'https://github.com/alb1nut/reactJs-weather-app'
        },
        {
          id: 2,
          src: linkedInClone,
          title:'LinkedIn Clone',
          demo:'',
          code:'https://github.com/alb1nut/linkedin-clone'
        },
        {
          id: 3,
          src: task,
          title:'Task Manager App',
          demo:'',
          code:''
        },
        {
          id: 4,
          src: reactSmooth,
          title:'Weather App',
          demo:'',
          code:''
        },
     
      ];
  return (
    <div
      name="portfolio"
      className="mb-52 md:mb-5 bg-gradient-to-b from-white to-gray-100 w-full text-black md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="ml-20 pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="m-auto w-3/4 grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src ,title,demo ,code}) => (
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
  )
}

export default Portfolio
