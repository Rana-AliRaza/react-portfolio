import React from "react";
import arrayDestruction from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import usestate from "../assets/portfolio/usestate.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {

    const portfolioProject = [
        {
            id: 1,
            src: arrayDestruction,
            alt:"Array Destruction Project",
        },
        {
            id: 2,
            src: installNode,
            alt:"Install Node Project",
        },
        {
            id: 3,
            src: navbar,
            alt:"navbar Project",
        },
        {
            id: 4,
            src: reactParallax,
            alt:"React Parallax Project",
        },
        {
            id: 5,
            src: usestate,
            alt:"usestate Project",
        },
        {
            id: 6,
            src: reactWeather,
            alt:"React Weather Project",
        }
    ]

  return (
    <div className="w-full   bg-gradient-to-b from-black to-gray-800 text-white p-4" name="portfolio">
      <div className="max-w-screen-lg w-full h-full  flex flex-col mx-auto p-2">
        <div className="pb-8">
          <p className="text-4xl inline w-full bold border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid md:grid-cols-3  sm:grid-cols-2 gap-8 px-12 sm:px-0">

            {
                portfolioProject.map(({id, src , alt})=>(
                    <div className=" shadow-md shadow-gray-500 rounded-lg" key={id}>
                    <img 
                    src={src} 
                    className="rounded-md hover:scale-105 duration-200"
                    alt={alt} />
                    <div className="flex items-center justify-center">
                      <button className="m-4 px-6 py-3 w-1/2 hover:scale-105 duration-200">Demo</button>
                      <button className="m-4 px-6 py-3 w-1/2 hover:scale-105 duration-200">Code</button>
                    </div>
                  </div>
                ))
            }
          
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
