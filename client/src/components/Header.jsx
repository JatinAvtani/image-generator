import React from 'react'
import {assets} from '../assets/assets'
import { delay, motion } from "motion/react"


const Header = () => {
  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20'
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    >
        <motion.div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border hover:scale-105 border-neutral-500 transition-all duration-700'
        initial={{opacity:0, y:-20}}
        animate={{opacity:1, y:0}}
        viewport={{delay:0.2, duration:0.8}}
        > 
            <p>
                Transforming Words Into Art
            </p>
            <img src={assets.star_icon} alt=""/>
            
        </motion.div>
        <motion.h1 className='text-4xl max-w-[300px] sm:text-6xl sm:max-w-[590px] mx-auto mt-10 text-center'
         
         >Transform Words into <span className='text-red-600 font-bold' initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{delay:0.4,duration:2}}>Art</span> in Seconds</motion.h1>
        <motion.p className='text-center max-w-xl mx-auto mt-5'  
        initial={{opacity:0, y:20}}
      animate={{opacity:1, y:0}}
      transition={{delay:0.6,duration:0.8}} >Unleash boundless creativity with AI – Turn your thoughts into stunning visual art instantly. Just type, and watch the magic unfold.
        </motion.p>
        <motion.button className='sm:text-lg text-white bg-pink-700 w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-lg'
         whileHover={{scale:1.05}}
         whileTap={{scale:0.95}}
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{default: {duration:0.5}, opacity: {delay:0.8, duration: 1}}}
        >Generate Image
          <img src={assets.star_group} alt="" className='
          h-6'/>
        </motion.button>
        <motion.div className=' flex flex-wrap justify-center mt-16 gap-3'  
          
        >
          {Array(6).fill('').map((item , index)=>(
            <motion.img  whileHover={{scale:1.05, duration:0.1}} className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' src={index%2===0 ? assets.sample_img_2 : assets.sample_img_1} alt="" width={70}/>
          ))}
          
          
        </motion.div>
        <motion.p 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:1.2,duration:0.8}}
      className='mt-2 text-neutral-600'>Generated Image Samples </motion.p>

    </motion.div>
  )
}

export default Header
