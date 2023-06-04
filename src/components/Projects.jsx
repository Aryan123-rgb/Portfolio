import React from 'react'
import arraydestrcut from "../assets/portfolio/arrayDestruct.jpg"
import installnode from "../assets/portfolio/installNode.jpg"
import navbar from "../assets/portfolio/navbar.jpg"
import reactSmooth from "../assets/portfolio/reactSmooth.jpg"
import reactWeather from "../assets/portfolio/reactWeather.jpg"

function Projects() {
    const projects = [
        {
            id:1,
            src: arraydestrcut
        },
        {
            id:2,
            src: installnode
        },
        {
            id:3,
            src: navbar
        },
        {
            id:4,
            src: reactSmooth
        },
        {
            id:5,
            src: reactWeather
        }
    ]
  return (
    <div name="projects" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-12 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-400 mb-2'>Projects</p>
                <p className='py-6 text-2xl'>Check out my Projects right here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {projects.map(({id,src})=>(
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className='rounded-md'/>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects