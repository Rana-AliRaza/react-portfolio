import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';

const  NavBar = () => {
    const [ nav , setNav ] = useState(false);
    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "portfolio",
        },
        {
            id: 4,
            link: "experience",
        },
        {
            id: 5,
            link: "contact",
        },
    ]
  return (
    <div className='flex justify-between  fixed w-full items-center h-20 px-4  bg-black text-white' name="navbar">
       <div>
         <h1 className=' text-5xl font-signature whitespace-nowrap '>Ali Raza</h1>
       </div>
       <ul className='hidden md:flex'>
        {
            links.map(({id, link})=>(
                <li key={id} className='px-4 capitalize cursor-pointer text-gray-500 font-medium hover:scale-105 duration-200'>
                    <ScrollLink to={link} smooth duration-500 >{link}</ScrollLink>
                    </li>           
             ))
        }
       </ul>
       <div className='cursor-pointer text-gray-500 pr-4 z-10 md:hidden'  onClick={()=>setNav(!nav)}>
            {
                nav? <FaTimes size={30}/> : <FaBars size={30} />
            }
       </div>
       {
        nav &&(
            <ul className='flex flex-col justify-center items-center text-gray-500 absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800'>
        {
            links.map(({id, link})=>(
                <li key={id}  className='px-4 py-6 text-4xl capitalize cursor-pointer'>
                   <ScrollLink onClick={()=>setNav(!nav)} to={link} smooth duration={500}  >{link}</ScrollLink> 
                    </li>           
             ))
        }
      </ul>
        )
       }
      
      
       

    </div>
  )
}
export default NavBar;
