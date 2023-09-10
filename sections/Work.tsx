import { getDocs} from 'firebase/firestore/lite';
import { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {colRef} from "../firebase"
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3.5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.5
    },
    tablet: {
      breakpoint: { max: 1024, min: 0 },
      items: 1
    },
  };


export default function Work() {

  useEffect(()=>{
     getDocs(colRef).then((snapshot)=>{
      let projects:any=[];
      snapshot.docs.forEach(doc=>{
        projects.push({...doc.data(),id:doc.id})
      })
      console.log(projects)
    }).catch(err=>console.log(err))
  },[])
  return (
    <section id="work" className=" flex pt-8 flex-col justify-center overflow-hidden h-screen container  mx-auto drop-shadow-xl   opacity-80 flex-1 ">
        <h1 className="text-4xl md:text-8xl p-4 py-8  font-bold">My Work</h1>
        <Carousel 
            responsive={responsive}
            infinite={true}
            keyBoardControl={true}
            removeArrowOnDeviceType={[]}
            arrows
          >
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
        </Carousel>
    </section>
  )
}



const Project = ()=>{
    return(
            <div 
            draggable={false} 
            className='hover:scale-[1.01] aspect-[4/3] cursor-pointer duration-150 bg-white relative mx-2 rounded-3xl p-6 overflow-hidden'
            >
              <img 
                draggable={false} 
                src='https://raw.githubusercontent.com/tchi-sama/node-code/master/frontend/public/screenshot.png' className='absolute top-0 left-0 w-full h-full object-cover'></img>
              <h2 className=' absolute bottom-6 left-6 text-xl'>Project name</h2>
            </div>
    )
}

