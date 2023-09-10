import {FiArrowUpRight} from "react-icons/fi";
import { Link } from "react-router-dom";
export default function Navbar({isAbsolute}:{isAbsolute:boolean}) {
  return (
    <div className={`md:p-8 p-3 pt-8  flex justify-between  ${isAbsolute?"fixed":""} w-full z-50 left-0 top-0`}>
        <div className="flex justify-between container items-center mx-auto">
            <div className="flex-1">
                <Link to={"/"}><h1 className="text-2xl md:text-4xl font-bold opacity-80 ">(◕ᗜ◕)</h1></Link>
            </div>
            <div className="flex-1 flex justify-end ">
                <a href="https://github.com/tchisama" className="text-2xl font-bold hidden md:flex opacity-80">Github<FiArrowUpRight size={35}/></a>
                <a href="https://github.com/tchisama" className="text-xl font-bold flex md:hidden opacity-80">Github<FiArrowUpRight size={25}/></a>
            </div>
        </div>
    </div>
  )
}
