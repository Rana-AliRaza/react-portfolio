import React from 'react'

const Contact = () => {
  return (
    <div className='w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white' name="contact">
      <div className='max-w-screen-lg mx-auto flex flex-col p-2 '>
        <div className='mb-8'>
           <p className='text-4xl bold border-b-4 border-gray-500 inline '>Contact</p>
           <p className='py-6'>Submit the form in below to touch with me</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <form action="https://getform.io/f/2a3dcf9c-db32-4730-9f82-54585833f64b" method='POST' className='flex flex-col w-full md:w-1/2  '>
          <input type="text" name='Name'
          className='p-2 rounded-md  bg-transparent border-2   focus:outline-none'
          placeholder='Enter your Name:'
          />
          <input type="email" name='email'
          className=' my-4 p-2 rounded-md  bg-transparent border-2   focus:outline-none'
          placeholder='Enter your email:'
          />
          
          <textarea name="message" 
          placeholder='Enter your message:'
          className='p-2 rounded-md   bg-transparent border-2   focus:outline-none' cols="30" rows="10"></textarea>
          <button type='submit'
          className='bg-gradient-to-b from-cyan-200 to-blue-500 px-6 py-3 my-8 flex items-center justify-center focus:scale-105 duration-300 rounded-md mx-auto'
          >
             Let's talk
          </button>

          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Contact
