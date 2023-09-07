import Home from "../sections/home"
function App() {
  return (
    <div className="h-full ">
      <svg  viewBox="0 0" className="hidden">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.84" numOctaves={"6"} stitchTiles={"stitch"}></feTurbulence>
        </filter>
      </svg>
      <Home/>
    </div>
  )
}

export default App
