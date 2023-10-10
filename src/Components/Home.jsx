import React from 'react';
import heroImage from '../assets/heroImage.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-black to-gray-800' name="home">
       <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center h-screen px-4 md:flex-row sm:h-full'>

           <div className='flex flex-col justify-center w-full'>
              <h2 className='text-4xl sm:text-7xl text-white font-bold '> I'm a Full Stack Developer</h2>
              <p className='text-gray-500 py-4 max-w-md'>
                I have more than 6 months Experience building and designing software.
                Currently, I have to work on web application using tecknologies like 
                ReactJs , TailwindCSS , NextJs , GraphQL.
              </p>
              <Link to="portfolio" smooth duration-300 className='group w-fit flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md my-3 cursor-pointer text-white  ' >
                Portfolio 
                <span className='group-hover:rotate-90 duration-300 ml-1'> <MdOutlineKeyboardArrowRight size={25} /></span>
              </Link>
           </div>

           <div className=''>
             <img src={heroImage} alt="my portfolio pic" className='rounded-2xl w-2/3 md:w-full mx-auto ' />
           </div>

       </div>
    </div>
  )
}

export default Home
