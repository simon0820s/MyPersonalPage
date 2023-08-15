import { BiSolidHomeAlt2 } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";
import {FaCode} from 'react-icons/fa'
const Nav = () => {
  return (
    <div className="bg-zinc-800 w-3/4 rounded-t-full py-6 fixed bottom-0">
      <div className="flex items-end justify-evenly jus px-6">
        <AiFillPhone className="text-zinc-400 text-2xl" />
        <BiSolidHomeAlt2 className="text-zinc-400 text-2xl" />
        <FaCode className="text-zinc-400 text-2xl" />
      </div>
    </div>
  )
}

export default Nav