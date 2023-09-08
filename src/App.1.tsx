import Home from "../sections/home";
import Work from "../sections/Work";
import About from "../sections/About";
import { useRef, useState } from "react";

export function App() {
  const divRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState({ top: 0, left: 0 });
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = () => {
    // Get the scroll position of the div
    if (divRef.current) {
      setScrollPosition({ top: divRef.current.scrollTop, left: divRef.current.scrollLeft });
    }
    console.log(Math.round(scrollPosition.top / window.innerHeight));
    setCurrentSection(Math.round(scrollPosition.top / window.innerHeight));
  };

  return (
    <div className="fixed bg-red-200 w-screen left-0 top-0 z-1 h-screen ">
      <svg viewBox="0 0 200 200" className="hidden">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.84" numOctaves={"6"} stitchTiles={"stitch"}></feTurbulence>
        </filter>
      </svg>
      {/* <Navbar section={currentSection}/> */}
      <div onScroll={handleScroll} ref={divRef} className="app h-screen bg-custom overflow-y-scroll">
        <Home />
        <About />
        <Work />
      </div>
    </div>
  );
}
