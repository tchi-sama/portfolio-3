import Home from "../sections/home"
import Navbar from "../components/Navbar"
    
  function App() {
    return (
      <div className="relative">
        <div className="fixed bg-custom w-screen left-0 top-0 z-1 h-screen "></div>
        <svg  viewBox="0 0" className="hidden">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.84" numOctaves={"6"} stitchTiles={"stitch"}></feTurbulence>
          </filter>
        </svg>
        <Navbar/>
        <Home/>
        <Home/>
      </div>
    )
  }

  export default App
