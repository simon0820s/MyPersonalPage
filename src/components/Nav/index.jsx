import { BiSolidHomeAlt2 } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";
import {FaCode} from 'react-icons/fa'
import './styles.css'

const Nav = () => {
  return (
    <div className="z-50 h-16 flex justify-center fixed w-screen bottom-0">
      <img className='fixed bottom-0 h-14 sm:h-16 left-0 ml-2 opacity-70' src="../img/moonHero.svg" alt="moonHero" />
      <div className="my-control bg-neutral-800 border-gray-700 border-x-2 border-t-1 h-full rounded-t-full flex items-center justify-center gap-3 sm:gap-10 px-10 sm:px-16 pt-2">
        <a href="#contact"><AiFillPhone className="text-zinc-400 text-2xl sm:text-4xl hover:text-purple-300 transition-all ease-in-out duration-200" /> </a>
        <a href="#hero"><BiSolidHomeAlt2 className="text-zinc-400 text-2xl sm:text-4xl hover:text-purple-300 transition-all ease-in-out duration-20" /> </a>
        <a href="#myCode"><FaCode className="text-zinc-400 text-2xl sm:text-4xl hover:text-purple-300 transition-all ease-in-out duration-200" /> </a>
      </div>
    </div>
  )
}

export default Nav