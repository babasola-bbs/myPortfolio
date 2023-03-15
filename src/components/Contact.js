import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'


const Contact = () => {
  return (
    <section className='py-16 lg:section' id='contact'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row'>
            <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}} className='flex-1 flex justify-start items-center'>
              <div>
                <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'><pre>Get In Touch</pre></h4>
                <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's Work <br></br>Together</h2>
              </div>
            </motion.div>


            <motion.form variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}} className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start' action="https://formsubmit.co/06b7ec0f3c4c48713207dcfbf30ff5c2" method="POST" >
              <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' name="name" placeholder='Your Name'/>
              <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' name="email" placeholder='Your Email'/>
              <textarea className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' name="message" placeholder='Your Message'></textarea>
              <button className='btn btn-lg' type='submit'>Send Message</button>
            </motion.form>
          </div>
        </div>
    </section>
  )
};

export default Contact;
