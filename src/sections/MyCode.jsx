import { BsGithub } from 'react-icons/bs'
import { FaArrowRightLong } from 'react-icons/fa6'
import { motion } from 'framer-motion'
/* eslint-disable react/no-unescaped-entities */
function MyCode() {
  return (
    <section
      id="myCode"
      className="h-screen w-screen">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#27272A" d="M0,160L40,165.3C80,171,160,181,240,202.7C320,224,400,256,480,256C560,256,640,224,720,181.3C800,139,880,85,960,69.3C1040,53,1120,75,1200,106.7C1280,139,1360,181,1400,202.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      <div className="flex flex-col gap-4 items-center px-8 bg-zinc-800 rounded-bl-full pt-16">
        <article className="flex flex-col items-end gap-2">
          <h1 className="text-2xl font-rubik text-purple-200">About my Code </h1>
          <div className='flex items-center w-full pl-10'>
            <span className='bg-purple-200 w-2 h-2 rounded-full opacity-70'></span>
            <span className='bg-purple-200 w-full h-0.5 opacity-60'></span>
            <span className='bg-purple-200 w-2 h-2 rounded-full opacity-70'></span>
          </div>
          <p className="text-end text-sm font-medium opacity-80">
            I am a passionate and organized programmer with experience in modern technologies, coding, AI, and web design. My innovative and meticulous approach leads me to create readable and maintainable code. I always strive for excellence, optimization, and adaptability in both AI and web design.
          </p>
        </article>
        <div className='flex items-center justify-end w-full gap-2'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <BsGithub className='text-purple-200 text-xl' />
          </motion.div>
          <a href='https://github.com/simon0820s' target='_blank' rel='noreferrer'
            className='flex gap-1 items-center p-1 text-xs font-bold border-2 border-purple-200 text-purple-200 rounded-sm'>
            Look at my work<FaArrowRightLong className='text-xs text-purple-200' />
          </a>
        </div>
        <motion.img
          animate={{ y: [0, 2, 0, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='mt-10 w-96' src="src/assets/myCodeHero2.svg" alt="myCodeHero" />
      </div>
    </section>
  )
}

export default MyCode