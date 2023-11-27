import { BiSolidHomeAlt2 } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";
import {FaCode} from 'react-icons/fa'
const Nav = () => {
  return (
    <div className="z-50 h-16 flex justify-center fixed w-screen bottom-0 opacity-95">
      <div className=" bg-zinc-800 h-full rounded-t-full flex items-center justify-center gap-3 sm:gap-10 px-10 sm:px-16 pt-2">
        <a href="#contact"><AiFillPhone className="text-zinc-400 text-2xl sm:text-4xl hover:text-purple-300 transition-all ease-in-out duration-200" /> </a>
        <a href="#hero"><BiSolidHomeAlt2 className="text-zinc-400 text-2xl sm:text-4xl hover:text-purple-300 transition-all ease-in-out duration-200" /> </a>
        <a href="#myCode"><FaCode className="text-zinc-400 text-2xl sm:text-4xl hover:text-purple-300 transition-all ease-in-out duration-200" /> </a>
      </div>
    </div>
  )
}

export default Nav