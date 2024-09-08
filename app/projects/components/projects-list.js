import Image from 'next/image'

const ProjectsList = ({ projects }) => {
  return (
    <>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 px-2">
        {
          projects.map(
            (project, key) => (
              <div className='grid grid-cols-1 justify-center'>
                <div key={key} className={`card-wide glass fade-in-left-${60 + key * 5}`}>
                  <div className="w-full flex justify-center transition-all duration-200 ease-in-out transform hover:scale-105">
                    <a className='text-lime-300 underline' href={project.link.deploy ? project.link.deploy : project.link.github} target="_blank" rel="noopener noreferrer"><Image src={project.image} width={200} height={200} alt={project.title} /></a>
                  </div>
                  <div className="w-full">
                    <div className="my-3" >
                      <h3 className="text-lime-700 font-semibold">Project</h3>
                      <p>{project.title}</p>
                    </div>
                    <div className="my-3" >
                      <h3 className="text-lime-700 font-semibold">Technologies</h3>
                      <p>{project.techology}</p>
                    </div>
                    <div className="my-3 h-24" >
                      <h3 className="text-lime-700 font-semibold">Description</h3>
                      <p className='h-16'>{project.description}</p>
                    </div>
                    <div className="my-3" >
                      <p className="mb-4"><span className="text-lime-700 font-semibold">Repository:</span> <a className='text-lime-300 underline' href={project.link.github} target="_blank" rel="noopener noreferrer">{project.link.github ? project.link.github.replace('http://', '').replace('https://', '') : 'N\\A'}</a></p>
                      <p><span className="text-lime-700 font-semibold">Site:</span> <a className='text-lime-300 underline' href={project.link.deploy} target="_blank" rel="noopener noreferrer">{project.link.deploy ? project.link.deploy.replace('http://', '').replace('https://', '') : 'N\\A'}</a></p>
                    </div>
                  </div>
                </div>
              </div>
            )
          )
        }
      </div>
    </>
  );
}

export default ProjectsList;