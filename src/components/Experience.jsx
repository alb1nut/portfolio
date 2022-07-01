import React from 'react'

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import flutter from "../assets/Flutter.png";
import Dart from "../assets/Dart.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.ico";

const Experience = () => {
    const techs = [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "shadow-orange-500",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: "shadow-blue-500",
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          style: "shadow-yellow-500",
        },
        {
          id: 4,
          src: reactImage,
          title: "React",
          style: "shadow-blue-600",
        },
        {
          id: 5,
          src: tailwind,
          title: "Tailwind",
          style: "shadow-sky-400",
        },
        {
          id: 6,
          src: flutter,
          title: "Flutter",
          style: "shadow-blue-600",
        },
        {
          id: 7,
          src: Dart,
          title: "Dart",
          style: "shadow-pink-400",
        },
        {
          id: 8,
          src: github,
          title: "GitHub",
          style: "shadow-gray-400",
        },
        {
          id: 9,
          src: python,
          title: "Python",
          style: "shadow-gray-400",
        },
      ];
  return (
    <div
      name="experience"
      className="mt-96 md:mt-52 mb-96 pb-80 md:mb-52 bg-gradient-to-b from-gray-100 to-white w-full h-screen"
    >
      <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
        <div className='ml-20 mt-80'>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="m-auto w-3/4 grid  md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
