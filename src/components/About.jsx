import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="pt-5 pl-5 ml-10 w-full h-screen bg-gradient-to-b from-white-800 to-gray text-black"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-3 mt-20">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl  mt-5">
          Hi, my name is Albert and i am a web developer who's paionate about all
          things JavaScript.I'm a developer because i'm inspired by the idea of
          being a better me today than i was yesterday.Put simply, I love to
          learn and programming is a great example of that.
        </p>

        <br />

        <p className="text-xl mb-5">
          I am currently opened for  opportunities to work on Frontend
          application and ReactJs project.
        </p>
        <p className="text-xl mb-5">
          When I'm not busy building apps, you can find me playing/watching
          basketball ,playing Chess or reading a good book.
        </p>
        <p className="text-xl mb-20">
          If you will like to learn more about me ,please visit my contact
          section
        </p>
      </div>
    </div>
  );
};

export default About;
