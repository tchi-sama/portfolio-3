import Home from "../sections/home"
import Work from "../sections/Work"
import Navbar from "../components/Navbar"
import About from "../sections/About"
import {useRef,useState} from "react"
import Links from "../components/Links"
import React from "react"

import Project from "../pages/Project"


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

    
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homein/>,
  },
  {
    path: "/projects/:projectUrl",
    element: <Project/>,
  },
]);

function Homein (){
    const divRef = useRef<HTMLDivElement>(null)
    const [scrollPosition, setScrollPosition] = useState({ top: 0, left: 0 });
    const [currentSection,setCurrentSection] = useState(0)

    const handleScroll = () => {
      // Get the scroll position of the div
      if(divRef.current){
        setScrollPosition({ top: divRef.current.scrollTop, left: divRef.current.scrollLeft });
      }
      console.log(Math.round(scrollPosition.top/window.innerHeight))
      setCurrentSection(Math.round(scrollPosition.top/window.innerHeight))
    };
  return (
          <div onScroll={handleScroll} ref={divRef} className="app h-screen bg-custom overflow-y-scroll">
            <Navbar isAbsolute={true}/>
            <Links section={currentSection}/>
            <Home/>
            <About/>
            <Work/>
          </div>
  )

}


  function App() {
    
    return (
          <React.StrictMode>
            <RouterProvider router={router} />
          </React.StrictMode>
    )
  }

  export default App
