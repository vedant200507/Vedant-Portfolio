import React from 'react'
import { motion } from 'framer-motion'
import { assets, aboutInfo } from "../assets/assets";

const About = () => {
  return (
   <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id="about"
      className='py-20 bg-dark-200'
   >
    <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>About
            <span className='text-purple'> Me</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know more about my background and passion </p>

        <div className='flex flex-col md:flex-row items-center gap-12'>
               <div className='md:w-1/2 rounded-2xl overflow-hidden'>
               <motion.img
               initial={{ opacity: 0, y:50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.2}}
                className='w-full h-full object-cover'
               src={assets.aboutImg} alt="About Me" />
               </div>
               <motion.div 
               initial={{ opacity: 0, y:50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.2}}
               className='md:w-1/2'>
                <div className='rounded-2xl p-8'>
                    <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                    <p className='text-gray-300 mb-6'>Hi, I'm Vedant Kolapkar, a passionate Full Stack Developer who enjoys turning ideas into interactive and user-friendly web applications. My journey began with a curiosity for programming and has grown through continuous learning, hands-on projects, and real-world development experience. 
                    </p>
                    <p className='text-gray-300 mb-6'>
                    Along the way, I have built projects ranging from portfolio websites and food delivery applications to management systems, while strengthening my skills in HTML, CSS, JavaScript, React, Java, SQL, Node.js, Git, and responsive web design. I believe in learning by building, constantly improving my problem-solving abilities, and embracing new technologies. Today, I'm focused on creating clean, scalable, and impactful applications while grabing opportunities to grow in IT industry.
                    </p>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {
                            aboutInfo.map((data, index) => (
                                <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:translate-y-2 cursor-pointer'>
                                <div className='text-purple text-4xl mb-4'>
                                    <data.icon/>

                                </div>
                                <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                                <p className='text-gray-400'>{data.description}</p>
                                </div>
                            ))
                        }

                    </div>
                  

                </div>

               </motion.div>

        </div>
    </div>
    
   </motion.div>
  )
}

export default About
