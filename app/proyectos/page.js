'use client'

import Image from 'next/image'
import { projects } from '../data/projects'

const Projects = () => {

    projects.map(
        project => {
            console.log(JSON.stringify(project))
        }
    )

    return (
        <div>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 px-2">
                {
                    projects.map(
                        project => (
                            <div className='grid grid-cols-1 justify-center'>
                                <div key={project.id} className={`card-wide glass fade-in-left-${60 + Number(project.id) * 5}`}>
                                    <div className="w-full flex justify-center">
                                        <Image src={project.image} width={200} height={200} alt={project.title} />
                                    </div>
                                    <div className="w-full">
                                        <div className="my-3" >
                                            <h3 className="text-lime-700">Proyecto</h3>
                                            <p>{project.title}</p>
                                        </div>
                                        {/*<div className="my-3" >
                                            <h3 className="text-lime-700">Desarrollado en</h3>
                                            <p>{project.techology}</p>
                        </div>*/}
                                        <div className="my-3 h-24" >
                                            <h3 className="text-lime-700">Descripción</h3>
                                            <p className='h-16'>{project.description}</p>
                                        </div>
                                        <div className="my-3" >
                                            <h3 className="text-lime-700">Enlace</h3>
                                            <p><a className='text-lime-300 underline' href={project.link}>{project.title}</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
}

export default Projects;