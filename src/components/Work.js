import React from 'react';
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import Img1 from '../assets/chatApp2.png'
import Img2 from '../assets/chatApp30.png'
import Img3 from '../assets/chatApp4.png'


const Work = () => {
  return (
    <section className='section' id='work'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row gap-x-10'>
            <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}} className='flex-1 flex flex-col gap-y-14 mb-10 lg:mb-0'>
              <div className='p-6'>
                <h2 className='h2 leading-tight text-accent'>My Latest <br></br>Work</h2>
                <p className='max-w-sm mb-16'>A WhatsApp-Clone Using Firebase !</p>
                <a href='https://bbschatapp.netlify.app/'><button className='btn btn-sm'>View Project</button></a>
              </div>

              <a href='https://bbschatapp.netlify.app/'>
                  <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                    <img className='group-hover:scale-125 transition-all duration-500' src={Img1}></img>
                    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Chat App</span></div>
                    <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-3xl text-white'>Project Title</span></div>
                  </div>
              </a>
            </motion.div>

            <motion.div variants={fadeIn('left', 0.2)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}} className='flex-1 flex flex-col gap-y-10'>
                  <a href='https://bbschatapp.netlify.app/'>
                    <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                      <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                      <img className='group-hover:scale-125 transition-all duration-500' src={Img2}></img>
                      <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Chat App</span></div>
                      <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-3xl text-white'>Project Title</span></div>
                    </div>
                  </a>
                  
                  <a href='https://bbschatapp.netlify.app/'>
                    <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                      <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                      <img className='group-hover:scale-125 transition-all duration-500' src={Img3}></img>
                      <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Chat App</span></div>
                      <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-3xl text-white'>Project Title</span></div>
                    </div>
                  </a>
            </motion.div>
          </div>
        </div>
    </section>
    )
};

export default Work;
