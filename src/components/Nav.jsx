import { BiSolidHomeAlt2 } from "react-icons/bi";
const Nav = () => {
  return (
    <div className="bg-zinc-800 w-1/2 rounded-t-xl py-6 fixed bottom-0">
      <div className="flex items-center justify-between px-4">
        <BiSolidHomeAlt2 className="text-zinc-400" />
      </div>
    </div>
  )
}

export default Nav