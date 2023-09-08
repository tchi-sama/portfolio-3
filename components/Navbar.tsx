import {FiArrowUpRight} from "react-icons/fi";
import Links from "./Links";
export default function Navbar() {
  return (
    <div className="p-8  flex justify-between fixed w-full z-50 left-0 top-0">
        <div className="flex justify-between container mx-auto">
            <div className="flex-1">
                <h1 className="text-4xl font-bold opacity-80 ">(◕ᗜ◕)</h1>
            </div>
            <Links/>
            <div className="flex-1 flex justify-end">
                <h1 className="text-2xl font-bold  opacity-80 flex">Github<FiArrowUpRight size={35}/></h1>
            </div>
        </div>
    </div>
  )
}
