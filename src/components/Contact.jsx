import React from 'react'

function Contact() {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white'>
        <div className='flex flex-col justify-center mx-auto max-w-screen-lg h-full'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6 '>Submit the form below to get in touch</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/9c4312ba-6b10-4961-9719-fc434de101ee" method="POST" className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent text-white rounded-md focus:outline-none border-2'/>
                    <input type="email" name='email' placeholder='Enter your email' className='my-4 p-2 bg-transparent text-white rounded-md focus:outline-none border-2'/>
                    <textarea name="message" id="" rows="10" className='p-2 bg-transparent border-2 text-white rounded-md focus:outline-none' placeholder='Enter your message'></textarea>
                    <button className='bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-4 my-8 flex mx-auto items-center rounded-md hover:scale-105 duration-200'>Let's Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact