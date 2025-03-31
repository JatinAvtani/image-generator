import React from 'react'
import { stepsData } from '../assets/assets'
import { delay, motion } from "motion/react"

const Steps = () => {
  return (
    <motion.div initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center my-32'>
      <h1  className='text-black-700 inline-flex text-3xl sm:text-0xl font-bold text-center gap-2 bg-white px-20 py-4 rounded-md border hover:scale-105 border-neutral-500 transition-all duration-700'>How AI Magic Works</h1>
      <p className='text-lg text-gray-600 my-6'>Transform Text into Images </p>
      <div className='space-y-4 w-full max-w-3xl text-sm'>
        {stepsData.map((item,index)=>(
            <div key={index} className='flex items-center gap-4 p-5 px-8 bg-white/20 shadow-md border cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-lg'>
                <img width={40} src={item.icon} alt=''/>
                <div>
                    <h2 className='text-xl font-medium'>{item.title}</h2>
                    <p className='text-pink-700'>{item.description}</p>
                </div>
            </div>
        ))}
      </div>
      
    </motion.div>
  )
}

export default Steps
