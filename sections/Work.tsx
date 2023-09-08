import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
            className='hover:scale-[1.01] cursor-pointer duration-150 bg-white relative h-[50vh] mx-2 rounded-3xl p-6'
            >
                <h2 className=' absolute bottom-6 left-6 text-xl'>Project name</h2>
            </div>
    )
}

