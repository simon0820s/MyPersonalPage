/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen">
      <div className="bg-zinc-700 flex-1 flex flex-col justify-end h-1/4 w-screen">
        <header className="text-4xl pl-8 text-zinc-900 font-rubik">
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
        </header>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#18181B" d="M0,0L26.7,26.7C53.3,53,107,107,160,149.3C213.3,192,267,224,320,224C373.3,224,427,192,480,197.3C533.3,203,587,245,640,250.7C693.3,256,747,224,800,218.7C853.3,213,907,235,960,250.7C1013.3,267,1067,277,1120,245.3C1173.3,213,1227,139,1280,96C1333.3,53,1387,43,1413,37.3L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
      </div>
      <div className="flex-2 flex flex-col gap-10 p-8">
        <article className="flex flex-col items-start gap-4 text-3xl text-purple-200">
          <div className="flex flex-col gap-1 font-rubik">
            <h1>I'm Web3</h1>
            <h1>Fullstack Ingineer</h1>
          </div>

          <p className="text-base font-medium text-zinc-400">Passionate full-stack web3, machine learning, and blockchain ingineer, deeply interested in the world of development since a young age, and currently studying <span className="text-purple-200 font-bold opacity-80">computer science</span> at the National University of Colombia.
          </p>
        </article>
        <article className="flex flex-col items-start gap-4">
          <h1 className="font-rubik text-xl text-purple-200">About Me</h1>
          <div className="flex gap-4 pl-2">
            <div className="flex flex-col items-center">
              <span className="w-2 h-2 rounded-full bg-purple-200"></span>
              <motion.span
                initial={{ opacity: 0, y: -80, scale: 0.2 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duraction: 0.3 }}
                className="w-0.5 h-full bg-gradient-to-b from-purple-200"></motion.span>
            </div>

            <ul className="flex flex-col gap-4 text-xs text-zinc-400">
              <li><span className="text-purple-200">*</span> seedling I’m currently learning Next, Solidity, React, MongoDB</li>
              <li><span className="text-purple-200">*</span> All of my projects are available at <span className="font-bold text-purple-200 opacity-80">https://github.com/simon0820s</span>
              </li>
              <li><span className="text-purple-200">*</span> Ask me about React, Next, ML, Blockchain, MongoDB</li>
              <li><span className="text-purple-200">*</span> How to reach me <span className="font-bold text-purple-200 opacity-80">simon0820s@gmail.com</span></li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Hero