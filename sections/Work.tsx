import Carousel from "react-multi-carousel";
import useStore from "../store/projects"
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3.5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 0 },
    items: 1,
  },
};

interface Project {
  image: string;
  name: string;
  subtitle: string;
  readme: string;
}


export default function Work() {
  const {projects} = useStore()
  return (
    <section
      id="work"
      className=" flex pt-8 flex-col justify-center overflow-hidden h-screen container  mx-auto drop-shadow-xl   opacity-80 flex-1 "
    >
      <h1 className="text-4xl md:text-8xl p-4 py-8  font-bold">My Work</h1>
      <Carousel
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        removeArrowOnDeviceType={[]}
        arrows
      >
        {projects.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </Carousel>
    </section>
  );
}

const Project = ({ project }: { project: Project }) => {
  return (
    <div
      draggable={false}
      className="hover:scale-[1.01]  aspect-[5/4] cursor-pointer duration-150 bg-white relative mx-2 rounded-3xl p-6 overflow-hidden"
    >
      <img
        draggable={false}
        src={project.image}
        className="absolute top-0 left-0  object-cover"
      ></img>
      <div className="absolute bottom-6 left-6 bg-white p-3 px-6 rounded-3xl shadow-xl">
        <h2 className="    text-gray-800  text-3xl  drop-shadow-lg ">
          {project.name}
        </h2>
        <p className="text-gray-600">{project.subtitle}</p>
      </div>
    </div>
  );
};
