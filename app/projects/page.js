'use client'

import { projects } from '../data/projects'
import { samples } from "../data/samples"
import Samples from "./components/samples"
import ProjectsList from "./components/projects-list"

const Projects = () => {

    projects.map(
        project => {
            console.log(JSON.stringify(project))
        }
    )

    return (
        <div>
            {/* {<h2 className='fade-in-left-55'>Muestras</h2>
            <br />
            <Samples samples={samples} type="Front-end"/>
            <br />
            <Samples samples={samples} type="Back-end"/>} */}
            <h1 className='fade-in-left-55 text-center mb-12'>Projects</h1>
            <ProjectsList projects={projects} />
        </div>
    );
}

export default Projects;