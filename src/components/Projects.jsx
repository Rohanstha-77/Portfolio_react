import React from 'react'
import { project } from '../constants'

const Projects = () => {
    console.log(project)
    return (
    <>
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className='my-20 text-center text-4xl'>Projects</h1>
            <div className='sm:ml-[120px] md:ml-[215px]'>
                {project.map((project, index)=>(
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <div className='mr-[190px] w-full lg:w-1/4'>
                            <img src={project.image} 
                            width={400}
                            height={400}
                            alt={project.title}
                            className='mb-6 rounded' />
                        </div>
                        <div className='w-full max-w-xl lg:w-1/3'>
                            <a href={project.link} className='mb-2 font-semibold'>{project.title}</a>
                            <p className='mb-4 text-neutral-400'>{project.description}</p>
                            {project.technologies.map((tech,index)=>(
                                <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Projects