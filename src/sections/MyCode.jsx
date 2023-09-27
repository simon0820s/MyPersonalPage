import { BsGithub } from 'react-icons/bs'
import { FaArrowRightLong } from 'react-icons/fa6'
import { motion } from 'framer-motion'
/* eslint-disable react/no-unescaped-entities */
function MyCode() {
  return (
    <section
      id="myCode"
      className="h-auto w-screen">
     <img src="./img/waveCode.svg" alt="waveCode" /> 
      <div className="flex flex-col gap-4 items-end px-8 sm:px-16 bg-zinc-800 rounded-bl-full">
        <article className="flex flex-col items-end gap-2 xl:w-3/4">
          <h1 className="text-2xl sm:text-4xl font-rubik text-purple-200">About my Code </h1>
          <div className='flex items-center w-full pl-10'>
            <span className='bg-purple-100 w-2 h-2 rounded-full opacity-70'></span>
            <span className='bg-purple-100 w-full h-0.5 opacity-60'></span>
            <span className='bg-purple-100 w-2 h-2 rounded-full opacity-70'></span>
          </div>
          <p className="text-end text-sm sm:text-base font-medium opacity-80">
            I am a passionate and organized programmer with experience in modern technologies, coding, AI, and web design. My innovative and meticulous approach leads me to create readable and maintainable code. I always strive for excellence, optimization, and adaptability in both AI and web design.
          </p>
        </article>
        <div className='flex items-center justify-end w-full gap-2'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <BsGithub className='text-purple-300 text-xl sm:text-2xl' />
          </motion.div>
          <a href='https://github.com/simon0820s' target='_blank' rel='noreferrer'
            className='flex gap-1 items-center p-1 text-xs font-bold border-2 border-purple-300 text-purple-300 rounded-sm'>
            Look at my work<FaArrowRightLong className='text-xs text-purple-300' />
          </a>
        </div>
        <motion.img
          animate={{ y: [0, 5, 0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='mt-10 w-96 md:w-3/5 xl:w-1/2' src="./img/myCodeHero.svg" alt="myCodeHero" />
      </div>
    </section>
  )
}

export default MyCode