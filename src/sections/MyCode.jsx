import { BsGithub } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { WebContext } from '../Context'
import Roll from '../components/Roll'
/* eslint-disable react/no-unescaped-entities */
function MyCode() {

  const context = useContext(WebContext)

  return (
    <section
      id="myCode"
      className="h-auto w-screen pb-10">
      <img src="./img/waveCode.svg" alt="waveCode" />
      <div className="flex gap-4 items-start px-8 sm:px-16 md:px-32 lg:px-16 bg-zinc-800 rounded-bl-full sm:pt-10">
        <div className='hidden flex-1 h-96 lg:block'>
          <Roll />
        </div>
        <div className='flex-1 flex flex-col gap-4'>
          <article className="flex flex-col items-end gap-2 sm:gap-4 xl:w-3/4">
            <h1 className="text-2xl sm:text-4xl font-rubik magic-text">About my Code </h1>
            <div className='flex items-center w-full pl-10'>
              <span className='magic-bg w-2 h-2 rounded-full opacity-70'></span>
              <span className='magic-bg w-full h-0.5 opacity-60'></span>
              <span className='magic-bg w-2 h-2 rounded-full opacity-70'></span>
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
              <BsGithub className='text-gray-500 text-2xl sm:text-3xl' />
            </motion.div>
            <a href='https://github.com/simon0820s' target='_blank' rel='noreferrer'
              className='code-button font-extrabold text-sm'>
              <span>Look at my work</span>
            </a>
          </div>
          <div className='flex flex-col items-center gap-4 w-72 sm:w-96 lg:w-80 mt-6 sm:mt-0'>
            <img className="code-hero w-full" src={`./img/myCodeHero/myCodeHero_${context.imgSuffix}.svg`} alt="myCodeHero" />
            <span className='bg-gray-950 opacity-60 w-1/2 h-5 shadow-heroCode'></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyCode