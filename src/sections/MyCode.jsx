import { BsGithub } from 'react-icons/bs'
import { motion } from 'framer-motion'
/* eslint-disable react/no-unescaped-entities */
function MyCode() {
  return (
    <section
      id="myCode"
      className="h-auto w-screen pb-10">
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
        <div className='flex items-center justify-end w-full gap-4'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <BsGithub className='text-gray-500 text-xl sm:text-2xl' />
          </motion.div>
          <a href='https://github.com/simon0820s' target='_blank' rel='noreferrer'
            className='code-button font-bold'>
            <span>Look at my work</span>
          </a>
        </div>
        <div className='flex flex-col items-center gap-4 w-72 h-auto md:w-3/5 xl:w-1/2'>
          <img className='code-hero w-full' src="./img/myCodeHero.svg" alt="myCodeHero" />
          <span className='bg-gray-950 opacity-60 w-1/2 h-5 shadow-heroCode'></span>
        </div>
      </div>
    </section>
  )
}

export default MyCode