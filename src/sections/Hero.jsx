/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen w-screen">
      <div className="bg-zinc-700 flex flex-col justify-end w-screen pt-4 pb-0">
        <header className="flex items-center justify-between text-4xl sm:text-5xl px-8 sm:px-16 text-zinc-900 font-rubik">
          <div className="flex flex-col gap-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duraction: 0.3 }}>
              <h1>Hi!</h1>
              <h1>My name is</h1>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duraction: 0.3, delay: 0.1 }}
              className="text-purple-200">Simón</motion.h1>
          </div>
          <img src="./img/heroHero.svg" alt="heroHeroSVG" className="w-12 sm:w-40 lg:w-52" />
        </header>
        <img className="w-full h-full" src="./img/waveHero.svg" alt="waveHero" />
      </div>
      <div className="flex-2 flex flex-col gap-6 px-8 sm:px-16">
        <article className="flex flex-col items-start gap-4 text-3xl sm:text-4xl text-purple-200">
          <div className="flex flex-col gap-1 font-rubik">
            <h1>I'm Web</h1>
            <h1>Fullstack Ingineer</h1>
          </div>

          <p className="text-sm sm:text-base font-medium text-zinc-400">Passionate web full-stack, machine learning, and blockchain ingineer, deeply interested in the world of development since a young age, and currently studying <span className="text-purple-400 font-extrabold opacity-80">Computer science</span> at the National University of Colombia.
          </p>
        </article>
        <article className="flex flex-col items-start gap-4">
          <h1 className="font-rubik text-xl text-purple-200">About Me</h1>
          <div className="flex gap-4 pl-2">
            <div className="flex flex-col items-center">
              <span className="w-2 h-2 rounded-full bg-purple-100"></span>
              <motion.span
                initial={{ opacity: 0, y: -80, scale: 0.2 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duraction: 0.3 }}
                className="w-0.5 h-full bg-gradient-to-b from-purple-100"></motion.span>
            </div>

            <ul className="flex flex-col gap-1 sm:gap-4 text-xs sm:text-sm text-zinc-400">
              <li><span className="text-purple-200">*</span> Seedling I’m currently learning Next, Solidity, React, MongoDB</li>
              <li><span className="text-purple-200">*</span> All of my projects are available at <span className="font-bold text-purple-400 opacity-80">https://github.com/simon0820s</span>
              </li>
              <li><span className="text-purple-200">*</span> Ask me about React, Next, ML, Blockchain, MongoDB</li>
              <li><span className="text-purple-200">*</span> How to reach me <span className="font-bold text-purple-400 opacity-80">simon0820s@gmail.com</span></li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Hero