/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion"
import { useContext } from "react"
import { WebContext } from "../Context"
import Roll from '../components/Roll'

const Hero = () => {

  const context = useContext(WebContext)

  return (
    <section
      id="hero"
      className="h-auto w-screen pb-16">
      <div className="bg-zinc-700 flex flex-col justify-end w-screen pt-4 pb-0">
        <header className="flex items-center justify-between text-4xl sm:text-5xl xl:text-7xl px-8 sm:px-16 md:px-32 lg:pl-16 text-zinc-900 font-rubik">
          <div className="flex flex-col gap-2 sm:mt-4">
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
              className="magic-text">Simón</motion.h1>
          </div>
          <div className="relative w-28 h-28 sm:w-40 sm:h-40">
            <img src="./img/heroHero/heroHero_p.svg" alt="heroHeroSVG" className={`w-full absolute ${context.imgSuffix == 'p' ? '' : 'hidden'}`} />
            <img src="./img/heroHero/heroHero_r.svg" alt="heroHeroSVG" className={`w-full absolute ${context.imgSuffix == 'r' ? '' : 'hidden'}`} />
            <img src="./img/heroHero/heroHero_b.svg" alt="heroHeroSVG" className={`w-full absolute ${context.imgSuffix == 'b' ? '' : 'hidden'}`} />
          </div>
        </header>
        <img className="w-full" src="./img/waveHero.svg" alt="waveHero" />
      </div>
      <div className="flex h-auto">
        <div className="flex-1 flex flex-col gap-6 md:gap-4 lg:w-1/2 px-8 sm:px-16 md:px-32 lg:px-16">
          <article className="flex flex-col items-start gap-4 text-3xl sm:text-4xl magic-text">
            <div className="flex flex-col gap-1 font-rubik">
              <h1>I'm Web</h1>
              <h1>Fullstack Ingineer</h1>
            </div>

            <p className="text-sm sm:text-base font-medium text-zinc-400">Passionate web full-stack, machine learning, and blockchain ingineer, deeply interested in the world of development since a young age, and currently studying <span className="magic-text font-extrabold opacity-80">Computer science</span> at the National University of Colombia.
            </p>
          </article>
          <article className="flex flex-col items-start gap-4">
            <h1 className="font-rubik text-xl sm:text-2xl magic-text">About Me</h1>
            <div className="flex gap-4 pl-2">
              <div className="flex flex-col items-center">
                <span className="w-2 h-2 rounded-full magic-bg"></span>
                <span className="w-0.5 h-full bg-gradient-to-b magic-gradient-b"></span>
              </div>

              <ul className="flex flex-col gap-1 sm:gap-4 text-xs sm:text-sm text-zinc-400">
                <li><span className="magic-text">*</span> Seedling I’m currently learning Next, Solidity, React, MongoDB</li>
                <li><span className="magic-text">*</span> All of my projects are available at <span className="font-bold magic-text opacity-80">https://github.com/simon0820s</span>
                </li>
                <li><span className="magic-text">*</span> Ask me about React, Next, ML, Blockchain, MongoDB</li>
                <li><span className="magic-text">*</span> How to reach me <span className="font-bold magic-text opacity-80">simon0820s@gmail.com</span></li>
              </ul>
            </div>
          </article>
        </div>
        <div className="hidden flex-1 lg:relative lg:block mx-16">
          <Roll />
        </div>
      </div>
    </section>
  )
}

export default Hero