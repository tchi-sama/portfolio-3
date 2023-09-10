import MarkdownPreview from '@uiw/react-markdown-preview';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import useStore from '../store/projects';
import { useEffect, useState } from 'react';
import WorkSlider from '../components/WorkSlider';
interface Project {
  image: string;
  name: string;
  subtitle: string;
  readme: string;
  urlName:string
}

export default function Project() {

  const {projectUrl} = useParams()
  const {projects} = useStore()
  const [project,setProject]=useState<Project|null>()

  useEffect(()=>{
    setProject(projects.find(p=>p.urlName==projectUrl))
  },[projectUrl])
  useEffect(()=>{

    console.log(project)
  },[project])

  return (
    <div className='px-4 '>
      <div className='opacity-90 2xl:block hidden'><Navbar isAbsolute={true}/></div>
      <div className='opacity-90 2xl:hidden block'><Navbar isAbsolute={false}/></div>

      <div className="max-w-5xl mx-auto md:my-24 my-14 text-gray-700">
          <div >
              <h1 className='text-4xl md:text-8xl pb-2 md:py-6'>{project?.name}</h1>
              <MarkdownPreview  className='text-gray-700  text-sm md:text-xl font-light readme' source={project?.readme}></MarkdownPreview>
              <div className='mt-8'>
                <h1 className='md:text-5xl text-3xl my-8'>checkout more</h1>
                <WorkSlider/>
              </div>
          </div>
      </div>

    </div>
  )
}
