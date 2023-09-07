import Navbar from "../components/Navbar"
import Links from "../components/Links"

export default function Home() {
  return (
    <div className="container relative mx-auto flex flex-col h-screen">
        <Navbar/>
        <div className="flex drop-shadow-xl flex-col mb-12 gap-8 opacity-80 flex-1 justify-center">
            <h1 className="text-8xl font-bold">Hey , I’m Tchisama</h1>
            <h2 className="text-6xl max-w-7xl">Elevating digital experiences with precision and style.</h2>
        </div>
        <Links/>
    </div>
  )
}
