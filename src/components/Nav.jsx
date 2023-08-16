import { BiSolidHomeAlt2 } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";
import {FaCode} from 'react-icons/fa'
const Nav = () => {
  return (
    <div className="bg-zinc-800 w-3/4 rounded-t-full py-4 fixed bottom-0">
      <div className="flex items-end justify-evenly m-2 jus px-6">
        <a href="#contact"><AiFillPhone className="text-zinc-400 text-2xl" /> </a>
        <a href="#hero"><BiSolidHomeAlt2 className="text-zinc-400 text-2xl" /> </a>
        <a href="#myCode"><FaCode className="text-zinc-400 text-2xl" /> </a>
      </div>
    </div>
  )
}

export default Nav