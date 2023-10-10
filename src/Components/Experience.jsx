import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/node.png";
import github from "../assets/github.png";
import nextjs from "../assets/nextjs.png";
import graphQl from "../assets/graphql.png";

const Experience = () => {
  const technologies = [
    {
      id: 1,
      src: html,
      alt: "Html Image",
      techName: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      alt: "CSS Image",
      techName: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      alt: "JavaScript Image",
      techName: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: tailwind,
      alt: "TailwindCSS Image",
      techName: "TailwindCSS",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: react,
      alt: "React Image",
      techName: "React",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: nodejs,
      alt: "NodeJs Image",
      techName: "NodeJs",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: github,
      alt: "github Image",
      techName: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: graphQl,
      alt: "GraphQl Image",
      techName: "GraphQl",
      style: "shadow-pink-400",
    },
    {
      id: 9,
      src: nextjs,
      alt: "NextJs Image",
      techName: "NextJs",
      style: "shadow-white",
    },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white" name='experience'>
      <div className="max-w-screen-lg h-full mx-auto p-4 flex flex-col justify-center">
        <div className="mb-8">
          <p className="text-4xl bold border-b-4 border-gray-500 inline ">
            Experience
          </p>
          <p className="py-6 ">These are the technologies I've worked with.</p>
        </div>

        <div className="w-full h-full grid md:grid-cols-3 sm:grid-cols-2 sm:px-0 px-12 py-8 gap-8 ">
          {technologies.map(({ id, style, src, alt, techName }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 ${style} rounded-lg py-2`}>
              <img src={src} className="mx-auto w-20" alt={alt} />
              <p className="text-center py-2">{techName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
