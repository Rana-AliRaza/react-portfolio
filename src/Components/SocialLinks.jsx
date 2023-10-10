import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BiMailSend } from "react-icons/bi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      href: "https://www.linkedin.com/",
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      style: "rounded-tr-md",
    },
    {
      id: 2,
      href: "https://github.com/Rana-AliRaza",
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      style: "rounded-none",
    },
    {
      id: 3,
      href: "mailto:ranaaliryk568@gmail.com",
      child: (
        <>
          Mail <BiMailSend size={30} />
        </>
      ),
      style: "rounded-none",
    },
    {
      id: 4,
      href: "./cv.pdf",
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      style: "rounded-br-md",
      download: "true"
    },
  ];

  return (
    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style , download }) => (
          <li
            key={id}
            className={`flex  items-center justify-between px-4 h-14 w-40   ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500 ${style}`}
          >
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between w-full text-white "
              download = {download}
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
