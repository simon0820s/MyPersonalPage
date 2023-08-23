import { BiSolidHomeAlt2 } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";
import {FaCode} from 'react-icons/fa'
const Nav = () => {
  return (
    <div className="bg-zinc-800 w-60 h-20 rounded-t-full pt-6 fixed bottom-0">
      <div className="flex justify-evenly m-2 jus px-6">
        <a href="#contact"><AiFillPhone className="text-zinc-400 text-3xl hover:text-purple-200 transition-all ease-in-out duration-200" /> </a>
        <a href="#hero"><BiSolidHomeAlt2 className="text-zinc-400 text-3xl hover:text-purple-200 transition-all ease-in-out duration-200" /> </a>
        <a href="#myCode"><FaCode className="text-zinc-400 text-3xl hover:text-purple-200 transition-all ease-in-out duration-200" /> </a>
      </div>
    </div>
  )
}

export default Nav