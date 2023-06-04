import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/node.png";
import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
import graphql from "../assets/graphql.png";

function Experience() {
    const skills = [
        {
            id:1,
            src: html,
            style:"shadow-orange-500",
            title:"HTML"
        },
        {
            id:2,
            src: css,
            style:"shadow-blue-500",
            title:"CSS"
        },
        {
            id:3,
            src: js,
            style:"shadow-yellow-500",
            title:"JAVASCRIPT"

        },
        {
            id:4,
            src: tailwind,
            style:"shadow-sky-400",
            title:"Tailwind CSS"
        },
        {
            id:5,
            src: react,
            style: "shadow-blue-600",
            title:"React JS"
        },
        {
            id:6,
            src: nodejs,
            style: "shadow-green-500",
            title: "Node JS"
        },
        {
            id:7,
            src: nextjs,
            style :"shadow-white",
            title:"Next js"
        },
        {
            id:8,
            src: graphql,
            style: "shadow-pink-400",
            title:"Graphql"
        },
        {
            id:9,
            src: github,
            style: "shadow-gray-500",
            title:"Github"
        }
    ]
  return (
    <div name="skills" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-5xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
                <p className='py-6'>These are the technologies that I've learned so far.</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {skills.map(({id,src,style,title})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Experience